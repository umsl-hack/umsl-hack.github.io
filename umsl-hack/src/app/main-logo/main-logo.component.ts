import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-logo',
  templateUrl: './main-logo.component.html',
  styleUrls: ['./main-logo.component.css']
})
export class MainLogoComponent implements OnInit {
  logo = '../../assets/img/umsl_hack_logo_white.png';
  sLogo = '../../assets/img/Webp.net-resizeimage.png';
  showMeTheData =  '../../assets/img/umslhackv3.png';

  constructor() { }

  ngOnInit() {
  }

}
