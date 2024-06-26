'use client';

import React from 'react';
import styles from './style.module.scss';
import {
    BoolSelector,
    Button,
    Input,
    NumberInput,
    Typography,
} from 'src/shared';
import { SERVICE_CONF } from '../../model/const';
import {
    IBoolField,
    INumberField,
    IServiceChangeBoolEvent,
    IServiceChangeNumberEvent,
} from '../../model/abstract';

interface IServiceConfProps {
    onChange?: (
        event: IServiceChangeBoolEvent | IServiceChangeNumberEvent
    ) => void;
}

/**
 * Конфигуратор услуг
 * */
export const ServiceConf = ({ onChange }: IServiceConfProps) => {
    const onChangeBoolField = (
        selectOptionName: 'optionOne' | 'optionTwo',
        confField: IBoolField
    ) => {
        onChange?.({
            type: 'bool',
            field: confField,
            value: selectOptionName === 'optionTwo',
        });
    };

    const onChangeNumberField = (value: number, confField: INumberField) => {
        onChange?.({
            type: 'number',
            field: confField,
            value,
        });
    };

    return (
        <div className={styles['service-conf']}>
            {SERVICE_CONF.map((conf, i) => (
                <div className={styles['service-conf__field']} key={i}>
                    <Typography
                        tag={'h3'}
                        color={'darkened'}
                        className={styles['service-conf__field-name']}
                    >
                        {conf.label}
                    </Typography>

                    {conf.type === 'numberField' ? (
                        <NumberInput
                            stretch
                            {...conf.args}
                            onChangeValue={(value) =>
                                onChangeNumberField(value, conf)
                            }
                        />
                    ) : (
                        <BoolSelector
                            stretch
                            optionOne={conf.optionOne.args}
                            optionTwo={conf.optionTwo.args}
                            onChangeOption={(optionName) =>
                                onChangeBoolField(optionName, conf)
                            }
                        />
                    )}
                </div>
            ))}

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
