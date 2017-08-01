import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {GooglePlaceModule} from "angular2-google-place";
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

   AgmCoreModule.forRoot({
      apiKey: "AIzaSyChluY7dPKxgnZvZNy9Ty22AbqOPhfwM8U"
    }),

    BrowserModule,
    ReactiveFormsModule,
    GooglePlaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
