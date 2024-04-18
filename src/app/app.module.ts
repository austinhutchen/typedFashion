import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app.routes';
import  {AppComponent}  from './app.component';
import { StoreComponent } from './store/store.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule to the imports array,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }