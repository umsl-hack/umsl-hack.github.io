import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logo = '../../assets/img/umsl_hack_logo_white.png';
  umslHackMonoColorLogo = '../../assets/img/monogram_color.png';
  umslHackMonoBlack = '../../assets/img/logo5-06.png';
  sLogo = '../../assets/img/Webp.net-resizeimage.png';
  umslIS = '../../assets/img/information_systems_logo.jpg';
  og_UMSLHACK = '../../assets/img/og_logo.png';
  showMeTheData =  '../../assets/img/umslhackv3.png';
  labs = '../../assets/img/1904logo.png';
  slalom = '../../assets/img/slalom-logo.png';
  masterCard = '../../assets/img/Webp.net-resizeimage.png';
  norton = '../../assets/img/norton.png';
  expressLogo = '../../assets/img/expressScripts.png';
  centene = '../../assets/img/centeneLogo.png';

  constructor() { }

  ngOnInit() {
  }

  openSponsorPackage() {
    window.open('../asset/SponsorshipPackage.pdf', '_self');
  }
}
