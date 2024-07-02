import React, { ButtonHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    pending?: boolean;
}

/**
 * Базовая кнопка сайта
 * */
export const Button = ({
    className,
    pending,
    disabled,
    ...props
}: IButtonProps) => {
    return (
        <button
            disabled={disabled || pending}
            className={cn(styles['button'], className, {
                [styles['button--pending']]: pending,
            })}
            {...props}
        />
    );
};
