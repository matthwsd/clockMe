import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ClockerComponent } from '../shared/component/clocker/clocker.component';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.page.html',
  styleUrls: ['./clock.page.scss'],
})
export class ClockPage implements OnInit, AfterViewInit {

  @ViewChild("CLOCK__TASK", { static: false, read: ClockerComponent }) cw_task: ClockerComponent;
  @ViewChild("CLOCK__TOTAL", { static: false, read: ClockerComponent }) cw_total: ClockerComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // this.clocker.startTimer(10);
  }


  go(): void {
    this.cw_task.startTimer(10, { resetOnIntervalMax: true });
    this.cw_total.startTimer();
  }

  onTimerInterval(): void {
    console.log("Timer max");
  }

}
