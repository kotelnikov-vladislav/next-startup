export interface IOrder {
    details: {
        services: (boolean | number)[];
    };
    user: {
        comment: string;
        contactEmail: string;
    };
}
