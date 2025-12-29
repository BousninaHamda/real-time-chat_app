import { resendClient, sender } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "./emailTemplate.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
  const recipientEmail =
    process.env.NODE_ENV === "development" ? process.env.EMAIL_OWNER : email;

  const { data, error } = await resendClient.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: recipientEmail,
    subject: "Welcome To Chaty",
    html: createWelcomeEmailTemplate(name, clientURL),
  });

  if (error) {
    console.log("Error sending welcome email", error);
    throw new Error("Failed to send welcome email");
  }
  console.log("Welcome Email sent successfully", data);
};
