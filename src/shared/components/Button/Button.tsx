import React, { ButtonHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'clsx';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * Базовая кнопка сайта
 * */
export const Button = ({ className, ...props }: IButtonProps) => {
	return <button className={cn(styles['button'], className)} {...props} />;
};
