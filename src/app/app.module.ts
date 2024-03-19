import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes'; // Import AppRoutingModule

import { HordeComponent } from './horde/horde.component';
import { StoreComponent } from './store/store.component';

@NgModule({
  declarations: [
    AppComponent,

    // other declarations...
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Add this
    // other imports...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }