import { APP_NAME, BASE_URL } from "@/constants/app.constants";

const LOGO_URL = `https://cdn.sanity.io/images/cnqj4i28/production/714f241c352d7be81f968c4a05c0fa4b450320a2-1736x333.png?w=2000&fit=max&auto=format`;

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  service?: string;
}

export const buildInternalEmailHtml = ({
  name,
  email,
  subject,
  message,
  service,
}: ContactRequest) => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>New Contact Inquiry</title>
<meta name="color-scheme" content="dark" />
<meta name="supported-color-schemes" content="dark" />
</head>
<body style="margin:0;padding:0;background-color:#0a120a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;color:#e6ebe5;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a120a;">
<tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">
  <tr>
    <td style="padding:24px 0;text-align:center;">
      <img src="${LOGO_URL}" alt="${APP_NAME}" width="220" style="display:inline-block;height:auto;max-width:220px;" />
    </td>
  </tr>
  <tr>
    <td>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f1a0f;border-radius:12px;overflow:hidden;border:1px solid #1f2b1f;">
        <tr>
          <td style="background:linear-gradient(135deg,#0f1a0f,#1b231b);padding:28px 32px;border-bottom:1px solid #1f2b1f;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#a1c496;letter-spacing:1.5px;text-transform:uppercase;">New Inquiry</p>
                  <h1 style="margin:0;font-size:20px;font-weight:700;color:#e6ebe5;line-height:1.4;font-family:Georgia,'Times New Roman',serif;">Contact Form Submission</h1>
                </td>
                <td width="44" valign="top" align="right">
                  <div style="width:36px;height:36px;border-radius:50%;background:rgba(161,196,150,0.1);border:1px solid rgba(161,196,150,0.2);text-align:center;line-height:36px;font-size:18px;">✉</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 32px 0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="44" valign="top">
                  <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#a1c496,#6a9960);text-align:center;line-height:40px;color:#0a120a;font-size:17px;font-weight:700;font-family:Georgia,serif;">${name.charAt(0).toUpperCase()}</div>
                </td>
                <td style="padding-left:14px;" valign="middle">
                  <p style="margin:0;font-size:15px;font-weight:600;color:#e6ebe5;">${name}</p>
                  <a href="mailto:${email}" style="font-size:13px;color:#a1c496;text-decoration:none;">${email}</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr><td style="padding:20px 32px 0;"><div style="height:1px;background:#1f2b1f;"></div></td></tr>
        ${
          service
            ? `
        <tr>
          <td style="padding:20px 32px 0;">
            <p style="margin:0 0 8px;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#878e86;font-weight:600;">Service Interested In</p>
            <span style="display:inline-block;padding:6px 16px;background:rgba(161,196,150,0.1);color:#a1c496;border-radius:20px;font-size:13px;font-weight:600;border:1px solid rgba(161,196,150,0.2);">${service}</span>
          </td>
        </tr>`
            : ""
        }
        <tr>
          <td style="padding:20px 32px 0;">
            <p style="margin:0 0 8px;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#878e86;font-weight:600;">Subject</p>
            <p style="margin:0;font-size:16px;color:#e6ebe5;font-weight:600;font-family:Georgia,'Times New Roman',serif;">${subject}</p>
          </td>
        </tr>
        <tr><td style="padding:20px 32px 0;"><div style="height:1px;background:#1f2b1f;"></div></td></tr>
        <tr>
          <td style="padding:20px 32px 0;">
            <p style="margin:0 0 10px;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#878e86;font-weight:600;">Message</p>
            <div style="padding:20px;background:#1b231b;border-radius:8px;border:1px solid #1f2b1f;border-left:3px solid #a1c496;">
              <p style="margin:0;font-size:14px;color:#c8d4c4;line-height:1.8;white-space:pre-wrap;">${message}</p>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px;" align="center">
            <table role="presentation" cellpadding="0" cellspacing="0">
              <tr>
                <td style="border-radius:8px;background:linear-gradient(135deg,#a1c496,#6a9960);">
                  <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display:inline-block;padding:14px 32px;font-size:14px;font-weight:700;color:#0a120a;text-decoration:none;letter-spacing:0.3px;">Reply to ${name.split(" ")[0]} ➜</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:24px 32px;text-align:center;">
      <p style="margin:0 0 8px;font-size:12px;color:#878e86;">Internal notification from the ${APP_NAME} contact form.</p>
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
        <tr>
          <td style="padding:0 8px;"><a href="${BASE_URL}" style="font-size:12px;color:#a1c496;text-decoration:none;">Website</a></td>
          <td style="color:#1f2b1f;font-size:12px;">•</td>
          <td style="padding:0 8px;"><a href="${BASE_URL}/contact" style="font-size:12px;color:#a1c496;text-decoration:none;">Contact</a></td>
        </tr>
      </table>
      <p style="margin:12px 0 0;font-size:11px;color:#555e54;">${APP_NAME} © ${new Date().getFullYear()}</p>
    </td>
  </tr>
