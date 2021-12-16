import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any;
  userData: any;


  constructor(private route: Router) { }

  ngOnInit(): void {
    this.userData = JSON.parse(sessionStorage.getItem('userData') || '{}');
    console.log(this.userData);
    this.user = {
      userName: '',
      password: '',
    }
  }

  login(){
    console.log(this.user)
    if(this.user.username === this.userData.username && this.user.password === this.userData.password){
      this.route.navigate(['/']);
    } else {
      alert("Incorrect username/password");
    }
  }
}
