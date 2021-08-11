import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopupComponent } from './pages/popup/popup.component';
import {SearchComponent} from './pages/popup/search/search.component';
import {CardsComponent} from './pages/popup/cards/cards.component';

const routes: Routes = [
  {
    path: '',
    component: PopupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopupRoutingModule {}
