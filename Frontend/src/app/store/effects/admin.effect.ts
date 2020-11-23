import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CookieService } from 'ngx-cookie-service';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap, tap } from 'rxjs/operators';

import { AdminServices } from '../../Services/admin.service';
import * as adminActions from "../actions/admin.action";
import { IAdminAuth } from '../../Model/admin.model';


@Injectable()
export class AdminAuthEffect {

    adminLoginEffect$ = createEffect(() => this.action$.pipe(
        ofType(adminActions.adminLoginRequest),
        switchMap(adminLogin => {
            // console.log(adminLogin.user);
            return this.authService.httpPostAdminSignin(adminLogin.user).pipe(
                map(adminData => adminActions.adminLoginSuccess({ user: adminData })),
                catchError(errors => of(adminActions.adminLoginFail({ user: errors })))
            )
        })
    ));

    adminLoginSuccess$ = createEffect(() => this.action$.pipe(
        ofType(adminActions.adminLoginSuccess),
        tap(adminLoginData => {
            // console.log("Suc E");
            // console.log(adminLoginData.user.token);
            
            this.cookieservice.set("ADMIN_AUTH_TOKEN", adminLoginData.user.token, 1, 'admin/usr','localhost', false, "Strict");
            
            this.router.navigate(["admin/usr/profile"]);
        })
    ),{ dispatch: false });

    adminLoginFail$ = createEffect(() => this.action$.pipe(
        ofType(adminActions.adminLoginFail),

    ),{ dispatch: false });

   

    adminLogout$ = createEffect(() => this.action$.pipe(
        ofType(adminActions.adminLogout),
        tap(() => {
            if (this.cookieservice.check("ADMIN_AUTH_TOKEN"))
                this.cookieservice.delete("ADMIN_AUTH_TOKEN",'admin/usr','localhost', false, "Strict");
            this.router.navigate(["admin/signin"]);
        })
    ),{ dispatch: false })

    constructor(
        private action$: Actions,
        private authService: AdminServices,
        private cookieservice: CookieService,
        private router: Router
    ) { }
}