import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6ab2c03669ef9b",
    pass: "12b2b9e69a15a9",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Widget <teste@widget.com>",
      to: "Bruno <brunocaneo3@gmail.com>",
      subject: subject,
      html: body,
    });
  }
}
