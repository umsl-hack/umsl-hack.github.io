import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  targetDate: any = 1634335200000;
  days: any;
  hours: any;
  minutes: any;
  seconds: any;
  currentDate: any;
  secondsLeft: any;
  countdown = document.getElementById('tiles');
  public innerWidth: any;

@HostListener('window:resize', ['$event'])
onResize(event) {
  this.innerWidth = window.innerWidth;
}

  constructor() { }

  ngOnInit() {
    this.getCoutDown();
    setInterval(() => {
      this.getCoutDown();
    }, 1000);
    this.innerWidth = window.innerWidth;
  }
  getCoutDown() {

    this.currentDate = new Date().getTime();
    this.secondsLeft = (this.targetDate - this.currentDate) / 1000;

    const daysTemp = (this.secondsLeft) / 86400;
    this.days = this.pad(parseInt(daysTemp.toString()));
    this.secondsLeft = this.secondsLeft % 86400;

    const hoursTemp = (this.secondsLeft) / 3600;
    this.hours = this.pad(parseInt(hoursTemp.toString()));
    this.secondsLeft = this.secondsLeft % 3600;

    const minTemp = this.secondsLeft / 60;
    this.minutes = this.pad(parseInt(minTemp.toString()));

    const seTemp = this.secondsLeft % 60;
    this.seconds = this.pad(parseInt(seTemp.toString()));

   // this.countdown.innerHTML = '<span>' + this.days + '</span><span>'
   // + this.hours + '</span><span>' + this. minutes + '</span><span>' + this.seconds + '</span>';

  }

  pad(n) {
    return (n < 10 ? '0' : '') + n;
  }

}
