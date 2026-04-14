"use server";
import {
  buildCustomerEmailHtml,
  buildInternalEmailHtml,
} from "@/lib/email-templates";
import { resendClient } from "@/lib/resend-client";
import { ContactFormValues } from "@/schemas/contact.schema";
import { ErrorResponse } from "resend";

export const sendEmail = async (data: ContactFormValues) => {
  try {
    const resps = await Promise.all([
      resendClient.emails.send({
        from: `T-Solutionz Contact Team <info@t-solutionz.com>`,
        to: "info@t-solutionz.com",
        replyTo: data.email,
        subject: "New Contact Form Submission",
        html: buildInternalEmailHtml({ ...data }),
      }),

      resendClient.emails.send({
        from: `T-Solutionz <info@t-solutionz.com>`,
        to: data.email,
        subject: "We've Received Your Message",
        html: buildCustomerEmailHtml({ ...data }),
      }),
    ]);

    return resps[0];
  } catch (error) {
    const err = error as ErrorResponse;
    console.log("Error sending mails :: ", err);
    throw err;
  }
};
