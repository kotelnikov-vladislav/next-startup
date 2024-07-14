import { IOrder, TPostOrderServiceResponse } from 'src/entities/Service';

/**
 * Оформление заказа
 * */
export async function POST(req: Request) {
    const order = (await req.json()) as IOrder;

    const googleUrl = `https://script.google.com/macros/s/${process.env.NEXT_SERVER_GOOGLE_TOKEN}/exec`;

    const res = await fetch(googleUrl, {
        method: 'POST',
        body: JSON.stringify(order),
    });
    const resBody = (await res.json()) as TPostOrderServiceResponse;

    return Response.json(resBody);
}
