import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const { html } = (await req.json()) as { html: string };

    const transporter = nodemailer.createTransport({
        host: 'smtp.mail.ru',
        port: 2525,
        auth: {
            user: process.env.NEXT_SERVER_EMAIL_USER,
            pass: process.env.NEXT_SERVER_EMAIL_PASS,
        },
        tls: {
            ciphers: 'SSLv3',
        },
    });

    try {
        await transporter.sendMail({
            html,
            subject: 'Уведомление с сайта',
            from: process.env.NEXT_SERVER_EMAIL_FROM,
            to: process.env.NEXT_SERVER_EMAIL_TO,
        });

        return Response.json({
            status: true,
        });
    } catch (error) {
        return Response.json(
            {
                status: false,
                message: error,
            },
            { status: 500 }
        );
    }
}
