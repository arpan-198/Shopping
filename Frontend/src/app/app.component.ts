import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MainsidenavComponent } from './Components/mainsidenav/mainsidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Shopping';
  // open_side_nav : boolean;
  // @ViewChild(MainsidenavComponent)sidenav:MainsidenavComponent;

  // openSideNav(event : boolean){
  //   console.log(event);
  //   this.open_side_nav=event;
  //   console.log(this.sidenav);
    
  //   if(this.sidenav)
  //   this.sidenav.side_Nav_Width=100;
    
  // }
 
}
