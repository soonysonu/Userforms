import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: any;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.user = {
      userName: '',
      officialEmail: '',
      password: '',
      confirmPassword: ''
    }
  }

  saveData(){
    console.log(this.user)
    sessionStorage.setItem('userData',JSON.stringify(this.user));
    this.route.navigate(['/']);
  }

}
