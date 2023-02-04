import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ChartModule} from 'primeng/chart';
import { ReactiveFormsModule } from '@angular/forms';
import { InputValueValidator } from './shared/Validator/box-value.validator';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule
  ],
  providers: [InputValueValidator],
  bootstrap: [AppComponent]
})
export class AppModule { }
