import styles from './style.module.scss';
import { Typography } from 'src/shared';
import Images from 'next/image';

interface IProfileCardProps {
    title: string;
    imageUrl: string;
    description: string;
}

/**
 * Карточка профиля
 * */
export const ProfileCard = ({
    title,
    imageUrl,
    description,
}: IProfileCardProps) => {
    return (
        <div className={styles['profile-card']}>
            <Images
                alt={title}
                width={360}
                height={420}
                src={imageUrl}
                className={styles['profile-card__image']}
            />
            <Typography tag={'h6'} className={styles['profile-card__title']}>
                {title}
            </Typography>
            <Typography
                tag={'p'}
                className={styles['profile-card__description']}
            >
                {description}
            </Typography>

            <div className={styles['profile-card__soc-networks']}></div>
        </div>
    );
};
