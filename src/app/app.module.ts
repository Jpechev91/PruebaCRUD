import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TableModule } from 'primeng/table';
import {CardModule} from 'primeng/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CascadeSelectModule,
    HttpClientModule,
    DropdownModule,
    ScrollPanelModule,
    TableModule,
    CardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
