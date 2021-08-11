import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  cardsActive: string
  searchActive: string
  accountsActive: string

  constructor() { }

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
