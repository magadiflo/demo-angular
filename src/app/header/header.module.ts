import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    FontAwesomeModule
  ],
  exports: [
    NavComponent,
  ]
})
export class HeaderModule { }
