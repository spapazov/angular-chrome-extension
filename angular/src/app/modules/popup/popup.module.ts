import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PopupComponent } from './pages/popup/popup.component';
import { PopupRoutingModule } from './popup-routing.module';
import { FooterComponent } from './pages/popup/footer/footer.component';
import { HeaderComponent } from './pages/popup/header/header.component';
import {CardComponent} from './pages/popup/card/card.component';
import {CardsComponent} from './pages/popup/cards/cards.component';
import {SearchComponent} from './pages/popup/search/search.component';
import {NewcardComponent} from './pages/popup/newcard/newcard.component';

@NgModule({
  declarations: [
    PopupComponent,
    FooterComponent,
    HeaderComponent,
    CardComponent,
    CardsComponent,
    SearchComponent,
    NewcardComponent
  ],
  imports: [CommonModule, PopupRoutingModule]
})
export class PopupModule {}
