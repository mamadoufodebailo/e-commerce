import { ICategory } from 'app/shared/model/category.model';
import { IEmployee } from 'app/shared/model/employee.model';

export interface IProduct {
  id?: number;
  name?: string;
  price?: number;
  countStock?: number;
  category?: ICategory;
  employee?: IEmployee;
}

export class Product implements IProduct {
  constructor(
    public id?: number,
    public name?: string,
    public price?: number,
    public countStock?: number,
    public category?: ICategory,
    public employee?: IEmployee
  ) {}
}
