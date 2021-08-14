import { Component, OnInit } from '@angular/core';
import {ApiService} from './../api/api.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  loggedIn : boolean;
  signIn: boolean;
  signUp: boolean;
  name: string;
  email: string;
  clientInfo: any;

  constructor(private api: ApiService) {
    this.loggedIn = false;
    this.signIn = false;
    this.signUp = true;
    this.name = "";
    this.email = "";
    this.clientInfo = {};
  }

  ngOnInit(): void {
  }

  registerUser() {
    console.log(this.clientInfo)
    // this.api.post('create/user', this.clientInfo)
    // .subscribe(
    //   res => {
    //     this.name = this.clientInfo.name;
    //     this.email = this.clientInfo.email
    //     this.loggedIn = true;
    //     this.signIn = false;
    //     this.signUp = false;
    //     this.clientInfo = {}
    //   },
    //   error => console.log("failed to create user")
    // );
  }
//Toggle sign in, view account, singup modes
  toggleMode(mode) {
    if (mode == 'signin') {
      this.loggedIn = false;
      this.signIn = true;
      this.signUp = false;
    } else if (mode == 'signup') {
      this.loggedIn = false;
      this.signIn = false;
      this.signUp = true;
    } else {
      this.loggedIn = true;
      this.signIn = false;
      this.signUp = false;
    }
  }

}
