'use client';

import { Fade } from 'react-awesome-reveal';
import {
    AboutScreen,
    GreetingScreen,
    PartnersScreen,
    ServicesScreen,
    TeamScreen,
} from 'src/widgets';
import styles from './style.module.scss';

const SECTIONS = [
    <GreetingScreen />,
    <AboutScreen />,
    // <ServicesScreen />,
    // <TeamScreen />,
    // <PartnersScreen />,
];

/**
 * Главная страница сайта (лендинг)
 * */
export const MainPage = () => {
    return (
        <div className={styles['main-page']}>
            {SECTIONS.map((section, i) =>
                i === 0 ? (
                    section
                ) : (
                    <Fade key={`page-${i}`} cascade delay={190}>
                        {section}
                    </Fade>
                )
            )}
        </div>
    );
};
