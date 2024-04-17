import React from 'react';
import cn from 'classnames';
import styles from './style.module.scss';

type TTypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

interface ITypographyProps
    extends React.HTMLProps<HTMLElementTagNameMap[TTypographyTag]> {
    tag: TTypographyTag;
}

/**
 * Типография сайта
 * */
export const Typography = ({ tag, className, ...props }: ITypographyProps) => {
    const Element = tag as React.ElementType;

    return (
        <Element
            className={cn(
                className,
                styles['typography'],
                styles[`typography-${tag}`]
            )}
            {...props}
        />
    );
};
