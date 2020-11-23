import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store , select } from '@ngrx/store';
import { IAdminAuth } from '../../../Model/admin.model'

import { AppState } from "../../../store/index";
import * as adminActions from "../../../store/actions/admin.action";
import * as adminSelectors from "../../../store/selectors/admin.selector";
import { AdminServices } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin.signin',
  templateUrl: './admin.signin.component.html',
  styleUrls: ['./admin.signin.component.css']
})
export class AdminSigninComponent implements OnInit {
  _admin_Login_Form : FormGroup;
  constructor(private fb : FormBuilder , private store$:Store<AppState> ,private auth :AdminServices ) { }

  ngOnInit(): void {
    this._admin_Login_Form = this.fb.group({
      _id : ['',Validators.required],
      _email : ['',Validators.required],
      _password : ['',Validators.required]
    })
  }

  checkLogin(){
    let _data : IAdminAuth={
      'id' : this.id.value,
      'email' : this.email.value,
      'password' : this.pwd.value
    }
    // console.log(_data);
    this.store$.dispatch(adminActions.adminLoginRequest({ user : _data }));



  }

  get id(){
    return this._admin_Login_Form.get('_id');
  }

  get email(){
    return this._admin_Login_Form.get('_email');
  }

  get pwd(){
    return this._admin_Login_Form.get('_password');
  }

}
