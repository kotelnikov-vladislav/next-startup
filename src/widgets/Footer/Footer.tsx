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
				© 2024, ООО «БОРЩЕВИК.НЕТ» — Все права защищены
			</Typography>
		</div>
	</footer>
);
