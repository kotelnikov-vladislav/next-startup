'use client';

import {
    AboutScreen,
    GreetingScreen,
    PartnersScreen,
    ServicesScreen,
    TeamScreen,
} from 'src/widgets';
import styles from './style.module.scss';

/**
 * Главная страница сайта (лендинг)
 * */
export const MainPage = () => {
    return (
        <div className={styles['main-page']}>
            <GreetingScreen />
            <AboutScreen />
            <ServicesScreen />
            <TeamScreen />
            <PartnersScreen />
        </div>
    );
};
