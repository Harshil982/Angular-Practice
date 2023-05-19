import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CheckCompoComponent } from './check-compo/check-compo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CheckCompoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
