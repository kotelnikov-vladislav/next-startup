'use client';

import styles from './style.module.scss';
import { Container, Typography } from 'src/shared';
import { useEffect, useState } from 'react';

interface IDronePosition {
    x: number;
    y: number;
}

const BASE_POSITION: IDronePosition = {
    x: 10,
    y: 30,
};

/**
 * Экран приветствия
 * */
export const GreetingScreen = () => {
    const [dronePosition, setDronePosition] =
        useState<IDronePosition>(BASE_POSITION);

    const droneMove = () => {
        setDronePosition((position) => ({
            x: BASE_POSITION.x + Math.random(),
            y: BASE_POSITION.y + Math.random(),
        }));
    };

    useEffect(() => {
        const interval = setInterval(droneMove, 300);

        return () => clearInterval(interval);
    });

    return (
        <div className={styles['greeting']}>
            <Container className={styles['greeting__body']}>
                <div className={styles['greeting__info']}>
                    <Typography
                        tag={'h1'}
                        className={styles['greeting__title']}
                    >
                        Комбинированная машина для борьбы с борщевиком
                        Сосновского
                    </Typography>

                    <Typography
                        tag={'p'}
                        className={styles['greeting__subtitle']}
                    >
                        Современные способы борьбы с вредителями
                    </Typography>
                </div>

                <div
                    className={styles['greeting__bg']}
                    style={{
                        backgroundImage: 'url(/images/backgrounds/main-bg.png)',
                    }}
                />

                <div
                    className={styles['greeting__drone']}
                    style={{
                        top: `${dronePosition.y}%`,
                        right: `${dronePosition.x}%`,
                        backgroundImage: 'url(/images/decors/drone.svg)',
                    }}
                />
            </Container>
        </div>
    );
};
