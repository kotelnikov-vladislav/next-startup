'use client';

import React, { useState } from 'react';
import styles from './style.module.scss';
import {
    BoolSelector,
    Button,
    Input,
    NumberInput,
    TextArea,
    Typography,
} from 'src/shared';
import { SERVICE_CONF } from '../../model/const';
import {
    IBoolField,
    INumberField,
    IServiceChangeBoolEvent,
    IServiceChangeNumberEvent,
} from '../../model/abstract';
import {
    EServiceType,
    IOrder,
    usePostOrderServiceMutation,
} from 'src/entities/Service';
import { toast } from 'react-toastify';
import { usePostSendEmailMutation } from 'src/entities/Mail';

interface IServiceConfProps {
    onChange?: (
        event: IServiceChangeBoolEvent | IServiceChangeNumberEvent
    ) => void;
}

interface IServiceConf extends Record<EServiceType, number | boolean> {
    [EServiceType.TreatmentArea]: number;
    [EServiceType.SprayingMites]: boolean;
    [EServiceType.MulchingBurdock]: boolean;
    [EServiceType.SprayingBurdock]: boolean;
}

interface IUserInfo {
    email: string;
    comment: string;
}

/**
 * Конфигуратор услуг
 * */
export const ServiceConf = ({ onChange }: IServiceConfProps) => {
    const [conf, setConf] = useState<IServiceConf>({
        [EServiceType.TreatmentArea]: 0,
        [EServiceType.SprayingMites]: false,
        [EServiceType.MulchingBurdock]: false,
        [EServiceType.SprayingBurdock]: false,
    });
    const [userInfo, setUserInfo] = useState<IUserInfo>({
        email: '',
        comment: '',
    });

    const [fetchOrderService, { isLoading: isLoadingOrder }] =
        usePostOrderServiceMutation();
    const [fetchSendEmail, { isLoading: isLoadingSendEmail }] =
        usePostSendEmailMutation();

    const onChangeBoolField = (
        selectOptionName: 'optionOne' | 'optionTwo',
        confField: IBoolField
    ) => {
        setConf((prevConf) => ({
            ...prevConf,
            [confField.id]: selectOptionName === 'optionTwo',
        }));

        onChange?.({
            type: 'bool',
            field: confField,
            value: selectOptionName === 'optionTwo',
        });
    };

    const onChangeNumberField = (value: number, confField: INumberField) => {
        setConf((prevConf) => ({
            ...prevConf,
            [confField.id]: value,
        }));

        onChange?.({
            type: 'number',
            field: confField,
            value,
        });
    };

    const onChangeUserEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo((prevInfo) => ({
            ...prevInfo,
            email: event.target.value,
        }));
    };

    const onChangeUserComment = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setUserInfo((prevInfo) => ({
            ...prevInfo,
            comment: event.target.value,
        }));
    };

    const onOrderHandler = async () => {
        const { data: resultCreateReq } = await fetchOrderService({
            order: {
                details: {
                    services: [
                        conf[EServiceType.SprayingBurdock],
                        conf[EServiceType.SprayingMites],
                        conf[EServiceType.MulchingBurdock],
                        conf[EServiceType.TreatmentArea],
                    ],
                },
                user: {
                    contactEmail: userInfo.email,
                    comment: userInfo.comment,
                },
            },
        });

        if (!resultCreateReq || !resultCreateReq.status) {
            return toast.error('Произошла ошибка. Свяжитесь с нами напрямую');
        }

        const { data: resultSendEmailMsg } = await fetchSendEmail({
            title: 'Создана заявка!',
            message: 'Появилась заявка на услуги. Проверьте Google таблицу',
        });

        if (!resultSendEmailMsg || !resultSendEmailMsg.status) {
            return toast.error('Произошла ошибка. Свяжитесь с нами напрямую');
        }

        return toast.success('Заявка создана. Спасибо, мы с вами свяжемся!');
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

                <div className={styles['service-conf__contact']}>
                    <TextArea
                        placeholder={'Ваш комментарий'}
                        onChange={onChangeUserComment}
                        className={styles['service-conf__comment']}
                    />
                    <Input
                        type={'email'}
                        onChange={onChangeUserEmail}
                        className={styles['service-conf__email']}
                        placeholder={'Email для обратной связи'}
                    />
                    <Button
                        onClick={onOrderHandler}
                        pending={isLoadingOrder || isLoadingSendEmail}
                        className={styles['service-conf__send-btn']}
                    >
                        Отправить
                    </Button>
                </div>
            </div>
        </div>
    );
};
