import React from 'react';
import styles from './style.module.scss';
import {
    BoolSelector,
    Button,
    Input,
    NumberInput,
    Typography,
} from 'src/shared';

const ServiceSprayingFromHogweed = {
    optionOne: {
        caption: 'Нет, спасибо',
    },
    optionTwo: {
        caption: 'Опрыскивание',
        subCaption: '+ 5 000 руб/га',
    },
};

const ServiceSprayingFromMite = {
    optionOne: {
        caption: 'Нет, спасибо',
    },
    optionTwo: {
        caption: 'Опрыскивание',
        subCaption: '+ 5 000 руб/га',
    },
};

const ServiceMulchingHogweed = {
    optionOne: {
        caption: 'Нет, спасибо',
    },
    optionTwo: {
        caption: 'Мульчирование',
        subCaption: '+ 5 000 руб/га',
    },
};

/**
 * Конфигуратор услуг
 * */
export const ServiceСonf = () => {
    return (
        <div className={styles['service-conf']}>
            <div className={styles['service-conf__field']}>
                <Typography
                    tag={'h3'}
                    color={'darkened'}
                    className={styles['service-conf__field-name']}
                >
                    Опрыскивание территории от борщевика
                </Typography>

                <BoolSelector stretch {...ServiceSprayingFromHogweed} />
            </div>

            <div className={styles['service-conf__field']}>
                <Typography
                    tag={'h3'}
                    color={'darkened'}
                    className={styles['service-conf__field-name']}
                >
                    Опрыскивание территории от клеща
                </Typography>

                <BoolSelector stretch {...ServiceSprayingFromMite} />
            </div>

            <div className={styles['service-conf__field']}>
                <Typography
                    tag={'h3'}
                    color={'darkened'}
                    className={styles['service-conf__field-name']}
                >
                    Мульчирование борщевика
                </Typography>

                <BoolSelector stretch {...ServiceMulchingHogweed} />
            </div>

            <div className={styles['service-conf__field']}>
                <Typography
                    tag={'h3'}
                    color={'darkened'}
                    className={styles['service-conf__field-name']}
                >
                    Площадь обработки, га
                </Typography>

                <NumberInput min={0} />
            </div>

            <div className={styles['service-conf__field']}>
                <Typography
                    tag={'h3'}
                    color={'darkened'}
                    className={styles['service-conf__field-name']}
                >
                    Отправка заявки для заказа
                </Typography>

                <div className={styles['service-conf__field-email']}>
                    <Input
                        type={'email'}
                        placeholder={'Email для обратной связи'}
                    />
                    <Button>Отправить</Button>
                </div>
            </div>
        </div>
    );
};
