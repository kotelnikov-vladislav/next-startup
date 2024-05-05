import styles from './style.module.scss';
import { Typography } from 'src/shared';
import Image from 'next/image';

const CONSUMER_LIST = [
    'Коммунальные службы',
    'Фермерские хозяйства',
    'Сельскохозяйственные предприятия',
    'Предприятия по благоустройству территорий',
];

export const Consumer = () => (
    <div className={styles['consumer']}>
        <div className={styles['consumer__content']}>
            <Typography tag={'h2'} color={'darkened'}>
                Потребителем наших услуг и агроботов может быть кто угодно
            </Typography>
            <ul className={styles['consumer__list']}>
                {CONSUMER_LIST.map((item, index) => (
                    <li key={item}>
                        <Typography tag={'p'}>{item}</Typography>
                    </li>
                ))}
            </ul>
        </div>

        <div className={styles['consumer__cover']}>
            <Image
                width={'554'}
                height={'442'}
                src={'/images/decors/ideas.svg'}
                alt={'Эффективное решение проблемы'}
            />
        </div>
    </div>
);
