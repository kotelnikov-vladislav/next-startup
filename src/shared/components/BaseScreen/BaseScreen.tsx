import cn from 'classnames';
import { HTMLAttributes, ReactNode } from 'react';
import styles from './style.module.scss';
import { Container, Typography } from 'src/shared';

interface IBaseScreenProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle?: string;
    body: ReactNode;
}

/**
 * Базоваый экран сайта
 * */
export const BaseScreen = ({
    title,
    subtitle,
    body,
    className,
    ...props
}: IBaseScreenProps) => {
    return (
        <div className={cn(styles['base-screen'], className)}>
            <Container>
                <div className={styles['base-screen__head']}>
                    <Typography tag={'h2'}>{title}</Typography>
                    <Typography tag={'p'}>{subtitle}</Typography>
                </div>

                <div className={styles['base-screen__body']}>{body}</div>
            </Container>
        </div>
    );
};
