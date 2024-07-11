interface IPostEmailMsgResponseSuccess {
    status: true;
}
interface IPostEmailMsgResponseFailure {
    status: false;
    message: string;
}

export type TPostEmailMsgResponse =
    | IPostEmailMsgResponseSuccess
    | IPostEmailMsgResponseFailure;
export type TPostEmailMsgRequest = {
    title: string;
    message: string;
};
