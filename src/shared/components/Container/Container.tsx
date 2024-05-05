import { HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import styles from './style.module.scss';

interface IContainerProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Ограничивает ширину содержимого
 * */
export const Container = ({ className, ...props }: IContainerProps) => {
    return <div className={cn(className, styles['container'])} {...props} />;
};
