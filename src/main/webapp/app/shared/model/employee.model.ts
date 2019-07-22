import { Moment } from 'moment';
import { IDepartment } from 'app/shared/model/department.model';
import { IProduct } from 'app/shared/model/product.model';
import { IEmployee } from 'app/shared/model/employee.model';

export interface IEmployee {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  hireDate?: Moment;
  salary?: number;
  commissionPct?: number;
  department?: IDepartment;
  sellers?: IProduct[];
  manager?: IEmployee;
}

export class Employee implements IEmployee {
  constructor(
    public id?: number,
    public firstName?: string,
    public lastName?: string,
    public email?: string,
    public phoneNumber?: string,
    public hireDate?: Moment,
    public salary?: number,
    public commissionPct?: number,
    public department?: IDepartment,
    public sellers?: IProduct[],
    public manager?: IEmployee
  ) {}
}
