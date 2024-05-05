import Images from 'next/image';
import { Typography } from 'src/shared';
import styles from './style.module.scss';

interface IHorizCardProps {
    title: string;
    imageUrl: string;
    description: string;
}

/**
 * Горизонтальная карточка
 * */
export const HorizCard = ({
    title,
    imageUrl,
    description,
}: IHorizCardProps) => {
    return (
        <div className={styles['service-card']}>
            <Images
                alt={title}
                width={'80'}
                height={'80'}
                className={styles['service-card__image']}
                src={`/images/services/${imageUrl}.png`}
            />
            <Typography tag={'h6'} className={styles['service-card__title']}>
                {title}
            </Typography>
            <Typography
                tag={'p'}
                className={styles['service-card__description']}
            >
                {description}
            </Typography>
        </div>
    );
};
