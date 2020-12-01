import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Rota1Component } from './coponents/rota1/rota1.component';
import { Rota2Component } from './components/rota2/rota2.component';

@NgModule({
  declarations: [
    AppComponent,
    Rota1Component,
    Rota2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
