import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    TPostEmailMsgRequest,
    TPostEmailMsgResponse,
} from 'src/entities/Mail/model/abstract';
import { getHtmlTemplate } from 'src/entities/Mail/model/template';

export const mailApi = createApi({
    reducerPath: 'mailApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: ({ mutation }) => ({
        postSendEmail: mutation<TPostEmailMsgResponse, TPostEmailMsgRequest>({
            query: ({ title, message }) => ({
                url: 'api/send-email',
                method: 'POST',
                body: {
                    html: getHtmlTemplate(title, message),
                },
            }),
        }),
    }),
});

export const { usePostSendEmailMutation } = mailApi;
