import React from 'react';
import Image from 'next/image';
import { FormatHelper, Typography } from 'src/shared';
import styles from './style.module.scss';

interface IFinalPriceProps {
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
}: IFinalPriceProps) => {
    return (
        <div className={styles['final-price']}>
            <Image
                alt={''}
                width={560}
                height={360}
                src={pathToImg}
                className={styles['final-price__image']}
            />
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
