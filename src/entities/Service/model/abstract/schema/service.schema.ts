import { EServiceType } from 'src/entities/Service';

export interface ServiceSchema {
    [EServiceType.TreatmentArea]: number;
    [EServiceType.SprayingMites]: boolean;
    [EServiceType.MulchingBurdock]: boolean;
    [EServiceType.SprayingBurdock]: boolean;
}
