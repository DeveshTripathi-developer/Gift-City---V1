export interface ContactFormData {
  fullName: string;
  email: string;
  mobile: string;
  city: string;
  country?: string;
  category: string;
  range: string;
  message?: string;
  referenceId: string;
  submittedAt: string;
}

export function generateLeadEmailHtml(data: ContactFormData): string {
  const safeName = escapeHtml(data.fullName);
  const safeEmail = escapeHtml(data.email);
  const safeMobile = escapeHtml(data.mobile);
  const safeCity = escapeHtml(data.city || data.country || '');
  const safeCategory = escapeHtml(data.category);
  const safeRange = escapeHtml(data.range);
  const safeMessage = data.message ? escapeHtml(data.message).replace(/\n/g, '<br/>') : '<em>No additional message provided</em>';
  const safeRefId = escapeHtml(data.referenceId);
  const safeDate = escapeHtml(data.submittedAt);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Investor Inquiry - GIFT City Platform</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f5f0; margin: 0; padding: 24px; color: #1a140e; }
    .container { max-width: 620px; margin: 0 auto; background: #ffffff; border: 1px solid #e7ded0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.04); }
    .header { background: #1a140e; padding: 28px 32px; border-bottom: 3px solid #b17a2b; color: #ffffff; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 500; letter-spacing: 0.5px; color: #ffffff; }
    .header p { margin: 6px 0 0; font-size: 13px; color: #d0c5b5; letter-spacing: 0.8px; text-transform: uppercase; }
    .badge { display: inline-block; padding: 4px 12px; background: #f4ede2; color: #95631f; font-size: 12px; font-weight: 600; border-radius: 4px; border: 1px solid #dfd1bd; }
    .content { padding: 32px; }
    .intro { margin-bottom: 24px; font-size: 15px; line-height: 1.6; color: #42382f; }
    .meta-box { background: #faf8f5; border: 1px solid #e7ded0; border-radius: 6px; padding: 16px 20px; margin-bottom: 24px; }
    .table { width: 100%; border-collapse: collapse; margin-top: 16px; margin-bottom: 24px; }
    .table th { text-align: left; padding: 10px 14px; background: #fbf9f5; color: #76695b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.6px; border-bottom: 1px solid #e7ded0; }
    .table td { padding: 12px 14px; border-bottom: 1px solid #f0eae1; font-size: 14px; color: #2b221a; }
    .table td.field-name { width: 34%; font-weight: 500; color: #5a4f44; }
    .message-block { background: #ffffff; border-left: 3px solid #b17a2b; padding: 14px 18px; margin-top: 12px; font-size: 14px; line-height: 1.6; color: #2d241c; }
    .footer { background: #fbf9f5; padding: 20px 32px; border-top: 1px solid #e7ded0; font-size: 11px; color: #8c8072; line-height: 1.5; text-align: center; }
    .footer strong { color: #5a4f44; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <p>Anand Rathi FME (IFSC) Private Limited · GIFT City</p>
      <h1>New Investor Lead Notification</h1>
    </div>
    <div class="content">
      <div class="intro">
        A new inquiry has been submitted through the <strong>Connect With Us</strong> form on the GIFT City investment platform website. Please review the investor's information below:
      </div>

      <div class="meta-box">
        <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
          <tr>
            <td style="color: #76695b; padding: 4px 0;">Reference ID:</td>
            <td style="text-align: right; font-weight: 600; color: #b17a2b; padding: 4px 0;">${safeRefId}</td>
          </tr>
          <tr>
            <td style="color: #76695b; padding: 4px 0;">Submission Time:</td>
            <td style="text-align: right; font-weight: 500; color: #1a140e; padding: 4px 0;">${safeDate}</td>
          </tr>
          <tr>
            <td style="color: #76695b; padding: 4px 0;">Category:</td>
            <td style="text-align: right; padding: 4px 0;"><span class="badge">${safeCategory}</span></td>
          </tr>
        </table>
      </div>

      <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.6px; color: #1a140e; margin: 0 0 8px;">Investor Details</h2>
      <table class="table">
        <tbody>
          <tr>
            <td class="field-name">Full Name</td>
            <td><strong>${safeName}</strong></td>
          </tr>
          <tr>
            <td class="field-name">Email Address</td>
            <td><a href="mailto:${safeEmail}" style="color: #b17a2b; text-decoration: none;">${safeEmail}</a></td>
          </tr>
          <tr>
            <td class="field-name">Mobile Number</td>
            <td><a href="tel:${safeMobile}" style="color: #1a140e; text-decoration: none;">${safeMobile}</a></td>
          </tr>
          <tr>
            <td class="field-name">City</td>
            <td><strong>${safeCity}</strong></td>
          </tr>
          <tr>
            <td class="field-name">Investor Category</td>
            <td>${safeCategory}</td>
          </tr>
          <tr>
            <td class="field-name">Indicative Investment Range (INR)</td>
            <td><strong style="color: #95631f;">${safeRange}</strong></td>
          </tr>
        </tbody>
      </table>

      <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.6px; color: #1a140e; margin: 16px 0 6px;">Message / Objectives</h2>
      <div class="message-block">
        ${safeMessage}
      </div>
    </div>

    <div class="footer">
      <p style="margin: 0 0 6px;">
        <strong>Anand Rathi Wealth IFSC</strong> · Regulated by IFSCA, GIFT City, Gandhinagar, Gujarat 382355.
      </p>
      <p style="margin: 0;">
        This automated notification was generated from the public website lead capture system.
      </p>
    </div>
  </div>
</body>
</html>`;
}

export function generateLeadEmailText(data: ContactFormData): string {
  const city = data.city || data.country || '';
  return `NEW INVESTOR INQUIRY - ANAND RATHI WEALTH IFSC (GIFT CITY)
============================================================
Reference ID: ${data.referenceId}
Submitted: ${data.submittedAt}

INVESTOR DETAILS:
- Full Name: ${data.fullName}
- Email: ${data.email}
- Mobile: ${data.mobile}
- City: ${city}
- Investor Category: ${data.category}
- Indicative Investment Range (INR): ${data.range}

MESSAGE / OBJECTIVES:
${data.message || 'No additional message provided'}

------------------------------------------------------------
Anand Rathi FME (IFSC) Private Limited
Regulated by International Financial Services Centres Authority (IFSCA)
`;
}

function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
