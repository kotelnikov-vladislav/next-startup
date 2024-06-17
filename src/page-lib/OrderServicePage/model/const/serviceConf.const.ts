import { TServiceConf } from '../abstract';

export const SERVICE_CONF: TServiceConf = [
    {
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
