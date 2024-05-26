"use server";
import React from "react";
import { Resend } from "resend";
import { getErrorMessage, validateString } from '../lib/utils';

// this is how that exception is handled in the code
const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
  throw new Error('Missing RESEND_API_KEY environment variable');
}

const resend = new Resend(resendApiKey);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if(!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email"
    }
  }

  if(!validateString(message, 5000)) {
    return {
      error: "Invalid message"
    }
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "poojahooda22@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      text: message as string,     
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    }
  }
  return {
    data,  
  };
};
