import { BaseScreen, ProfileCard } from 'src/shared';
import styles from './style.module.scss';
import { TEAM } from 'src/widgets/TeamScreen/model/const';

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
                    {TEAM.map((people) => (
                        <ProfileCard
                            key={people.title}
                            title={people.title}
                            imageUrl={people.imageUrl}
                            socNetwork={people.socNetwork}
                            description={people.description}
                        />
                    ))}
                </div>
            }
        />
    );
};
