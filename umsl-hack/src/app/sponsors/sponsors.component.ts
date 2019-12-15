import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {
  labs = '../../assets/img/1904logo.png';
  slalom = '../../assets/img/slalom-logo.png';
  masterCard = '../../assets/img/Webp.net-resizeimage.png';
  norton = '../../assets/img/norton.png';
  expressLogo = '../../assets/img/expressScripts.png';
  centene = '../../assets/img/centeneLogo.png';
  umslIS = '../../assets/img/information_systems_logo.jpg';

  constructor() { }

  ngOnInit() {
  }

}
