import React from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IInputProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    stretch?: boolean;
}

/**
 * Стилизованный Input
 * */
export const Input = ({ className, stretch, ...props }: IInputProps) => {
    return (
        <input
            className={cn(styles['input'], className, {
                [styles['input--stretch']]: stretch,
            })}
            {...props}
        />
    );
};
