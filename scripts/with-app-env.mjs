#!/usr/bin/env node
import { spawn } from 'node:child_process';
import process from 'node:process';
import fs from 'node:fs';
import path from 'node:path';

// Load .env or .env.local if present locally
const envFiles = ['.env', '.env.local'];
for (const envFile of envFiles) {
  const envPath = path.resolve(process.cwd(), envFile);
  if (fs.existsSync(envPath)) {
    try {
      const content = fs.readFileSync(envPath, 'utf8');
      content.split('\n').forEach((line) => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#')) {
          const eqIdx = trimmed.indexOf('=');
          if (eqIdx !== -1) {
            const key = trimmed.slice(0, eqIdx).trim();
            const val = trimmed.slice(eqIdx + 1).trim().replace(/^['"]|['"]$/g, '');
            if (key && !(key in process.env)) {
              process.env[key] = val;
            }
          }
        }
      });
    } catch {
      // Ignore read errors
    }
  }
}

let args = process.argv.slice(2);

// If no arguments provided, default to next dev
if (args.length === 0) {
  args = ['next', 'dev'];
}

let cmd = args[0];
let cmdArgs = args.slice(1);

// This is a Next.js App Router application.
// If the runner tries to execute 'vite', gracefully redirect to 'next dev'.
if (cmd === 'vite') {
  let port = '3000';
  let host = '0.0.0.0';

  for (let i = 0; i < cmdArgs.length; i++) {
    if (cmdArgs[i] === '--port' && cmdArgs[i + 1]) {
      port = cmdArgs[i + 1];
    } else if (cmdArgs[i] === '-p' && cmdArgs[i + 1]) {
      port = cmdArgs[i + 1];
    } else if (cmdArgs[i] === '--host' && cmdArgs[i + 1]) {
      host = cmdArgs[i + 1];
    } else if (cmdArgs[i] === '-H' && cmdArgs[i + 1]) {
      host = cmdArgs[i + 1];
    }
  }

  cmd = 'npx';
  cmdArgs = ['next', 'dev', '-p', port, '-H', host];
}

const child = spawn(cmd, cmdArgs, {
  stdio: 'inherit',
  shell: true,
  env: process.env,
});

child.on('error', (err) => {
  console.error(`[with-app-env] failed to run ${cmd}:`, err.message);
  process.exit(1);
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  } else {
    process.exit(code ?? 0);
  }
});
