import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  loggedIn : boolean;
  signIn: boolean;
  signUp: boolean;

  constructor() {
    this.loggedIn = false;
    this.signIn = false;
    this.signUp = true;
  }

  ngOnInit(): void {
  }

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
