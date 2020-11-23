import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-sidenav',
  templateUrl: './mainsidenav.component.html',
  styleUrls: ['./mainsidenav.component.css']
})
export class MainsidenavComponent implements OnInit {
  side_Nav_Width : number;
  user : string="Guest";
  constructor() { }

  ngOnInit(): void {
  }

  closeNav(){
    this.side_Nav_Width=0;
  }

}
