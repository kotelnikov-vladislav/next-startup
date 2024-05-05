import { BaseScreen, ProfileCard } from 'src/shared';
import styles from './style.module.scss';

/**
 * Экрна команды
 * */
export const TeamScreen = () => {
    return (
        <BaseScreen
            title={'Команда стартапа'}
            subtitle={
                'Команда нашего стартапа состоит из талантливых и опытных разработчиков, которые специализируются на создании инновационных решений для сельского хозяйства'
            }
            body={
                <div className={styles['team-screen']}>
                    <ProfileCard
                        title={'Вылегжанин Павел Николаевич'}
                        imageUrl={'/images/avatars/vylegzhanin.png'}
                        description={'Декан инженерного факультета ВГАТУ'}
                    />
                    <ProfileCard
                        title={'Сироткин Егор Сергеевич'}
                        imageUrl={'/images/avatars/sirotkin.png'}
                        description={'Основатель проекта'}
                    />
                    <ProfileCard
                        title={'Козлов Андрей Николаевич'}
                        imageUrl={'/images/avatars/kozlov.png'}
                        description={
                            'Заведующий лабораторией цифровых технологий ВГАТУ'
                        }
                    />
                </div>
            }
        />
    );
};
