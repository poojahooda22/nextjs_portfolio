import { validateString } from './../lib/utils';
"use server";

import { Resend } from "resend";
// import { validateString, getErrorMessage } from "@/lib/utils";
// import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown) => {
  if(!value || typeof value !== "string") {
    return false;
  }
}

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

 resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "poojahooda22@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      text: message,
    });
  };
