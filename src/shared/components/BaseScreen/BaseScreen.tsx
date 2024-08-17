import { HTMLAttributes, ReactNode } from 'react';
import cn from 'clsx';

import { Typography } from 'src/shared';

import styles from './style.module.scss';

interface IBaseScreenProps extends HTMLAttributes<HTMLDivElement> {
	title: string;
	subtitle?: string;
	body: ReactNode;
}

/**
 * Базоваый экран сайта
 * */
export const BaseScreen = ({
	title,
	subtitle,
	body,
	className,
	...props
}: IBaseScreenProps) => {
	return (
		<div className={cn(styles['base-screen'], className)}>
			<div className={styles['base-screen__head']}>
				<Typography tag={'h2'}>{title}</Typography>
				<Typography tag={'p'}>{subtitle}</Typography>
			</div>

			<div className={styles['base-screen__body']}>{body}</div>
		</div>
	);
};
