import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'country',
        loadChildren: './country/country.module#EcommerceCountryModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#EcommerceDepartmentModule'
      },
      {
        path: 'region',
        loadChildren: './region/region.module#EcommerceRegionModule'
      },
      {
        path: 'product',
        loadChildren: './product/product.module#EcommerceProductModule'
      },
      {
        path: 'category',
        loadChildren: './category/category.module#EcommerceCategoryModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#EcommerceEmployeeModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EcommerceEntityModule {}
