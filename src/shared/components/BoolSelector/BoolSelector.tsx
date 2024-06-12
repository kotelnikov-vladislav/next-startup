'use client';

import React, { createRef, FormEvent, HTMLAttributes, useState } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import { Typography } from 'src/shared';

type TBoolOptionName = 'optionOne' | 'optionTwo';

interface IBoolOption {
    caption: string;
    subCaption?: string;
}

interface IBoolSelectorProps extends HTMLAttributes<HTMLInputElement> {
    stretch?: boolean;
    optionOne: IBoolOption;
    optionTwo: IBoolOption;
    onChangeOption?: (optionName: TBoolOptionName) => void;
}

/**
 * Селектор из двух возможных вариантов
 * */
export const BoolSelector = ({
    stretch,
    optionOne,
    optionTwo,
    onChangeOption,
    ...props
}: IBoolSelectorProps) => {
    const [selectOption, setSelectOption] =
        useState<TBoolOptionName>('optionOne');

    const onSelectId = (id: TBoolOptionName) => {
        setSelectOption(id);
        onChangeOption?.(id);
    };

    return (
        <div
            className={cn(styles['bool-selector'], {
                [styles['bool-selector--stretch']]: stretch,
            })}
        >
            <input
                {...props}
                defaultValue={selectOption}
                className={styles['bool-selector--tech-input']}
            />
            {[optionOne, optionTwo].map((option, i) => {
                const optionName = i === 0 ? 'optionOne' : 'optionTwo';
                const isActive = selectOption === optionName;

                return (
                    <button
                        type='button'
                        key={option.caption}
                        onClick={() => onSelectId(optionName)}
                        className={cn(
                            styles['bool-selector__option'],
                            styles[`bool-selector__option--${i}`],
                            {
                                [styles[`bool-selector__option--active`]]:
                                    isActive,
                            }
                        )}
                    >
                        <Typography
                            tag={'h6'}
                            color={'darkened'}
                            className={styles['bool-selector__caption']}
                        >
                            {option.caption}
                        </Typography>
                        {option?.subCaption && (
                            <Typography
                                tag={'p'}
                                color={'darkened'}
                                className={styles['bool-selector__sub-caption']}
                            >
                                {option.subCaption}
                            </Typography>
                        )}
                    </button>
                );
            })}
        </div>
    );
};
