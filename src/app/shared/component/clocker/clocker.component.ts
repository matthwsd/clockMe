import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { BehaviorSubject, Observable } from 'rxjs';
import { IClockerConfig } from './IClockerConfig';

@Component({
  selector: 'app-clocker',
  templateUrl: './clocker.component.html',
  styleUrls: ['./clocker.component.scss'],
})
export class ClockerComponent implements OnInit, AfterViewInit {

  public dasharray: number[] = [0, 100];
  private _timer: BehaviorSubject<number> = new BehaviorSubject(0);
  public timer$: Observable<number> = this._timer.asObservable();
  public clockId: string = (uuidv4() as string).replace(/\-/g, "");
  private line: Element = null;
  private isRunning: boolean = false;

  @Output("onTimerInterval") onTimerInterval: EventEmitter<null> = new EventEmitter();
  @Input("color") color: string = null;

  constructor() { }

  public ngOnInit() {

  }

  public ngAfterViewInit(): void {
    const SVG: Element = document.getElementById(`${this.clockId}`);
    this.line = SVG.children.item(1);
    this.setColor();
  }

  private setColor() {
    if (this.color) {
      this.line.setAttribute("stroke", this.color);
    }
  }

  public startTimer(seconds: number = 60, config: IClockerConfig = {}) {
    if (!this.isRunning) {
      let ms = 0;
      let reverse: boolean = false;
      this.isRunning = true;
      const msMax = seconds * 1000;
      setInterval(() => {
        if (reverse) {
          this.dasharray[0] = 100 - (ms - msMax * Math.floor(ms / msMax)) / msMax * 100;
          if (this.dasharray[0] === 1) {
            reverse = false;
          }
        } else {
          this.dasharray[0] = (ms - msMax * Math.floor(ms / msMax)) / msMax * 100;
          if (this.dasharray[0] === 99) {
            reverse = true;

          }
        }
        ms += 100;
        if (config.resetOnIntervalMax) {
          this._timer.next(ms - msMax * (Math.floor(ms / msMax)));
        } else {
          this._timer.next(ms);
        }

        this.line.setAttribute("stroke-dasharray", this.dasharray.join(","));
      }, 100)
    }
  }

}
