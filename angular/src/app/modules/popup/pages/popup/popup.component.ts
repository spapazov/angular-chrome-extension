import { Component, Inject } from '@angular/core';
import { bindCallback } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-popup',
  templateUrl: 'popup.component.html',
  styleUrls: ['popup.component.scss']
})
export class PopupComponent {
  cardsActive: string
  searchActive: string
  accountsActive: string

  constructor() {
  }

  ngOnInit(): void {
    this.cardsActive = "active"
    this.searchActive = "notactive"
    this.accountsActive = "notactive"
  }

  toggleTab(tab) {
    if (tab == 1) {
      this.cardsActive = "active";
      this.searchActive = "notactive";
      this.accountsActive = "notactive";
    } else if (tab == 2) {
      this.cardsActive = "notactive";
      this.searchActive = "active";
      this.accountsActive = "notactive";
    } else {
      this.cardsActive = "notactive"
      this.searchActive = "notactive"
      this.accountsActive = "active"
    }
  }
}
