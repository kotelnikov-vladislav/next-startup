import { IBoolField, IField, INumberField } from '../';

export interface IServiceChangeEvent {
    type: 'bool' | 'number';
    field: IField;
    value: number | boolean;
}

export interface IServiceChangeBoolEvent extends IServiceChangeEvent {
    type: 'bool';
    value: boolean;
    field: IBoolField;
}

export interface IServiceChangeNumberEvent extends IServiceChangeEvent {
    type: 'number';
    value: number;
    field: INumberField;
}
