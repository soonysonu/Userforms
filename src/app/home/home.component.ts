import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userData:any;
  constructor() { }

  ngOnInit(): void {
    this.userData = JSON.parse(sessionStorage.getItem('userData') || '{}');
    console.log(this.userData);
  }

}
