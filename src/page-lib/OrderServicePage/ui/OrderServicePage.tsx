'use client';

import React, { useState } from 'react';
import { FinalPrice } from 'src/widgets';
import { Container, Typography } from 'src/shared';
import { ServiceConf } from '../components/ServiceСonf';
import {
	IServiceChangeBoolEvent,
	IServiceChangeNumberEvent,
} from '../model/abstract';
import styles from './style.module.scss';

/**
 * Страница заказа услуг
 */
export const OrderServicePage = () => {
	const [changes, setChanges] = useState<
		(IServiceChangeBoolEvent | IServiceChangeNumberEvent)[]
	>([]);

	const onChangeServiceConf = (
		event: IServiceChangeBoolEvent | IServiceChangeNumberEvent
	) => {
		if (event.type === 'number') {
			const newChanges = [
				event,
				...changes.filter((event) => event.type !== 'number'),
			];
			return setChanges(newChanges);
		}

		const newChanges = changes.filter(
			(change) => change.field.label !== event.field.label
		);

		if (event.value) newChanges.push(event);

		setChanges(newChanges);
	};

	const selectService: string = changes
		.map((change) => {
			if (change.type === 'number') return;
			return change.field.optionTwo.tech.displayCaption;
		})
		.filter(Boolean)
		.join(', ');
	const totalPrice: number = changes
		.map((change) => {
			if (change.type === 'number') return;
			return change.field.optionTwo.tech.addedPrice;
		})
		.filter(Boolean)
		.reduce((accValue: number, value) => {
			return accValue + (value || 0);
		}, 0);
	const multiplier: number =
		(changes.find((change) => change.type === 'number')?.value as number) ||
		1;

	return (
		<Container className={styles['order-service']}>
			<div className={styles['order-service__body']}>
				<FinalPrice
					price={totalPrice * multiplier}
					className={styles['order-service__price']}
					pathToImg={'/images/photos/machinery.png'}
					subtitle={'*без учета удаленности расположения мест работ'}
				/>

				<div className={styles['order-service__content']}>
					<div className={styles['order-service__head']}>
						<Typography tag={'h2'}>
							Расчет услуг для ваших задач
						</Typography>

						<Typography tag={'p'}>
							{selectService.length
								? `Выбрано: ${selectService}`
								: `Вы не выбрали ни одной услуги`}
						</Typography>
					</div>

					<ServiceConf onChange={onChangeServiceConf} />
				</div>
			</div>
		</Container>
	);
};
