import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class RegExpSupply{
    private _password:RegExp;
    private _email:RegExp;

    constructor(){
        this._password=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
        this._email=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})(\.[a-zA-Z]{2,5})?$/;
    }

    get password():RegExp{
        return this._password;
    }

    get email():RegExp{
        return this._email;
    }
}