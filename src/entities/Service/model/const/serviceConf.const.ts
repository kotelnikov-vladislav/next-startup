import { EServiceType, TServiceConf } from 'src/entities/Service';

export const SERVICE_CONF: TServiceConf = [
    {
        id: EServiceType.SprayingBurdock,
        type: 'boolField',
        label: 'Опрыскивание территории от борщевика',
        optionOne: {
            args: {
                caption: 'Нет, спасибо',
            },
        },
        optionTwo: {
            args: {
                caption: 'Опрыскивание',
                subCaption: '+ 5 000 руб/га',
            },
            tech: {
                addedPrice: 5000,
                displayCaption: 'опрыскивание территории от борщевика',
            },
        },
    },
    {
        id: EServiceType.SprayingMites,
        type: 'boolField',
        label: 'Опрыскивание территории от клеща',
        optionOne: {
            args: {
                caption: 'Нет, спасибо',
            },
        },
        optionTwo: {
            args: {
                caption: 'Опрыскивание',
                subCaption: '+ 5 000 руб/га',
            },
            tech: {
                addedPrice: 5000,
                displayCaption: 'опрыскивание территории от клеща',
            },
        },
    },
    {
        id: EServiceType.MulchingBurdock,
        type: 'boolField',
        label: 'Мульчирование борщевика',
        optionOne: {
            args: {
                caption: 'Нет, спасибо',
            },
        },
        optionTwo: {
            args: {
                caption: 'Мульчирование',
                subCaption: '+ 5 000 руб/га',
            },
            tech: {
                addedPrice: 5000,
                displayCaption: 'мульчирование',
            },
        },
    },
    {
        id: EServiceType.TreatmentArea,
        type: 'numberField',
        label: 'Площадь обработки, га',
        args: {
            min: 0,
        },
        tech: {
            displayCaption: 'площадь обработки',
        },
    },
];
