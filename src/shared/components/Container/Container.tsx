'use client';

import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'clsx';

interface IContainerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

/**
 * Ограничивает ширину содержимого
 * */
export const Container = ({
	children,
	className,
	...props
}: IContainerProps) => {
	return (
		<div className={cn(styles.container, className)} {...props}>
			{children}
		</div>
	);
};
