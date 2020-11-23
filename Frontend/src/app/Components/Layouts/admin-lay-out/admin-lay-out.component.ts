import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-lay-out',
  templateUrl: './admin-lay-out.component.html',
  styleUrls: ['./admin-lay-out.component.css']
})
export class AdminLayOutComponent implements OnInit {

  constructor() { console.log("Admin layout component");
  }

  ngOnInit(): void {
  }

}
