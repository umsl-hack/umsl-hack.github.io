import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  umslHackMonoColorLogo = '../../assets/img/monogram_color.png';
  umslHackMonoBlack = '../../assets/img/logo5-06.png';

  constructor() { }

  ngOnInit() {
  }

}
