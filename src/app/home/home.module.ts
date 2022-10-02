import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ButtonComponent } from '../component/button/button.component';
import { CardComponent } from '../component/card/card.component';
import { SidebarComponent } from '../component/sidebar/sidebar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ButtonComponent, CardComponent, SidebarComponent]
})
export class HomePageModule {}
