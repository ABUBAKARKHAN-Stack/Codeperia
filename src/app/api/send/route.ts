import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req: Request) {
  try {
    const { name, email, message, service } = await req.json();


    const { data, error } = await resend.emails.send({
      from: "Codeperia <info@codeperia.com>",
      to: "info@codeperia.com",          
      replyTo: email,                    
      subject: "New Message from Client",
      html: `
      <div class="bg-gray-100 p-6 font-sans text-gray-800">
  <div class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
    <h1 class="text-purple-600 text-2xl font-bold text-center mb-4">Codeperia Sales</h1>
    <p>Dear ${name},</p>
    <p>Thank you for your interest in our services. We have received your inquiry and will prepare a detailed proposal/quotation for you.</p>
    <p>Our sales team will get back to you within <strong>24 hours</strong>. In the meantime, you can explore our offerings:</p>
    <div class="text-center my-4">
      <a href="https://codeperia.com/services" class="bg-purple-600 text-white py-3 px-6 rounded inline-block">View Services</a>
    </div>
    <p>Looking forward to working with you!</p>
    <p>— Team Codeperia Sales</p>
    <p class="text-sm text-gray-500 mt-6">&copy; 2025 Codeperia. All rights reserved.</p>
  </div>
</div>

      `,
    });


    if (error) {
      return Response.json({ error }, { status: 400 });
    }

    return Response.json({ success: true, data }, { status: 200 });
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}
