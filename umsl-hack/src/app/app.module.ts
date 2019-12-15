import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AccordionModule} from 'primeng/accordion';

import { AppComponent } from './app.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HomeComponent } from './home/home.component';
import { TimerComponent } from './timer/timer.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { FaqComponent } from './faq/faq.component';
import { PastHacksComponent } from './past-hacks/past-hacks.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { MainLogoComponent } from './main-logo/main-logo.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'confirm', component: ConfirmationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationComponent,
    HomeComponent,
    TimerComponent,
    SocialMediaComponent,
    FaqComponent,
    PastHacksComponent,
    NavBarComponent,
    AboutComponent,
    SponsorsComponent,
    ContactUsComponent,
    FooterComponent,
    MainLogoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
