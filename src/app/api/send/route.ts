import { sendAutoReply, sendNotificationEmail } from "@/helpers/emails.helpers";




export async function POST(req: Request) {
  try {
    const { name, email, message, service } = await req.json();

    await sendNotificationEmail({ name, email, message, service });
    await sendAutoReply({ name, email });

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}