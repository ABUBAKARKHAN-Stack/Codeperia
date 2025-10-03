import { baseUrl } from "@/constants/constants";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendNotificationEmail({ name, email, service, message }: any) {
  return resend.emails.send({
    from: "Codeperia <info@codeperia.com>",
    to: "info@codeperia.com",
    replyTo: email,
    subject: "New Client Inquiry - Codeperia",
    html: `
      <div style="background:#f9fafb;padding:30px;font-family:Segoe UI,Arial,Helvetica,sans-serif;color:#2d2d2d;">
        <div style="max-width:620px;margin:0 auto;background:#fff;border-radius:10px;box-shadow:0 6px 14px rgba(0,0,0,0.06);overflow:hidden;">
          
          <!-- Header -->
          <div style="background:#9810fa;padding:22px;text-align:center;">
            <img src="${baseUrl}/assets/cp-logo.svg" alt="Codeperia Logo" style="height:42px;margin-bottom:8px;" />
            <h1 style="margin:0;color:#fff;font-size:20px;font-weight:600;">New Client Inquiry</h1>
          </div>

          <!-- Client Info -->
          <div style="padding:24px;">
            <p style="margin:6px 0;font-size:15px;"><strong>Name:</strong> ${name}</p>
            <p style="margin:6px 0;font-size:15px;"><strong>Email:</strong> ${email}</p>
            <p style="margin:6px 0;font-size:15px;"><strong>Service Interested:</strong> ${service}</p>

            <div style="margin-top:18px;padding:18px;background:#fafafa;border-left:4px solid #9810fa;border-radius:6px;">
              <p style="margin:0;font-size:15px;font-weight:600;color:#111;">Message:</p>
              <p style="margin-top:8px;white-space:pre-line;line-height:1.6;font-size:14px;color:#444;">${message}</p>
            </div>
          </div>

          <!-- Footer -->
          <div style="background:#f3f4f6;padding:14px;text-align:center;font-size:12px;color:#6b7280;">
            Internal notification — Codeperia Sales Team
          </div>
        </div>
      </div>
    `,
  });
}


async function sendAutoReply({ name, email }: any) {
  return resend.emails.send({
    from: "Codeperia <info@codeperia.com>",
    to: email,
    subject: "We’ve received your inquiry — Codeperia",
    html: `
      <div style="background:#f9fafb;padding:30px;font-family:Segoe UI,Arial,Helvetica,sans-serif;color:#333;">
        <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:10px;box-shadow:0 6px 14px rgba(0,0,0,0.06);overflow:hidden;">
          
          <!-- Header -->
          <div style="background:#fff;padding:20px;text-align:center;border-bottom:1px solid #eee;">
            <img src="${baseUrl}/assets/cp-logo.png" alt="Codeperia Logo" style="height:50px;" />
          </div>

          <!-- Body -->
          <div style="padding:28px;">
            <h2 style="margin-top:0;color:#9810fa;font-size:20px;font-weight:600;">Hi ${name},</h2>
            
            <p style="line-height:1.6;font-size:15px;color:#444;">
              Thank you for contacting <strong>Codeperia</strong>.  
              We’ve received your inquiry and our sales team will get back to you within <strong>24 hours</strong>.
            </p>
            
            <p style="line-height:1.6;font-size:15px;color:#444;">Meanwhile, feel free to explore our services:</p>
            <div style="text-align:center;margin:24px 0;">
              <a href="${baseUrl}/services" style="background:#9810fa;color:#fff;padding:12px 28px;border-radius:6px;text-decoration:none;font-weight:500;font-size:15px;display:inline-block;">
                View Services
              </a>
            </div>

            <p style="line-height:1.6;font-size:15px;color:#444;">We look forward to collaborating with you.</p>
            <p style="margin-top:22px;font-weight:600;color:#111;font-size:15px;">— Team Codeperia Sales</p>
          </div>

          <!-- Footer -->
          <div style="background:#fafafa;padding:14px;text-align:center;font-size:12px;color:#777;">
            © 2025 Codeperia. All rights reserved.
          </div>
        </div>
      </div>
    `,
  });
}



export {
    sendAutoReply,
    sendNotificationEmail
}