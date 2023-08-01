import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const CLIENT_ID = 'seu-client-id';
const CLIENT_SECRET = 'seu-client-secret';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'; // Pode ser uma URL de redirecionamento da sua escolha.
const REFRESH_TOKEN = 'seu-refresh-token'; // Obtido do processo de obtenção do token de acesso usando a biblioteca google-auth-library.

async function getAccessToken() {
  const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  try {
    const { token } = await oAuth2Client.getAccessToken();
    return token;
  } catch (error) {
    console.error('Erro ao obter o token de acesso:', error);
    throw new Error('Falha ao obter o token de acesso');
  }
}

export async function sendEmail(to: string, subject: string, html: string) {
  const accessToken = await getAccessToken();

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      type: 'OAuth2',
      user: 'seu-email@gmail.com',
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken,
    },
  });

  try {
    const mailOptions = {
      from: 'seu-email@gmail.com',
      to,
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email enviado:', info.messageId);
  } catch (error) {
    console.error('Erro ao enviar o email:', error);
    throw new Error('Falha ao enviar o email');
  }
}
