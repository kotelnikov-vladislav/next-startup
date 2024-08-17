import React from 'react';
import { Footer, Header } from 'src/widgets';
import 'src/shared/assets/styles/index.scss';
import { NotifProvider, StoreProvider } from 'src/entry';

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
				<StoreProvider>
					<NotifProvider>
						<Header />
						<main id={'app'}>{children}</main>
						<Footer />
					</NotifProvider>
				</StoreProvider>
			</body>
		</html>
	);
}
