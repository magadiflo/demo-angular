import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PresentationComponent } from './presentation/presentation.component';
import { OptionsComponent } from './options/options.component';
import { MainComponent } from './main/main.component';
import { AsideComponent } from './aside/aside.component';



@NgModule({
  declarations: [
    PresentationComponent,
    OptionsComponent,
    MainComponent,
    AsideComponent
  ],
  imports: [
    FontAwesomeModule
  ],
  exports: [
    MainComponent,
  ]
})
export class MainModule { }
