import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServices } from 'src/app/Services/admin.service';
import { ValidationCheck } from 'src/app/Services/validation.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  _admin_Login_Form : FormGroup;
  constructor(private fb : FormBuilder  ,private auth :AdminServices , private valid : ValidationCheck , private route : Router) { }

  ngOnInit(): void {
    this._admin_Login_Form = this.fb.group({
      _id : ['',Validators.required],
      _password : ['',[Validators.required,this.valid.checkPasswordValidation()]],
      _conPassword : ['',Validators.required]
    },{validator : this.valid.checkConfirmPassword})
  }

  updatePassword(){
    let _data : any={
      'id' : this.id.value,
      'password' : this.pwd.value
    }
    this.auth.httpPutAdminPasswordChange(_data).subscribe(
      (next)=>{alert(next.message)},
      (err)=>{console.log(err);},
      ()=>{this.route.navigate(["admin/signin"])}
    )



  }

  get id(){
    return this._admin_Login_Form.get('_id');
  }

  get cPwd(){
    return this._admin_Login_Form.get('_conPassword');
  }

  get pwd(){
    return this._admin_Login_Form.get('_password');
  }

}
