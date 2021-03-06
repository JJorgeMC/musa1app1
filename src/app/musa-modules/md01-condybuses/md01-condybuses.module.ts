import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Md01CondybusesRoutingModule } from './md01-condybuses-routing.module';
import { SiderbarMd01Component } from './components/siderbar-md01/siderbar-md01.component';
import { Md01CondybusesComponent } from './md01-condybuses.component';
import { GeneralModule } from 'src/app/components/general.module';
import { TestService } from '../../services';



@NgModule({
  declarations: [
    SiderbarMd01Component,
    Md01CondybusesComponent 
  ],
  imports: [
    CommonModule,
    Md01CondybusesRoutingModule,
    GeneralModule
  ],
  providers: [
    TestService
  ]
})
export class Md01CondybusesModule { }
