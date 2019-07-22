import { IEmployee } from 'app/shared/model/employee.model';
import { IRegion } from 'app/shared/model/region.model';

export interface IDepartment {
  id?: number;
  name?: string;
  employees?: IEmployee[];
  region?: IRegion;
}

export class Department implements IDepartment {
  constructor(public id?: number, public name?: string, public employees?: IEmployee[], public region?: IRegion) {}
}
