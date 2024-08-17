import React, { HTMLAttributes } from 'react';
import { FormatHelper, Typography } from 'src/shared';
import styles from './style.module.scss';
import cn from 'clsx';

interface IFinalPriceProps extends HTMLAttributes<HTMLDivElement> {
	price: number;
	subtitle: string;
	pathToImg: string;
}

/**
 * Отображение финальной цены по выбранным услугам
 * */
export const FinalPrice = ({
	price,
	subtitle,
	pathToImg,
	className,
	...props
}: IFinalPriceProps) => {
	return (
		<div className={cn(styles['final-price'], className)}>
			<div className={styles['final-price__image']}>
				<img alt={''} src={pathToImg} />
			</div>
			<div className={styles['final-price__content']}>
				<Typography
					tag={'h6'}
					color={'darkened'}
					className={styles['final-price__title']}
				>
					Итоговая стоимость - {FormatHelper.formatCurrency(price)} *
				</Typography>
				<Typography
					tag={'span'}
					color={'darkened'}
					className={styles['final-price__subtitle']}
				>
					{subtitle}
				</Typography>
			</div>
		</div>
	);
};
