import { EServiceType } from 'src/entities/Service';
import {
    IBoolField,
    IField,
    INumberField,
} from '../../../../../page-lib/OrderServicePage/model/abstract';

export interface IServiceChangeEvent {
    type: 'bool' | 'number';
    field: IField;
    value: Maybe<number> | boolean;
}

export interface IServiceChangeBoolEvent extends IServiceChangeEvent {
    type: 'bool';
    value: boolean;
    field: IBoolField;
}

export interface IServiceChangeNumberEvent extends IServiceChangeEvent {
    type: 'number';
    value: Maybe<number>;
    field: INumberField;
}
