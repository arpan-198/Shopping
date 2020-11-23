import { RegExpSupply } from './RegEx.service';
import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
@Injectable({
    providedIn:'root'
})
export class ValidationCheck {

    constructor(private reg:RegExpSupply){}

    checkEmailValidation(): ValidatorFn {
        return (control:AbstractControl):{[key: string]: any} | null=>{
            if(control.value=="") return null;
           const checkEmail=this.reg.email.test(control.value);
            return checkEmail ? null:{'emailValidation':{value:control.value,message:"Email Does Not Valid"}};
        };
    }

    checkPasswordValidation(): ValidatorFn {
        return (control:AbstractControl):{[key: string]: any} | null =>{
            if(control.value=="") return null;
           const checkPass=this.reg.password.test(control.value);
            return checkPass ? null:{'passwordValidation':{value:control.value,message:"Password Does Not Valid"}};
        };
    }


    checkConfirmPassword(control: AbstractControl):ValidationErrors | null{
            const confirmPassword=control.get('_conPassword').value;
            const password=control.get('_password').value;
            if(confirmPassword == "")return null;
           return confirmPassword && password && confirmPassword != password ? {'validatePassword':{value:confirmPassword,message:"Password mismatch"}} : null;
        }
    
}