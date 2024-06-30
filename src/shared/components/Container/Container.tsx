'use client';

import React, {
	createRef,
	DetailedHTMLProps,
	HTMLAttributes,
	RefObject,
	useEffect,
} from 'react';

// px
const FONT_SIZE_BASE = 10;
const FONT_SIZE_MIN = 8;
const BASE_WIDTH_CONTAINER = 1140;

interface IContainerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

/**
 * Ограничивает ширину содержимого
 * */
export const Container = ({ children, ...props }: IContainerProps) => {
	const ref = createRef<HTMLDivElement>();

	/**
	 * До того как придумали CSS...
	 * Зачем это?
	 * */
	const onResizeContainerHandler = (ref: RefObject<HTMLDivElement>) => {
		if (!ref.current) return;
		const width = ref.current.getBoundingClientRect().width;

		const newFontSize = Math.max(
			FONT_SIZE_MIN,
			(width * FONT_SIZE_BASE) / BASE_WIDTH_CONTAINER
		);

		document.documentElement.style.fontSize = `${newFontSize}px`;
	};

	useEffect(() => {
		onResizeContainerHandler(ref);
		window.addEventListener('resize', () => onResizeContainerHandler(ref));

		return () => {
			window.removeEventListener('resize', () =>
				onResizeContainerHandler(ref)
			);
		};
	}, [ref]);

	return (
		<div ref={ref} {...props}>
			{children}
		</div>
	);
};
