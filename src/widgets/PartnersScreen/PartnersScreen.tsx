import styles from './styles.module.scss';
import { BaseScreen } from 'src/shared';
import { VerticalCard } from 'src/shared/components/VericalCard';

/**
 * Экран партнеров
 * */
export const PartnersScreen = () => {
    return (
        <BaseScreen
            title={'Партнеры'}
            subtitle={
                'Партнеры предоставляют стартапу финансовые ресуры, техническое оснащение, компонетную базу'
            }
            body={
                <div className={styles['partners-screen']}>
                    <VerticalCard
                        title='Вятский государственный агротехнологический университет'
                        imageUrl={'vgatu'}
                    />
                    <VerticalCard
                        title='Торгово-Сервисная Компания (ТСК) «Техника»'
                        imageUrl={'tsk'}
                    />
                    <VerticalCard
                        title='Фонд содействия инновациям'
                        imageUrl={'fsi'}
                    />
                    <VerticalCard
                        title={'Лаборатория цифровых технологий'}
                        imageUrl={'labs'}
                    />
                </div>
            }
        />
    );
};
