import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { VatService } from './services/vat-service';

import {
  InputTextModule,
  ButtonModule,
  RadioButtonModule
} from 'primeng/primeng';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    InputTextModule,
    ButtonModule,
    RadioButtonModule
  ],
  providers: [VatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
