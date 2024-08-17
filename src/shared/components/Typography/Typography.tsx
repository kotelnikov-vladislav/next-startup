import React, { ElementType } from 'react';
import cn from 'clsx';

import styles from './style.module.scss';

type TTypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface ITypographyProps
	extends React.HTMLProps<HTMLElementTagNameMap[TTypographyTag]> {
	tag: TTypographyTag;
	color?: 'light' | 'darkened' | 'muted';
}

/**
 * Типография сайта
 * */
export const Typography = ({
	tag,
	className,
	color = 'light',
	...props
}: ITypographyProps) => {
	const Element = tag as ElementType;

	return (
		<Element
			className={cn(
				className,
				styles.typography,
				styles[`typography-${tag}`],
				styles[`typography--${color}`]
			)}
			{...props}
		/>
	);
};
