import cn from 'clsx';

import { Typography } from 'src/shared';

import styles from './style.module.scss';

/**
 * Подвал сайта
 * */
export const Footer = () => (
	<footer className={cn(styles.footer)}>
		<div className={'container'}>
			<Typography tag={'span'} color={'muted'}>
				Copyright by 2023 ООО “ЕГОР”
			</Typography>
		</div>
	</footer>
);
