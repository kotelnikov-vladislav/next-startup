'use client';

import cn from 'classnames';
import { ReactNode, useState } from 'react';
import { Typography } from 'src/shared';
import styles from './style.module.scss';
import { Fade, Slide } from 'react-awesome-reveal';

interface ITogglerProps {
    titles: string[];
    sections: ReactNode[];
}

/**
 * Переключатель секций
 * */
export const Toggler = ({ titles, sections }: ITogglerProps) => {
    const [idxActive, setIdxActive] = useState(0);

    const onActiveHandler = (idx: number) => {
        setIdxActive(idx);
    };

    return (
        <div className={styles['toggler']}>
            <div className={styles['toggler__header']}>
                <div className={styles['toggler__titles']}>
                    {titles.map((title, i) => (
                        <Typography
                            tag={'h6'}
                            key={i}
                            color={'darkened'}
                            onClick={() => onActiveHandler(i)}
                            className={cn(styles['toggler__title'], {
                                [styles['toggler__title--active']]:
                                    idxActive === i,
                            })}
                        >
                            {title}
                        </Typography>
                    ))}
                </div>
                <div className={styles['toggler__line']}></div>
            </div>

            <div className={styles['toggler__sections']}>
                {sections.map((section, i) => (
                    <div
                        key={i}
                        className={cn(styles['toggler__section'], {
                            [styles['toggler__section--active']]:
                                idxActive === i,
                        })}
                    >
                        <Fade>{section}</Fade>
                    </div>
                ))}
            </div>
        </div>
    );
};
