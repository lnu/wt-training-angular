import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FirstModule} from './first/first.module';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    FirstModule,
    AppRoutingModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
