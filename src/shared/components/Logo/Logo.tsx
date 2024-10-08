import Image from 'next/image';
import styles from './style.module.scss';
import { Typography } from 'src/shared';
import Link from 'next/link';
import { getRouteMainPage } from 'src/entry';

export const Logo = () => {
	return (
		<Link href={getRouteMainPage()} style={{ textDecoration: 'none' }}>
			<div className={styles['logo']}>
				<Image
					width={40}
					height={40}
					src={'/images/commons/logo.png'}
					alt={'Логотип компании агробота'}
				/>
				<Typography
					tag={'h3'}
					color={'darkened'}
					className={styles.logo__text}
				>
					борщевик.нет
				</Typography>
			</div>
		</Link>
	);
};
