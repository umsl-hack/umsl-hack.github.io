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
  umslHack1 = '../../assets/img/v1umsl1.JPG';
  umslHack2 = '../../assets/img/v1umsl2.JPG';
  umslHack3 = '../../assets/img/v1umsl3.JPG';
  umslHack4 = '../../assets/img/v1umsl4.JPG';
  umslHack5 = '../../assets/img/v1umsl5.JPG';
  umslHack6 = '../../assets/img/v1umsl6.JPG';
  v2umsl1 = '../../assets/img/v2umsl1.JPG';
  v2umsl2 = '../../assets/img/v2umsl2.JPG';
  v2umsl3 = '../../assets/img/v2umsl3.JPG';
  v2umsl4 = '../../assets/img/v2umsl4.JPG';
  v2umsl5 = '../../assets/img/v2umsl5.JPG';
  v2umsl6 = '../../assets/img/v2umsl6.JPG';
  v3umsl1 = '../../assets/img/v3umsl1.JPG';
  v3umsl2 = '../../assets/img/v3umsl2.JPG';
  v3umsl3 = '../../assets/img/v3umsl3.JPG';
  v3umsl4 = '../../assets/img/v3umsl4.JPG';
  v3umsl5 = '../../assets/img/v3umsl5.JPG';
  v3umsl6 = '../../assets/img/v3umsl6.JPG';
  showMeTheData =  '../../assets/img/umslhackv3.png';
  labs = '../../assets/img/1904logo.png';
  slalom = '../../assets/img/slalom-logo.png';
  masterCard = '../../assets/img/Webp.net-resizeimage.png';
  norton = '../../assets/img/norton.png';
  expressLogo = '../../assets/img/expressScripts.png';
  centene = '../../assets/img/centeneLogo.png';
  wavicle = '../../assets/img/Wavicle.png';
  cigna = '../../assets/img/cigna.png';

  constructor() { }

  ngOnInit() {
  }

  openSponsorPackage() {
    window.open('../asset/SponsorshipPackage.pdf', '_self');
  }
}
