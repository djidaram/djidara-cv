import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = String(process.env.TO_EMAIL);

export const POST = async (req: Request) => {
  const { email, subject, message } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "djidara-cv <onboarding@resend.dev>",
      to: [toEmail],
      subject: subject,
      react: EmailTemplate({ email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
};
