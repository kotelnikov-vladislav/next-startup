import React, { ButtonHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * Базовая кнопка сайта
 * */
export const Button = ({ className, ...props }: IButtonProps) => {
    return <button className={cn(styles['button'], className)} {...props} />;
};
