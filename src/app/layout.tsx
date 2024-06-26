import React from 'react';
import { Header } from 'src/widgets';
import { Footer } from 'src/widgets';
import 'src/shared/assets/styles/index.scss';

export const metadata = {
    title: 'Агробот',
    description: 'Агробот для борьбы с борщевиком',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <head>
                <link rel='icon' href='/favicon.ico' sizes='any' />
            </head>
            <body>
                <Header />
                <main id={'app'}>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
