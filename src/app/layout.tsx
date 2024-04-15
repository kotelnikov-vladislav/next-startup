import React from 'react';
import 'src/entry/styles/index.scss';

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
            <body>{children}</body>
        </html>
    );
}
