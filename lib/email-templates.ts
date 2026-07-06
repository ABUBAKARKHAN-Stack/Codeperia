import { APP_NAME, BASE_URL } from "@/constants/app.constants";

const LOGO_URL = `https://cdn.sanity.io/images/dihj769p/development/23fe2f4b6230b08553c967e8284a8702b5c95caa-400x240.png?w=2000&fit=max&auto=format`;

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
<body style="margin:0;padding:0;background-color:#08010f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;color:#f7f5ff;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#08010f;">
<tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">
  <tr>
    <td style="padding:24px 0;text-align:center;">
      <img src="${LOGO_URL}" alt="${APP_NAME}" width="220" style="display:inline-block;height:auto;max-width:220px;" />
    </td>
  </tr>
  <tr>
    <td>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f061b;border-radius:12px;overflow:hidden;border:1px solid #24143a;">
        <tr>
          <td style="background:linear-gradient(135deg,#0f061b,#1c0e33);padding:28px 32px;border-bottom:1px solid #24143a;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#d8b2ff;letter-spacing:1.5px;text-transform:uppercase;">New Inquiry</p>
                  <h1 style="margin:0;font-size:20px;font-weight:700;color:#f7f5ff;line-height:1.4;font-family:Georgia,'Times New Roman',serif;">Contact Form Submission</h1>
                </td>
                <td width="44" valign="top" align="right">
                  <div style="width:36px;height:36px;border-radius:50%;background:rgba(216,178,255,0.08);border:1px solid rgba(216,178,255,0.18);text-align:center;line-height:36px;font-size:18px;color:#d8b2ff;">✉</div>
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
                  <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#d8b2ff,#a855f7);text-align:center;line-height:40px;color:#08010f;font-size:17px;font-weight:700;font-family:Georgia,serif;">${name.charAt(0).toUpperCase()}</div>
                </td>
                <td style="padding-left:14px;" valign="middle">
                  <p style="margin:0;font-size:15px;font-weight:600;color:#f7f5ff;">${name}</p>
                  <a href="mailto:${email}" style="font-size:13px;color:#d8b2ff;text-decoration:none;">${email}</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr><td style="padding:20px 32px 0;"><div style="height:1px;background:#24143a;"></div></td></tr>
        ${
          service
            ? `
        <tr>
          <td style="padding:20px 32px 0;">
            <p style="margin:0 0 8px;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#a596a5;font-weight:600;">Service Interested In</p>
            <span style="display:inline-block;padding:6px 16px;background:rgba(216,178,255,0.08);color:#d8b2ff;border-radius:20px;font-size:13px;font-weight:600;border:1px solid rgba(216,178,255,0.18);">${service}</span>
          </td>
        </tr>`
            : ""
        }
        <tr>
          <td style="padding:20px 32px 0;">
            <p style="margin:0 0 8px;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#a596a5;font-weight:600;">Subject</p>
            <p style="margin:0;font-size:16px;color:#f7f5ff;font-weight:600;font-family:Georgia,'Times New Roman',serif;">${subject}</p>
          </td>
        </tr>
        <tr><td style="padding:20px 32px 0;"><div style="height:1px;background:#24143a;"></div></td></tr>
        <tr>
          <td style="padding:20px 32px 0;">
            <p style="margin:0 0 10px;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#a596a5;font-weight:600;">Message</p>
            <div style="padding:20px;background:#16092b;border-radius:8px;border:1px solid #24143a;border-left:3px solid #d8b2ff;">
              <p style="margin:0;font-size:14px;color:#eae9ec;line-height:1.8;white-space:pre-wrap;">${message}</p>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px;" align="center">
            <table role="presentation" cellpadding="0" cellspacing="0">
              <tr>
                <td style="border-radius:8px;background:linear-gradient(135deg,#d8b2ff,#a855f7);">
                  <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display:inline-block;padding:14px 32px;font-size:14px;font-weight:700;color:#08010f;text-decoration:none;letter-spacing:0.3px;">Reply to ${name.split(" ")[0]} ➜</a>
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
      <p style="margin:0 0 8px;font-size:12px;color:#a596a5;">Internal notification from the ${APP_NAME} contact form.</p>
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
        <tr>
          <td style="padding:0 8px;"><a href="${BASE_URL}" style="font-size:12px;color:#d8b2ff;text-decoration:none;">Website</a></td>
          <td style="color:#24143a;font-size:12px;">•</td>
          <td style="padding:0 8px;"><a href="${BASE_URL}/contact" style="font-size:12px;color:#d8b2ff;text-decoration:none;">Contact</a></td>
        </tr>
      </table>
      <p style="margin:12px 0 0;font-size:11px;color:#766986;">${APP_NAME} © ${new Date().getFullYear()}</p>
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
<body style="margin:0;padding:0;background-color:#08010f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;color:#f7f5ff;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#08010f;">
<tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">
  <tr>
    <td style="padding:24px 0;text-align:center;">
      <img src="${LOGO_URL}" alt="${APP_NAME}" width="220" style="display:inline-block;height:auto;max-width:220px;" />
    </td>
  </tr>
  <tr>
    <td>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f061b;border-radius:12px;overflow:hidden;border:1px solid #24143a;">
        <tr>
          <td style="background:linear-gradient(135deg,#0f061b,#1c0e33);padding:40px 32px;text-align:center;border-bottom:1px solid #24143a;">
            <div style="width:52px;height:52px;border-radius:50%;background:rgba(216,178,255,0.08);border:2px solid rgba(216,178,255,0.25);text-align:center;line-height:52px;font-size:22px;margin:0 auto 14px;color:#d8b2ff;">✓</div>
            <h1 style="margin:0 0 6px;font-size:22px;font-weight:700;color:#f7f5ff;font-family:Georgia,'Times New Roman',serif;">Thank You, ${name.split(" ")[0]}!</h1>
            <p style="margin:0;font-size:14px;color:#a596a5;line-height:1.5;">We've received your message and will be in touch shortly.</p>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px 0;">
            <p style="margin:0;font-size:15px;color:#a596a5;line-height:1.7;">Hi <strong style="color:#f7f5ff;">${name.split(" ")[0]}</strong>, thank you for reaching out to ${APP_NAME}. Here's a summary of what you sent us:</p>
          </td>
        </tr>
        <tr><td style="padding:20px 32px 0;"><div style="height:1px;background:#24143a;"></div></td></tr>
        <tr>
          <td style="padding:20px 32px 0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#16092b;border-radius:8px;border:1px solid #24143a;">
              <tr>
                <td style="padding:20px;">
                  <p style="margin:0 0 6px;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#a596a5;font-weight:600;">Subject</p>
                  <p style="margin:0;font-size:15px;color:#f7f5ff;font-weight:600;font-family:Georgia,'Times New Roman',serif;">${subject}</p>
                  ${
                    service
                      ? `
                  <div style="height:1px;background:#24143a;margin:16px 0;"></div>
                  <p style="margin:0 0 6px;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#a596a5;font-weight:600;">Service</p>
                  <span style="display:inline-block;padding:5px 14px;background:rgba(216,178,255,0.08);color:#d8b2ff;border-radius:20px;font-size:12px;font-weight:600;border:1px solid rgba(216,178,255,0.18);">${service}</span>
                  `
                      : ""
                  }
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr><td style="padding:20px 32px 0;"><div style="height:1px;background:#24143a;"></div></td></tr>
        <tr>
          <td style="padding:20px 32px 0;">
            <p style="margin:0 0 16px;font-size:15px;font-weight:600;color:#f7f5ff;font-family:Georgia,'Times New Roman',serif;">What happens next</p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr><td style="padding:8px 0;">
                <table role="presentation" cellpadding="0" cellspacing="0"><tr>
                  <td width="32" valign="top"><div style="width:24px;height:24px;border-radius:50%;background:rgba(216,178,255,0.08);border:1px solid rgba(216,178,255,0.18);text-align:center;line-height:24px;font-size:12px;font-weight:700;color:#d8b2ff;">1</div></td>
                  <td style="padding-left:12px;"><p style="margin:0;font-size:14px;color:#eae9ec;line-height:1.5;">Our team reviews your inquiry within <strong style="color:#f7f5ff;">24 hours</strong>.</p></td>
                </tr></table>
              </td></tr>
              <tr><td style="padding:8px 0;">
                <table role="presentation" cellpadding="0" cellspacing="0"><tr>
                  <td width="32" valign="top"><div style="width:24px;height:24px;border-radius:50%;background:rgba(216,178,255,0.08);border:1px solid rgba(216,178,255,0.18);text-align:center;line-height:24px;font-size:12px;font-weight:700;color:#d8b2ff;">2</div></td>
                  <td style="padding-left:12px;"><p style="margin:0;font-size:14px;color:#eae9ec;line-height:1.5;">A specialist reaches out to discuss your project.</p></td>
                </tr></table>
              </td></tr>
              <tr><td style="padding:8px 0;">
                <table role="presentation" cellpadding="0" cellspacing="0"><tr>
                  <td width="32" valign="top"><div style="width:24px;height:24px;border-radius:50%;background:rgba(216,178,255,0.08);border:1px solid rgba(216,178,255,0.18);text-align:center;line-height:24px;font-size:12px;font-weight:700;color:#d8b2ff;">3</div></td>
                  <td style="padding-left:12px;"><p style="margin:0;font-size:14px;color:#eae9ec;line-height:1.5;">We craft a tailored proposal for your needs.</p></td>
                </tr></table>
              </td></tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px;" align="center">
            <table role="presentation" cellpadding="0" cellspacing="0">
              <tr>
                <td style="border-radius:8px;background:linear-gradient(135deg,#d8b2ff,#a855f7);">
                  <a href="${BASE_URL}" style="display:inline-block;padding:14px 32px;font-size:14px;font-weight:700;color:#08010f;text-decoration:none;letter-spacing:0.3px;">Visit Our Website ➜</a>
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
      <p style="margin:0 0 8px;font-size:12px;color:#a596a5;">You're receiving this because you submitted a form on ${APP_NAME.trim().toLowerCase()}.com</p>
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
        <tr>
          <td style="padding:0 8px;"><a href="${BASE_URL}" style="font-size:12px;color:#d8b2ff;text-decoration:none;">Website</a></td>
          <td style="color:#24143a;font-size:12px;">•</td>
          <td style="padding:0 8px;"><a href="${BASE_URL}/contact" style="font-size:12px;color:#d8b2ff;text-decoration:none;">Contact</a></td>
        </tr>
      </table>
      <p style="margin:12px 0 0;font-size:11px;color:#766986;">${APP_NAME} © ${new Date().getFullYear()}</p>
    </td>
  </tr>
</table>
</td></tr>
</table>
</body>
</html>
`;
