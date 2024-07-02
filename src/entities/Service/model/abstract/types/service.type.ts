import { IOrder } from 'src/entities/Service';

interface IPostOrderServiceResponseSuccess {
    status: true;
}

interface IPostOrderServiceResponseFailure {
    status: false;
    message: string;
}

export type TPostOrderServiceResponse =
    | IPostOrderServiceResponseSuccess
    | IPostOrderServiceResponseFailure;

export type TPostOrderServiceRequest = {
    order: IOrder;
};
