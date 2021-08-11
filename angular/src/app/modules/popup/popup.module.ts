import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PopupComponent } from './pages/popup/popup.component';
import { PopupRoutingModule } from './popup-routing.module';
import { FooterComponent } from './pages/popup/footer/footer.component';
import { HeaderComponent } from './pages/popup/header/header.component';

@NgModule({
  declarations: [PopupComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule, PopupRoutingModule]
})
export class PopupModule {}
