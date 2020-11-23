import { Component, OnInit } from '@angular/core';
import { Store , select} from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { AppState } from 'src/app/store';
import { isAuthenticate } from 'src/app/store/selectors/admin.selector';
import * as adminActions from "../../store/actions/admin.action";

@Component({
  selector: 'app-admincontrol',
  templateUrl: './admincontrol.component.html',
  styleUrls: ['./admincontrol.component.css']
})
export class AdmincontrolComponent implements OnInit {
  isLoggedIn : boolean;
  constructor(private store$ : Store<AppState>) { 
    this.store$.select(isAuthenticate).subscribe(s => {this.isLoggedIn=s;
    })
    

   
  //  console.log(this.store$.select(isAuthenticate));
   
   
  }


  ngOnInit(): void {
    let header = document.getElementById("main");
    let links = header.getElementsByClassName("link");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }

  }

  logoutAdmin(){
    this.store$.dispatch(adminActions.adminLogout());
  }


}
