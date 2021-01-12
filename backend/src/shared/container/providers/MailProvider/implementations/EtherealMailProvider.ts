import nodemailer, { Transporter } from 'nodemailer';
import IMailProvider from '../models/IMailProvider';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

class EtherealMailProvider implements IMailProvider {
  private client: Transporter;

  constructor() {
    nodemailer.createTestAccount().then(account => {
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });

      this.client = transporter;
    });
  }

  public async sendMail(to: string, body: string): Promise<void> {
    const massage = await this.client.sendMail({
      from: 'Equipe GoBarber <equipte@gobarber.com.br>',
      to,
      subject: 'Recuperação de senha',
      text: body,
    });

    console.log('Message sent: %s', massage.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(massage));
  }
}

export default EtherealMailProvider;
