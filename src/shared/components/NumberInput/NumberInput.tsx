'use client';

import React, { ChangeEvent, HTMLAttributes, useState } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface INumberInputProps extends HTMLAttributes<HTMLInputElement> {
    min?: number;
    max?: number;
    stretch?: boolean;
    onChangeValue?: (value: number) => void;
}

/**
 * Поле для ввода чисел с кнопками инкремента и декремента
 * */
export const NumberInput = ({
    min,
    max,
    stretch,
    className,
    onChangeValue,
    ...props
}: INumberInputProps) => {
    const [numberValue, setNumberValue] = useState(0);

    const onChangeValueHandler = (value: number) => {
        onChangeValue?.(value);
        setNumberValue(value);
    };

    const onClickDecrement = () => {
        const value = min ? Math.max(numberValue - 1, min) : numberValue - 1;
        onChangeValueHandler(value);
    };

    const onClickIncrement = () => {
        const value = max ? Math.min(numberValue + 1, max) : numberValue + 1;
        onChangeValueHandler(value);
    };

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (/\d+/.test(value)) onChangeValueHandler(Number(value));
    };

    return (
        <div
            className={cn(styles['number-input'], className, {
                [styles['number-input--stretch']]: stretch,
            })}
        >
            <button
                onClick={onClickDecrement}
                className={styles['number-input__decrement']}
            />
            <input
                {...props}
                type={'number'}
                value={numberValue}
                onChange={onChangeInput}
                className={styles['number-input__input']}
            />
            <button
                onClick={onClickIncrement}
                className={styles['number-input__increment']}
            />
        </div>
    );
};
