import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {TourListComponent} from './tour/tour-list/tour-list.component';
import {TourCreateComponent} from './tour/tour-create/tour-create.component';
import {TourEditComponent} from './tour/tour-edit/tour-edit.component';
import {TourDeleteComponent} from './tour/tour-delete/tour-delete.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TourListComponent,
    TourCreateComponent,
    TourEditComponent,
    TourDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
