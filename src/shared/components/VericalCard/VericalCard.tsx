import cn from 'clsx';
import Images from 'next/image';
import styles from './style.module.scss';
import { Typography } from 'src/shared';

interface IVerticalCardProps {
	title: string;
	imageUrl: string;
	link?: string;
}

/**
 * Вертикальная карточка
 * */
export const VerticalCard = ({ title, imageUrl, link }: IVerticalCardProps) => {
	const onClickHandler = () => link && window.open(link, '_blank');

	return (
		<div
			className={cn(styles['vertical-card'], {
				[styles['vertical-card--link']]: link,
			})}
			onClick={onClickHandler}
		>
			<Images
				width={115}
				height={115}
				alt={title}
				src={`/images/partners/${imageUrl}.png`}
				className={styles['vertical-card__image']}
			/>
			<Typography tag={'h6'} className={styles['vertical-card__title']}>
				{title}
			</Typography>
		</div>
	);
};
