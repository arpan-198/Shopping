import { AfterViewInit, Component, ViewChild ,OnInit } from '@angular/core';
import { MainsidenavComponent } from '../../mainsidenav/mainsidenav.component';


@Component({
  selector: 'app-main-lay-out',
  templateUrl: './main-lay-out.component.html',
  styleUrls: ['./main-lay-out.component.css']
})
export class MainLayOutComponent implements OnInit {

  constructor() {console.log("Main layout Loading");
   }

  ngOnInit(): void {
  }

  open_side_nav : boolean;
  @ViewChild(MainsidenavComponent)sidenav:MainsidenavComponent;

  openSideNav(event : boolean){
    console.log(event);
    this.open_side_nav=event;
    console.log(this.sidenav);
    
    if(this.sidenav)
    this.sidenav.side_Nav_Width=100;
  }

}
