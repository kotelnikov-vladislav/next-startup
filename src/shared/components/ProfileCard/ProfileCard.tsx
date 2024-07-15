import React from 'react';
import Images from 'next/image';
import { Typography } from 'src/shared';
import styles from './style.module.scss';

interface IProfileCardProps {
    title: string;
    imageUrl: string;
    description: string;
    socNetwork: {
        vk?: string;
        tg?: string;
    };
}

/**
 * Карточка профиля
 * */
export const ProfileCard = ({
    title,
    imageUrl,
    description,
    socNetwork,
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

            <div className={styles['profile-card__soc-networks']}>
                {socNetwork.vk && (
                    <a
                        title={'ВКонтакте'}
                        target={'_blank'}
                        href={socNetwork.vk}
                        className={styles['profile-card__soc']}
                    >
                        <Images
                            width={40}
                            height={40}
                            alt={'Вконтакте'}
                            src={'/images/soc-networks/vk.svg'}
                        />
                    </a>
                )}
                {socNetwork.tg && (
                    <a
                        target={'_blank'}
                        href={socNetwork.tg}
                        className={styles['profile-card__soc']}
                    >
                        <Images
                            width={40}
                            height={40}
                            alt={'Telegram'}
                            src={'/images/soc-networks/telegram.svg'}
                        />
                    </a>
                )}
            </div>
        </div>
    );
};
