interface IOrder {
    details: {
        services: string[];
        treatmentArea: number; // гектары
    };
    user: {
        comment: string;
        contactEmail: string;
    };
}

interface IPostOrderServiceRequestSuccess {
    status: true;
}

interface IPostOrderServiceRequestFailure {
    status: false;
    message: string;
}

type TPostOrderServiceRequest =
    | IPostOrderServiceRequestSuccess
    | IPostOrderServiceRequestFailure;

const mockOrder: IOrder = {
    details: {
        services: ['1', '2'],
        treatmentArea: 100,
    },
    user: {
        comment: 'test',
        contactEmail: 'test@test.ru',
    },
};

/**
 * Оформление заказа
 * */
export async function POST(req: Request) {
    const order = (await req.json()) as IOrder;

    const googleUrl = 'google_url';

    const res = await fetch(googleUrl, {
        method: 'POST',
        body: JSON.stringify(mockOrder),
    });
    const resBody = (await res.json()) as TPostOrderServiceRequest;

    console.log(resBody);

    return Response.json(resBody);
}
