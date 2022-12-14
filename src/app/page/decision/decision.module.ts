import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecisionPageRoutingModule } from './decision-routing.module';

import { DecisionPage } from './decision.page';
import { DialogComponent } from 'src/app/component/dialog/dialog.component';
import { MinicardComponent } from 'src/app/component/minicard/minicard.component';
import { ButtonComponent } from 'src/app/component/button/button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DecisionPageRoutingModule
  ],
  declarations: [DecisionPage, DialogComponent, MinicardComponent, ButtonComponent]
})
export class DecisionPageModule {}
