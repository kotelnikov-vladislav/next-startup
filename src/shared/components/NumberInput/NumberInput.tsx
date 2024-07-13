'use client';

import React, { ChangeEvent, HTMLAttributes, useState } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import { NumberHelper } from 'src/shared';

interface INumberInputProps extends HTMLAttributes<HTMLInputElement> {
    min?: number;
    max?: number;
    stretch?: boolean;
    onChangeValue?: (value: Maybe<number>) => void;
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
    defaultValue,
    ...props
}: INumberInputProps) => {
    const [numberValue, setNumberValue] = useState<Maybe<number>>(1);

    const onChangeValueHandler = (value: Maybe<number>) => {
        onChangeValue?.(value);
        setNumberValue(value);
    };

    const onClickDecrement = () => {
        let value = numberValue;

        if (value === undefined) value = 0;
        else value = NumberHelper.clampNumber(value - 1, min, max);

        onChangeValueHandler(value);
    };

    const onClickIncrement = () => {
        let value = numberValue;

        if (value === undefined) value = 1;
        else value = NumberHelper.clampNumber(value + 1, min, max);

        onChangeValueHandler(value);
    };

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        let value = NumberHelper.convertToNumber(event.target.value);

        if (value === undefined) onChangeValueHandler(undefined);
        else onChangeValueHandler(NumberHelper.clampNumber(value, min, max));
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
