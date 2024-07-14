import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface ITextArea
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
    > {
    stretch?: boolean;
}

/**
 * Стилизованный TextArea
 * */
export const TextArea = ({ className, stretch, ...props }: ITextArea) => {
    return (
        <textarea
            className={cn(styles['textarea'], className, {
                [styles['textarea--stretch']]: stretch,
            })}
            {...props}
        />
    );
};
