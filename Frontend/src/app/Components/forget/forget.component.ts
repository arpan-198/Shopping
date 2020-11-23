import { Component, OnInit } from '@angular/core';
import { Store , select } from '@ngrx/store';

import { AppState } from "../../store/index";
import { AdminServices } from 'src/app/Services/admin.service';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  email_Id : string;
  isVarified : boolean=false;
  count:number;
  A_OTP : string;
  otp_come: Subscription;
  constructor(private auth :AdminServices , private route : Router) { }

  ngOnInit(): void {
    
  }

  submitEmail(){
    let data={
      email : this.email_Id
    }
    
    this.auth.httpPostAdminForget(data).subscribe(
      (next)=> {
        this.isVarified=true;
        
        const interval$ = interval(1010);
        const time = interval$.pipe(take(120));
       this.otp_come= time.subscribe(
          (next)=> { this.count=(next+1); },
          (err)=> {console.log(err);},
          ()=>{
            this.auth.httpDeleteAdminDelOTP().subscribe(
              (next)=>{},
              (err)=>{ console.log(err); }
            )
          }
        )
      },
      (err)=> {console.log(err); 
        this.auth.httpDeleteAdminDelOTP().subscribe(
          (next)=>{},
          (err)=>{ console.log(err); }
          ) }
    )
  }

  submitOTP(){
    this.auth.httpPostAdminVerifyOTP({OTP : this.A_OTP}).subscribe(
      (next)=>{
        alert("Succ");
        this.route.navigate(["admin/reset"]);
      },
      (err)=>{ console.log(err);}
    );
    
  }

  resendOTP(){
    this.count=null;
    this.otp_come.unsubscribe();
    this.auth.httpGetAdminResend().subscribe(
      (next)=> {
        const interval$ = interval(1010);
        const time = interval$.pipe(take(120));
        this.otp_come=time.subscribe(
          (next)=> { this.count=(next+1); },
          (err)=> {console.log(err);},
          ()=>{
            this.auth.httpDeleteAdminDelOTP().subscribe(
              (next)=>{},
              (err)=>{ console.log(err); }
            ) 
          }
        )
      },
      (err)=> {console.log(err); 
        this.auth.httpDeleteAdminDelOTP().subscribe(
          (next)=>{},
          (err)=>{ console.log(err); },
          ()=>{ }
        ) }
    )
  }

}
