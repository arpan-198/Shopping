import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminComponent } from 'src/app/Components/add-admin/add-admin.component';
import { AddTypesComponent } from 'src/app/Components/add-types/add-types.component';
import { AdminViewProfileComponent } from 'src/app/Components/admin-view-profile/admin-view-profile.component';
import { AdmincontrolComponent } from 'src/app/Components/admincontrol/admincontrol.component';
import { ForgetComponent } from 'src/app/Components/forget/forget.component';
import { PasswordResetComponent } from 'src/app/Components/password-reset/password-reset.component';
import { SellerInfoComponent } from 'src/app/Components/seller-info/seller-info.component';
import { AdminSigninComponent } from 'src/app/Components/signin/admin.signin/admin.signin.component';

const routes: Routes = [
    {
        path : "usr",
        component : AdmincontrolComponent,
        children : [
          {
            path : "profile",
            component : AdminViewProfileComponent
          },
          {
            path : "types",
            component : AddTypesComponent
          },
          {
            path : "seller",
            component : SellerInfoComponent
          },
          {
            path : "add",
            component : AddAdminComponent
          },
          {
            path : "**",
            redirectTo : "/admin/signin",
            pathMatch : "full"
          }
        ]
    }
    ,
    {
        path : "signin",
        component : AdminSigninComponent
    },
    {
      path : "forget",
      component : ForgetComponent
    },
    {
      path : "reset",
      component : PasswordResetComponent
    },
    {
      path : "**",
      redirectTo : "signin",
      pathMatch : "full"
    }

    
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

export const AdminRoutingComponents=[AdminSigninComponent , AdmincontrolComponent , AdminViewProfileComponent , AddTypesComponent , SellerInfoComponent ,
   AddAdminComponent ,ForgetComponent , PasswordResetComponent];