import { Toggler } from 'src/shared';
import { Problems } from '../components/Problems';
import { Consumer } from '../components/Consumer';
import { Innovation } from '../components/Innovation';
import styles from './style.module.scss';

/**
 * Секция о проекте
 * */
export const AboutScreen = () => {
	return (
		<div className={styles['about-screen']}>
			<Toggler
				titles={[
					'Решаемая проблематика',
					'Основные потребители',
					'Инновационность проекта',
				]}
				sections={[<Problems />, <Consumer />, <Innovation />]}
			/>
		</div>
	);
};
