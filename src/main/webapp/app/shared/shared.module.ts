import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EcommerceSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [EcommerceSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [EcommerceSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EcommerceSharedModule {
  static forRoot() {
    return {
      ngModule: EcommerceSharedModule
    };
  }
}
