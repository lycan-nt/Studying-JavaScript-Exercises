import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadingRoutingModule } from './lazyloading-routing.module';
import { FooterComponent } from 'src/app/footer/footer.component';
import { HeaderComponent } from 'src/app/header/header.component';


@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    LazyloadingRoutingModule
  ]
})
export class LazyloadingModule { }
