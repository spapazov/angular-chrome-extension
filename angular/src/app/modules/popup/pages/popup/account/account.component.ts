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
    this.signIn = true;
    this.signUp = false;
  }

  ngOnInit(): void {
  }

}
