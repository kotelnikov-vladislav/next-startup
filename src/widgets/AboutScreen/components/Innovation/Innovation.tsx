import styles from './style.module.scss';
import { Typography } from 'src/shared';
import Image from 'next/image';

export const Innovation = () => {
    return (
        <div className={styles['innovation']}>
            <div className={styles['innovation__content']}>
                <Typography tag={'h2'} color={'darkened'}>
                    Применяем современные технологии, испытанные не один раз
                </Typography>
                <Typography tag={'p'} color={'darkened'}>
                    Инновационность проекта заключается в применении
                    роботизированной платформы с удаленным управлением
                </Typography>
            </div>

            <div className={styles['innovation__cover']}>
                <Image
                    width={'554'}
                    height={'442'}
                    src={'/images/decors/technologies.svg'}
                    alt={'Эффективное решение проблемы'}
                />
            </div>
        </div>
    );
};
