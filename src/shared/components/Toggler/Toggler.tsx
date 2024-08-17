'use client';

import { createRef, ReactNode, useEffect, useRef, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import cn from 'clsx';

import { DomHelper, TScrollable, Typography } from 'src/shared';
import styles from './style.module.scss';

interface ITogglerProps {
	titles: string[];
	sections: ReactNode[];
}

/**
 * Переключатель секций
 * */
export const Toggler = ({ titles, sections }: ITogglerProps) => {
	const [ref] = useState(createRef<HTMLDivElement>());

	const [scrollable, setScrollable] = useState<TScrollable>('none');
	const [idxActive, setIdxActive] = useState(0);

	const onActiveHandler = (idx: number) => {
		setIdxActive(idx);
	};

	const checkIsScrollable = () => {
		if (!ref.current) return;
		setScrollable(DomHelper.checkIsScrollable(ref.current));
	};

	useEffect(() => {
		if (!ref.current) return;

		checkIsScrollable();

		window.addEventListener('resize', checkIsScrollable);
		ref.current.addEventListener('scroll', checkIsScrollable);

		return () => {
			window.removeEventListener('resize', checkIsScrollable);
			ref.current?.removeEventListener('scroll', checkIsScrollable);
		};
	}, [ref]);

	return (
		<div
			className={cn(styles.toggler, {
				[styles['toggler--scrollable-left']]:
					scrollable === 'left' || scrollable === 'both',
				[styles['toggler--scrollable-right']]:
					scrollable === 'right' || scrollable === 'both',
			})}
		>
			<div className={styles.toggler__header}>
				<div ref={ref} className={styles.toggler__titles}>
					{titles.map((title, i) => (
						<Typography
							tag={'h6'}
							key={i}
							color={'darkened'}
							onClick={() => onActiveHandler(i)}
							className={cn(styles.toggler__title, {
								[styles['toggler__title--active']]:
									idxActive === i,
							})}
						>
							{title}
						</Typography>
					))}
				</div>
			</div>

			<div className={styles.toggler__line} />

			<div className={styles.toggler__sections}>
				{sections.map((section, i) => (
					<div
						key={i}
						className={cn(styles.toggler__section, {
							[styles['toggler__section--active']]:
								idxActive === i,
						})}
					>
						<Fade>{section}</Fade>
					</div>
				))}
			</div>
		</div>
	);
};
