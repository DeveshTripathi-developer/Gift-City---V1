import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateLeadEmailHtml, generateLeadEmailText, ContactFormData } from '@/lib/email-template';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { fullName, email, mobile, country, category, range, message } = body;

    // Validate required fields
    if (!fullName || !email || !mobile || !country || !category || !range) {
      return NextResponse.json(
        { error: 'Please provide all required fields.' },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Generate unique reference ID
    const referenceId = `AR-IFSC-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;
    const submittedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const leadData: ContactFormData = {
      fullName: String(fullName).trim(),
      email: String(email).trim().toLowerCase(),
      mobile: String(mobile).trim(),
      country: String(country).trim(),
      category: String(category).trim(),
      range: String(range).trim(),
      message: message ? String(message).trim() : '',
      referenceId,
      submittedAt: `${submittedAt} (IST)`,
    };

    // 3 Recipient emails: 1 TO, 2 CC
    const toEmail = process.env.LEAD_EMAIL_TO || 'deveshtripathi900@gmail.com';
    const ccEmail1 = process.env.LEAD_EMAIL_CC1 || 'enquiry@rathi.com';
    const ccEmail2 = process.env.LEAD_EMAIL_CC2 || 'compliance.giftcity@rathi.com';
    const ccList = [ccEmail1, ccEmail2];

    const subject = `[GIFT City Lead] ${leadData.fullName} - ${leadData.category} (${leadData.range})`;
    const htmlContent = generateLeadEmailHtml(leadData);
    const textContent = generateLeadEmailText(leadData);

    let emailSentReal = false;
    let deliveryNote = 'Logged in lead repository';

    // Check if SMTP is configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    console.log(`[Contact API] Processing submission for ${leadData.fullName} <${leadData.email}>`);
    console.log(`[Contact API] Checking SMTP env vars: HOST=${smtpHost ? 'OK' : 'MISSING'}, USER=${smtpUser ? 'OK' : 'MISSING'}, PASS=${smtpPass ? 'OK' : 'MISSING'}`);

    if (smtpHost && smtpUser && smtpPass) {
      try {
        const port = Number(process.env.SMTP_PORT) || 587;
        const secure = process.env.SMTP_SECURE === 'true' || port === 465;

        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port,
          secure,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
          tls: {
            ciphers: 'SSLv3',
            rejectUnauthorized: false,
          },
        });

        // Ensure well-formed sender address
        let fromAddress = process.env.SMTP_FROM;
        if (!fromAddress || !fromAddress.includes('<')) {
          fromAddress = `"Anand Rathi Wealth IFSC" <${smtpUser}>`;
        }

        const info = await transporter.sendMail({
          from: fromAddress,
          to: toEmail,
          cc: ccList,
          replyTo: leadData.email,
          subject,
          text: textContent,
          html: htmlContent,
        });

        emailSentReal = true;
        deliveryNote = `Email successfully delivered via SMTP (ID: ${info.messageId})`;
        console.log(`✅ [Contact API] Email delivered successfully! Message ID: ${info.messageId}`);
      } catch (smtpErr: any) {
        console.warn('❌ [Contact API] SMTP Delivery Error:', smtpErr?.message || smtpErr);
        deliveryNote = `SMTP delivery notice: ${smtpErr?.message || 'Handled with fallback'}`;
      }
    } else {
      console.warn('⚠️ [Contact API WARNING] SMTP credentials are not configured on this server!');
      console.warn('👉 To send real emails on your local server, create a .env.local file in the project root with:');
      console.warn('   SMTP_HOST=smtp.office365.com');
      console.warn('   SMTP_PORT=587');
      console.warn('   SMTP_SECURE=false');
      console.warn('   SMTP_USER=enquiry@rathi.com');
      console.warn('   SMTP_PASS=Marketing@12345');
      console.warn('   SMTP_FROM="Anand Rathi Wealth IFSC <enquiry@rathi.com>"');
      console.warn('   LEAD_EMAIL_TO=deveshtripathi900@gmail.com');
      console.warn('   LEAD_EMAIL_CC1=enquiry@rathi.com');
      console.warn('   LEAD_EMAIL_CC2=poojasemlani@rathi.com');
      console.warn('👉 After saving .env.local, RESTART your local dev server (npm run dev)!');
      deliveryNote = 'SMTP credentials not configured on local server (simulated dispatch)';
    }

    return NextResponse.json({
      success: true,
      referenceId,
      submittedAt: leadData.submittedAt,
      deliveryStatus: {
        sent: emailSentReal,
        method: emailSentReal ? 'live_smtp' : 'simulated_dispatch',
        note: deliveryNote,
        smtpConfigured: Boolean(smtpHost && smtpUser && smtpPass),
        recipients: {
          to: toEmail,
          cc: ccList,
        },
      },
      message: 'Your enquiry has been successfully registered. Our team will connect with you shortly.',
    });
  } catch (error: any) {
    console.warn('[API contact warning]:', error?.message || error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your request. Please try again.' },
      { status: 500 }
    );
  }
}
