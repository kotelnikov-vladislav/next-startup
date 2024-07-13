'use client';

import {
    AboutScreen,
    GreetingScreen,
    PartnersScreen,
    ServicesScreen,
    TeamScreen,
} from 'src/widgets';
import styles from './style.module.scss';
import { Fade } from 'react-awesome-reveal';

const SECTIONS = [
    <GreetingScreen />,
    <AboutScreen />,
    <ServicesScreen />,
    <TeamScreen />,
    <PartnersScreen />,
];

/**
 * Главная страница сайта (лендинг)
 * */
export const MainPage = () => {
    return (
        <div className={styles['main-page']}>
            {SECTIONS.map((section, i) =>
                i === 0 ? (
                    <div key={i}>{section}</div>
                ) : (
                    <Fade cascade delay={190} key={i}>
                        {section}
                    </Fade>
                )
            )}
        </div>
    );
};
