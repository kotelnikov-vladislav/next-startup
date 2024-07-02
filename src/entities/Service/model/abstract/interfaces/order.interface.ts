export interface IOrder {
    details: {
        services: string[];
        treatmentArea: number; // гектары
    };
    user: {
        comment: string;
        contactEmail: string;
    };
}
