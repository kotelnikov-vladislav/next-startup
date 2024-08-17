import Image from 'next/image';
import { Typography } from 'src/shared';
import styles from './style.module.scss';

export const Problems = () => (
	<div className={styles.problems}>
		<div className={styles.problems__content}>
			<Typography tag={'h2'} color={'darkened'}>
				Мы эффективно решаем актуальную проблему во всех регионах страны
			</Typography>
			<Typography tag={'p'} color={'darkened'}>
				Проект направлен на решение проблемы распространения борщевика
				Сосновского. Разработанное комбинированное устройство позволяет
				эффективно производить мульчирование и обработку, особенно на
				сложных участках и других территориях, включая участки
				сельскохозяйственного назначения.
			</Typography>
		</div>

		<div className={styles.problems__cover}>
			<Image
				width={'554'}
				height={'442'}
				src={'/images/decors/project.svg'}
				alt={'Эффективное решение проблемы'}
			/>
		</div>
	</div>
);
