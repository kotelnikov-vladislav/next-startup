import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    TPostOrderServiceRequest,
    TPostOrderServiceResponse,
} from '../model/abstract';

export const serviceApi = createApi({
    reducerPath: 'serviceApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/',
    }),
    endpoints: ({ mutation }) => ({
        postOrderService: mutation<
            TPostOrderServiceResponse,
            TPostOrderServiceRequest
        >({
            query: ({ order }) => ({
                url: 'api/order-service',
                method: 'POST',
                body: {
                    ...order,
                },
            }),
        }),
    }),
});

export const { usePostOrderServiceMutation } = serviceApi;
