'use client';

import React, {
    createRef,
    HTMLAttributes,
    ReactNode,
    RefObject,
    useEffect,
    useRef,
    useState,
} from 'react';
import cn from 'classnames';
import styles from './style.module.scss';

const FONT_SIZE_BASE = 10; // px
const FONT_SIZE_MIN = 8; // px
const BASE_WIDTH_CONTAINER = 1140; // px

interface IContainerProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Ограничивает ширину содержимого
 * */
export const Container = ({ className, ...props }: IContainerProps) => {
    const ref = createRef<HTMLDivElement>();

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
        <div
            ref={ref}
            className={cn(className, styles['container'])}
            {...props}
        />
    );
};
