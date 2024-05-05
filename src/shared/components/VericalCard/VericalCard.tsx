import styles from './style.module.scss';
import Images from 'next/image';
import { Typography } from 'src/shared';

interface IVerticalCardProps {
    title: string;
    imageUrl: string;
}

/**
 * Вертикальная карточка
 * */
export const VerticalCard = ({ title, imageUrl }: IVerticalCardProps) => (
    <div className={styles['vertical-card']}>
        <Images
            width={115}
            height={115}
            alt={title}
            src={`/images/partners/${imageUrl}.png`}
            className={styles['vertical-card__image']}
        />
        <Typography tag={'h6'} className={styles['vertical-card__title']}>
            {title}
        </Typography>
    </div>
);
