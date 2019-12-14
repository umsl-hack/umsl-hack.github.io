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

const appRoutes : Routes =[
  {path:'', component:HomeComponent},
  {path:'confirm', component:ConfirmationComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationComponent,
    HomeComponent,
    TimerComponent,
    SocialMediaComponent,
    FaqComponent,
    PastHacksComponent
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
