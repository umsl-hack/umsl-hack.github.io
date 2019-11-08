import { Component, OnInit } from '@angular/core';
import {AccordionModule} from 'primeng/primeng';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logo="../../assets/img/umsl_hack_logo_white.png";
  umslHackMonoColorLogo = '../../assets/img/monogram_color.png';
  umslHackMonoBlack = '../../assets/img/monogram_blk.png';
  sLogo="../../assets/img/Webp.net-resizeimage.png";
  umslIS="../../assets/img/information_systems_logo.jpg"
  og_UMSLHACK = "../../assets/img/og_logo.png"
  umslHack1="../../assets/img/IMG_0011.JPG"
  umslHack2 = "../../assets/img/IMG_9836.JPG"
  umslHack3 = "../../assets/img/IMG_9887.JPG"
  umslHack4 = "../../assets/img/DSC04230.JPG"
  umslHack5 = "../../assets/img/IMG_9878.JPG"
  umslHack6 = "../../assets/img/IMG_9967.JPG"
  showMeTheData=  "../../assets/img/umslhackv3.png" 
  labs= "../../assets/img/1904logo.png" 
  slalom = "../../assets/img/slalom-logo.png"
  masterCard = "../../assets/img/Webp.net-resizeimage.png"
  norton = '../../assets/img/norton.png' 
  expressLogo = '../../assets/img/expressScripts.png'
  centene = '../../assets/img/centeneLogo.png'


  constructor() { }

  ngOnInit() {
  }

}
