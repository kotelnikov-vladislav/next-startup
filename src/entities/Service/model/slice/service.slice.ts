import { createSlice } from '@reduxjs/toolkit';
import { ServiceSchema } from 'src/entities/Service/model/abstract/schema';
import { EServiceType } from 'src/entities/Service';

const initialState: ServiceSchema = {
    [EServiceType.TreatmentArea]: 1,
    [EServiceType.SprayingMites]: false,
    [EServiceType.MulchingBurdock]: false,
    [EServiceType.SprayingBurdock]: false,
};

export const serviceSlice = createSlice({
    name: 'serviceSlice',
    initialState,
    reducers: {},
    selectors: {},
});
