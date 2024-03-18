import { SectorField } from './sector-field.interface';

export interface FormDataModel {
    name: string;
    sectors: SectorField[];
    agree: boolean;
}