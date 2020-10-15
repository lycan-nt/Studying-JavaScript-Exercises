import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LazyloadingModule } from './modules/lazyloading/lazyloading.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomelazyComponent } from './components/homelazy/homelazy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomelazyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyloadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
