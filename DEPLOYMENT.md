# Deployment & Infrastructure Guide
**Application:** Anand Rathi Wealth IFSC (GIFT City) Investment Platform  
**Framework:** Next.js 15+ (App Router) with React 19, TypeScript, Tailwind CSS v4, and Node.js Server

---

## 1. System Requirements & Prerequisites

| Component | Minimum Specification | Recommended Production Specification |
| :--- | :--- | :--- |
| **Node.js Runtime** | Node.js 18.18+ | **Node.js 20.x LTS** or **Node.js 22.x LTS** |
| **Package Manager** | npm 9+ | **npm 10+** (or yarn / pnpm) |
| **Memory (RAM)** | 512 MB | **1 GB – 2 GB RAM** |
| **Compute (CPU)** | 1 vCPU | **2 vCPUs** |
| **Disk Storage** | 500 MB | **2 GB SSD** (build artifacts & static assets) |
| **Operating System** | Linux (Ubuntu 20.04+, Debian 11+, Alpine Linux, RHEL 8+) |

---

## 2. Environment Variables (.env.production)

Configure these environment variables in your deployment environment or container secrets:

```env
# Server Runtime
NODE_ENV=production
PORT=3000

# SMTP Configuration (Using Amazon SES)
# Host matches your AWS Region (e.g. ap-south-1 Mumbai, us-east-1 N. Virginia)
SMTP_HOST=email-smtp.ap-south-1.amazonaws.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=AKIAIOSFODNN7EXAMPLE
SMTP_PASS=BMZYourSESGeneratedSmtpPassword123
SMTP_FROM="Anand Rathi Wealth IFSC <enquiry@rathi.com>"

# Lead Notification Recipients (1 Primary TO, 2 CC)
LEAD_EMAIL_TO=deveshtripathi900@gmail.com
LEAD_EMAIL_CC1=enquiry@rathi.com
LEAD_EMAIL_CC2=compliance.giftcity@rathi.com

# Optional (If Gemini API features are utilized)
GEMINI_API_KEY=
```

---

## 3. Build & Run Commands

### Standard Node.js Deployment:
```bash
# 1. Install all dependencies (including devDependencies needed for build)
npm ci

# 2. Compile Next.js production build
npm run build

# 3. Start the production server on port 3000
npm run start
```

---

## 4. Deployment Strategies

### Option A: Docker / Container Deployment (AWS ECS, Google Cloud Run, Azure Container Apps, Kubernetes)

Use the following multi-stage `Dockerfile`:

```dockerfile
# Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN npm run build

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs
EXPOSE 3000

CMD ["npm", "run", "start"]
```

Build and run:
```bash
docker build -t ar-ifsc-web:latest .
docker run -d -p 3000:3000 --env-file .env.production --name ar-ifsc ar-ifsc-web:latest
```

---

### Option B: Linux Virtual Machine (Ubuntu with PM2 & Nginx)

#### 1. PM2 Process Manager setup (`ecosystem.config.js`):
```javascript
module.exports = {
  apps: [
    {
      name: 'ar-ifsc-app',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3000',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
```
Start command:
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### 2. Nginx Reverse Proxy with HTTPS:
```nginx
server {
    listen 80;
    server_name giftcity.anandrathiwealth.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name giftcity.anandrathiwealth.com;

    ssl_certificate /etc/letsencrypt/live/giftcity.anandrathiwealth.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/giftcity.anandrathiwealth.com/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 5. Network & Firewall Requirements

1. **Inbound**:
   - Port `80` (HTTP) & Port `443` (HTTPS) open to public internet on load balancer/Nginx.
   - Port `3000` internal only (not exposed publicly).
2. **Outbound**:
   - Outbound access to the configured SMTP Host on Port `587` (STARTTLS) or Port `465` (SSL) for email delivery.
   - Outbound HTTPS (Port 443) for image assets or external API requests.

---

## 6. Health Check Endpoints
- **Web Interface**: `GET /` (returns HTTP `200 OK`)
- **Thank You Page**: `GET /thank-you` (returns HTTP `200 OK`)
- **Contact API**: `POST /api/contact` (processes incoming enquiry leads)
