import { BaseScreen, Container, HorizCard } from 'src/shared';
import styles from './style.module.scss';
import React from 'react';

/**
 * Экран услуг
 * */
export const ServicesScreen = () => {
	return (
		<BaseScreen
			title='Наши услуги'
			subtitle={
				'Кроме перечисленных ниже услуг мы предоставляем возможность покупки агробота в различных модификациях, а также обучение работы клиентов с установкой'
			}
			body={
				<div className={styles.services}>
					<HorizCard
						title='Обработка от борщевика'
						imageUrl='hogweed'
						description='Агробот комплектуется специальной навеской с реагентами для обработки от борщевика'
					/>
					<HorizCard
						title='Обработка от клеща'
						imageUrl='mite'
						description='Агробот комплектуется специальной навеской с реагентами для обработки от клеща'
					/>
					<HorizCard
						title='Мульчирование'
						imageUrl='mulching'
						description='Агробот комплектуется специальной навеской с реагентами для измельчения борщевика'
					/>
				</div>
			}
		/>
	);
};