</table>
</td></tr>
</table>
</body>
</html>
`;

export const buildCustomerEmailHtml = ({
  name,
  subject,
  service,
}: ContactRequest) => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>We received your message</title>
<meta name="color-scheme" content="dark" />
<meta name="supported-color-schemes" content="dark" />
</head>
<body style="margin:0;padding:0;background-color:#0a120a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;color:#e6ebe5;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a120a;">
<tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">
  <tr>
    <td style="padding:24px 0;text-align:center;">
      <img src="${LOGO_URL}" alt="${APP_NAME}" width="220" style="display:inline-block;height:auto;max-width:220px;" />
    </td>
  </tr>
  <tr>
    <td>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f1a0f;border-radius:12px;overflow:hidden;border:1px solid #1f2b1f;">
        <tr>
          <td style="background:linear-gradient(135deg,#0f1a0f,#1b231b);padding:40px 32px;text-align:center;border-bottom:1px solid #1f2b1f;">
            <div style="width:52px;height:52px;border-radius:50%;background:rgba(161,196,150,0.1);border:2px solid rgba(161,196,150,0.25);text-align:center;line-height:52px;font-size:22px;margin:0 auto 14px;color:#a1c496;">✓</div>
            <h1 style="margin:0 0 6px;font-size:22px;font-weight:700;color:#e6ebe5;font-family:Georgia,'Times New Roman',serif;">Thank You, ${name.split(" ")[0]}!</h1>
            <p style="margin:0;font-size:14px;color:#878e86;line-height:1.5;">We've received your message and will be in touch shortly.</p>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px 0;">
            <p style="margin:0;font-size:15px;color:#878e86;line-height:1.7;">Hi <strong style="color:#e6ebe5;">${name.split(" ")[0]}</strong>, thank you for reaching out to ${APP_NAME}. Here's a summary of what you sent us:</p>
          </td>
        </tr>
        <tr><td style="padding:20px 32px 0;"><div style="height:1px;background:#1f2b1f;"></div></td></tr>
        <tr>
          <td style="padding:20px 32px 0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#1b231b;border-radius:8px;border:1px solid #1f2b1f;">
              <tr>
                <td style="padding:20px;">
                  <p style="margin:0 0 6px;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#878e86;font-weight:600;">Subject</p>
                  <p style="margin:0;font-size:15px;color:#e6ebe5;font-weight:600;font-family:Georgia,'Times New Roman',serif;">${subject}</p>
                  ${
                    service
                      ? `
                  <div style="height:1px;background:#1f2b1f;margin:16px 0;"></div>
                  <p style="margin:0 0 6px;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#878e86;font-weight:600;">Service</p>
                  <span style="display:inline-block;padding:5px 14px;background:rgba(161,196,150,0.1);color:#a1c496;border-radius:20px;font-size:12px;font-weight:600;border:1px solid rgba(161,196,150,0.2);">${service}</span>
                  `
                      : ""
                  }
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr><td style="padding:20px 32px 0;"><div style="height:1px;background:#1f2b1f;"></div></td></tr>
        <tr>
          <td style="padding:20px 32px 0;">
            <p style="margin:0 0 16px;font-size:15px;font-weight:600;color:#e6ebe5;font-family:Georgia,'Times New Roman',serif;">What happens next</p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr><td style="padding:8px 0;">
                <table role="presentation" cellpadding="0" cellspacing="0"><tr>
                  <td width="32" valign="top"><div style="width:24px;height:24px;border-radius:50%;background:rgba(161,196,150,0.1);border:1px solid rgba(161,196,150,0.2);text-align:center;line-height:24px;font-size:12px;font-weight:700;color:#a1c496;">1</div></td>
                  <td style="padding-left:12px;"><p style="margin:0;font-size:14px;color:#c8d4c4;line-height:1.5;">Our team reviews your inquiry within <strong style="color:#e6ebe5;">24 hours</strong>.</p></td>
                </tr></table>
              </td></tr>
              <tr><td style="padding:8px 0;">
                <table role="presentation" cellpadding="0" cellspacing="0"><tr>
                  <td width="32" valign="top"><div style="width:24px;height:24px;border-radius:50%;background:rgba(161,196,150,0.1);border:1px solid rgba(161,196,150,0.2);text-align:center;line-height:24px;font-size:12px;font-weight:700;color:#a1c496;">2</div></td>
                  <td style="padding-left:12px;"><p style="margin:0;font-size:14px;color:#c8d4c4;line-height:1.5;">A specialist reaches out to discuss your project.</p></td>
                </tr></table>
              </td></tr>
              <tr><td style="padding:8px 0;">
                <table role="presentation" cellpadding="0" cellspacing="0"><tr>
                  <td width="32" valign="top"><div style="width:24px;height:24px;border-radius:50%;background:rgba(161,196,150,0.1);border:1px solid rgba(161,196,150,0.2);text-align:center;line-height:24px;font-size:12px;font-weight:700;color:#a1c496;">3</div></td>
                  <td style="padding-left:12px;"><p style="margin:0;font-size:14px;color:#c8d4c4;line-height:1.5;">We craft a tailored proposal for your needs.</p></td>
                </tr></table>
              </td></tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px;" align="center">
            <table role="presentation" cellpadding="0" cellspacing="0">
              <tr>
                <td style="border-radius:8px;background:linear-gradient(135deg,#a1c496,#6a9960);">
                  <a href="${BASE_URL}" style="display:inline-block;padding:14px 32px;font-size:14px;font-weight:700;color:#0a120a;text-decoration:none;letter-spacing:0.3px;">Visit Our Website ➜</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:24px 32px;text-align:center;">
      <p style="margin:0 0 8px;font-size:12px;color:#878e86;">You're receiving this because you submitted a form on ${APP_NAME.trim().toLowerCase()}.com</p>
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
        <tr>
          <td style="padding:0 8px;"><a href="${BASE_URL}" style="font-size:12px;color:#a1c496;text-decoration:none;">Website</a></td>
          <td style="color:#1f2b1f;font-size:12px;">•</td>
          <td style="padding:0 8px;"><a href="${BASE_URL}/contact" style="font-size:12px;color:#a1c496;text-decoration:none;">Contact</a></td>
        </tr>
      </table>
      <p style="margin:12px 0 0;font-size:11px;color:#555e54;">${APP_NAME} © ${new Date().getFullYear()}</p>
    </td>
  </tr>
</table>
</td></tr>
</table>
</body>
</html>
`;
