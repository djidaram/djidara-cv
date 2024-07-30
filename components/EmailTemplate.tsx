interface EmailTemplateProps {
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  message,
}) => (
  <div>
    <p>
      From: <strong>{email}</strong>
    </p>

    <br />
    <p>{message}</p>
  </div>
);
