import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule , AdminRoutingComponents } from "../Routing/admin.routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';


import { adminFeatureKey} from "../../store/reducers/admin.reducer";
import { reducers } from "../../store/index";
import { AdminAuthEffect } from "../../store/effects/admin.effect";
import { EffectsModule } from '@ngrx/effects';
import { AdminServices } from 'src/app/Services/admin.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ AdminRoutingComponents ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(adminFeatureKey,reducers.admin),
    EffectsModule.forFeature([AdminAuthEffect])
  ],
  providers: [AdminServices],
})
export class AdminModule { }
