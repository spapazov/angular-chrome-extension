import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcard',
  templateUrl: './newcard.component.html',
  styleUrls: ['./newcard.component.scss']
})
export class NewcardComponent implements OnInit {
  showDetails: boolean
  constructor() {
    this.showDetails = false;
  }

  ngOnInit(): void {
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

}
