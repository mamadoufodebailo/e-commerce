import { ICountry } from 'app/shared/model/country.model';
import { IDepartment } from 'app/shared/model/department.model';

export interface IRegion {
  id?: number;
  name?: string;
  country?: ICountry;
  departments?: IDepartment[];
}

export class Region implements IRegion {
  constructor(public id?: number, public name?: string, public country?: ICountry, public departments?: IDepartment[]) {}
}
