import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayOutComponent } from './Components/Layouts/admin-lay-out/admin-lay-out.component';
import { MainLayOutComponent } from './Components/Layouts/main-lay-out/main-lay-out.component';
import { CustomPreloadingStrategy } from "./Services/customPreload.service";

const routes: Routes = [
  {path : "" , component : MainLayOutComponent ,
    children : [
      {
        path : "",
        loadChildren : ()=> import('./Modules/home/home.module').then(m=>m.HomeModule),
        data : {preload : true}
      }
    ]
  },
  {
    path : "admin",
    component : AdminLayOutComponent,
    children : [
      {
        path : "",
        loadChildren : ()=> import('./Modules/admin/admin.module').then(m=>m.AdminModule),
        data : {preload : false}
      }
    ]
  },
  {
    path : "**",
    pathMatch : "full",
    redirectTo : ""
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy : CustomPreloadingStrategy
    }
    )],
  exports: [RouterModule],
  providers: [CustomPreloadingStrategy]
})
export class AppRoutingModule { }

export const AppRoutingComponents=[MainLayOutComponent , AdminLayOutComponent];