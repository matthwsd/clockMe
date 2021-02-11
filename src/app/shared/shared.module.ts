import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockerComponent } from './component/clocker/clocker.component';
import { ClockifyPipe } from './pipe/clockify.pipe'


@NgModule({
  declarations: [
    ClockerComponent,
    ClockifyPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClockerComponent,
    ClockifyPipe
  ]
})
export class SharedModule { }
