import { Resend } from "resend";
export const resendClient = new Resend(process.env.NEXT_RESEND_API_KEY);
