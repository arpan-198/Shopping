import { Router } from '@angular/router';
import { Component ,EventEmitter,OnInit,Output} from "@angular/core";

@Component({
  selector: 'main-header',
  templateUrl: './mainheader.component.html',
  styleUrls: ['./mainheader.component.css']
})
export class MainHeaderComponent implements OnInit {
  show : boolean = false;
  isLogin : boolean=false;
  
  @Output() sideNavOpen=new EventEmitter();

  constructor(private router:Router){}

  ngOnInit(): void {
  }
  openSideNav(){
    this.show=true;
    this.sideNavOpen.emit(this.show);
  }
  
  login():void{
      this.router.navigate(['/auth/login']);
  }


}
