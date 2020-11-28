import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { IAdminAuth } from "../Model/admin.model";

@Injectable()
export class AdminServices{
    private _post_adminsigninURL:string = "http://localhost:7001/admin/signin";
    private _post_adminForgetURL:string = "http://localhost:7001/admin/forget";
    private _get_adminResendURL:string = "http://localhost:7001/admin/otp/resend";
    private _delete_adminOTPDelURL:string = "http://localhost:7001/admin/otp/del";
    private _post_adminOTPVerifyURL:string = "http://localhost:7001/admin/otp/verify";
    private _put_adminPasswordChangeURL:string = "http://localhost:7001/admin/chng/password";
    constructor(private http : HttpClient){}


    private errorhandle(errorResponse : HttpErrorResponse){
        if(errorResponse.error instanceof ErrorEvent){
            alert("Client Side Error"+errorResponse.error.message);
            
        }
        else{
            if(errorResponse.error.message){
                alert(errorResponse.error.message);
            }
            
        }
        return throwError('There is a Problem with Service');
    }



    httpPostAdminSignin(Data : IAdminAuth): Observable<any>{
        // console.log(Data);
        
        return this.http.post<IAdminAuth>(this._post_adminsigninURL,Data)
        .pipe(
            catchError(this.errorhandle)
        )
    }

    httpPostAdminForget(data : any) : Observable<any>{
        return this.http.post<any>(this._post_adminForgetURL,data)
        .pipe(
            catchError(this.errorhandle)
        )
    }


    httpGetAdminResend() : Observable<any>{
        return this.http.get<any>(this._get_adminResendURL)
        .pipe(
            catchError(this.errorhandle)
        )
    }

    httpDeleteAdminDelOTP() : Observable<any>{
        return this.http.delete(this._delete_adminOTPDelURL)
        .pipe(
            catchError(this.errorhandle)
        )
    }

    httpPostAdminVerifyOTP(data :any) : Observable<any>{
        return this.http.post(this._post_adminOTPVerifyURL,data)
        .pipe(
            catchError(this.errorhandle)
        )
    }


    httpPutAdminPasswordChange(data :any) : Observable<any>{
        return this.http.put(`${this._put_adminPasswordChangeURL}/${data.id}`,{"password" : data.password})
        .pipe(
            catchError(this.errorhandle)
        )
    }

}