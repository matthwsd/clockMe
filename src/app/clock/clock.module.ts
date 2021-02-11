import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClockPageRoutingModule } from './clock-routing.module';

import { ClockPage } from './clock.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClockPageRoutingModule,
    SharedModule
  ],
  declarations: [ClockPage]
})
export class ClockPageModule {}
