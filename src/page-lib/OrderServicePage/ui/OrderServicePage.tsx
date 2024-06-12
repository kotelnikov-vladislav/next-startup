import React from 'react';
import { FinalPrice } from 'src/widgets';
import { Container, Typography } from 'src/shared';
import { ServiceСonf } from '../components/ServiceСonf';
import styles from './style.module.scss';

/**
 * Страница заказа услуг
 */
export const OrderServicePage = () => {
    return (
        <div className={styles['order-service']}>
            <Container>
                <div className={styles['order-service__body']}>
                    <FinalPrice
                        price={15000}
                        pathToImg={'/images/photos/machinery.png'}
                        subtitle={
                            '*без учета удаленности расположения мест работ'
                        }
                    />

                    <div className={styles['order-service__content']}>
                        <div className={styles['order-service__head']}>
                            <Typography tag={'h2'}>
                                Расчет услуг для ваших задач
                            </Typography>

                            <Typography tag={'p'}>
                                Выбрано: услуги опрыскивания от клеща
                            </Typography>
                        </div>

                        <ServiceСonf />
                    </div>
                </div>
            </Container>
        </div>
    );
};
