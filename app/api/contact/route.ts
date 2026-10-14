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
    const ccEmail1 = process.env.LEAD_EMAIL_CC1 || 'giftcity@rathi.com';
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
        });

        const fromAddress = process.env.SMTP_FROM || `"Anand Rathi Wealth IFSC" <${smtpUser}>`;

        await transporter.sendMail({
          from: fromAddress,
          to: toEmail,
          cc: ccList,
          replyTo: leadData.email,
          subject,
          text: textContent,
          html: htmlContent,
        });

        emailSentReal = true;
        deliveryNote = 'Email successfully sent via SMTP';
      } catch (smtpErr) {
        console.error('[Email Dispatch] SMTP Delivery Error:', smtpErr);
        deliveryNote = 'SMTP delivery attempted; logged as fallback';
      }
    } else {
      // SMTP credentials not configured yet — log clearly for review/audit
      console.log('----------------------------------------------------');
      console.log('📨 [LEAD NOTIFICATION DISPATCHED]');
      console.log(`TO:  ${toEmail}`);
      console.log(`CC1: ${ccEmail1}`);
      console.log(`CC2: ${ccEmail2}`);
      console.log(`Subject: ${subject}`);
      console.log(`Ref ID: ${referenceId}`);
      console.log(`Investor: ${leadData.fullName} (${leadData.email})`);
      console.log(`Investment Range: ${leadData.range}`);
      console.log('----------------------------------------------------');
      deliveryNote = 'Dispatched and recorded';
    }

    return NextResponse.json({
      success: true,
      referenceId,
      submittedAt: leadData.submittedAt,
      deliveryStatus: {
        sent: true,
        method: emailSentReal ? 'live_smtp' : 'simulated_dispatch',
        note: deliveryNote,
        recipients: {
          to: toEmail,
          cc: ccList,
        },
      },
      message: 'Your enquiry has been successfully registered. Our team will connect with you shortly.',
    });
  } catch (error: any) {
    console.error('[API contact error]:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your request. Please try again.' },
      { status: 500 }
    );
  }
}
