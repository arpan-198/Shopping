import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule , HomeRoutingComponents } from "../Routing/home.routing.module";


@NgModule({
  declarations: [ HomeRoutingComponents ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
