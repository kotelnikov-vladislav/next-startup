import React from 'react';
import { Header, Footer } from 'src/widgets';
import 'src/shared/assets/styles/index.scss';
import { Container } from 'src/shared';

export const metadata = {
	title: 'Агробот',
	description: 'Агробот для борьбы с борщевиком',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/favicon.ico' sizes='any' />
			</head>
			<body>
				<Header />
				<Container>
					<main id={'app'} className={'container'}>
						{children}
					</main>
				</Container>
				<Footer />
			</body>
		</html>
	);
}
