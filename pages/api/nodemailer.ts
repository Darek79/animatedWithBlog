// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import type { SentMessageInfo } from 'nodemailer';

type Data = {
    [key: string]: string | boolean | string[];
};

export default async function emailHandler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { email } = req.query;
    const transporter = nodemailer.createTransport({
        host: process.env.MAILER_HOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.MAILER_USERNAME,
            pass: process.env.MAILER_PASSWORD,
        },
    });

    const info: SentMessageInfo = await transporter.sendMail({
        from: email as string,
        to: 'dkdevtech@gmail.com',
        subject: 'subscipttion on blog',
        html: `<h2>user with email address ${email} subscribed</h2>`,
    });

    if (info.messageId) {
        res.status(200).json({ message: 'Thanks for subscribing! Please check your email' });
        return null;
    }
    res.status(400).json({ message: 'There was an error' });
}
