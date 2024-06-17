export interface IField {
    type: string;
    label: string;
}

export interface IBoolField extends IField {
    type: 'boolField';
    optionOne: {
        args: {
            caption: string;
        };
    };
    optionTwo: {
        args: {
            caption: string;
            subCaption: string;
        };
        tech: {
            addedPrice: number;
            displayCaption: string;
        };
    };
}

export interface INumberField extends IField {
    type: 'numberField';
    args: {
        min?: number;
        max?: number;
    };
    tech: {
        displayCaption: string;
    };
}
