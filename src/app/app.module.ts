import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material_module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import { MatToolbarModule } from '@angular/material/toolbar';


import { HomeComponent } from './home/home.component';

import { RegisterComponent } from './register/register.component';
import { ClientListComponent } from './client-list/client-list.component';
import { RouterLink } from '@angular/router';
import { Service } from './service';





@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
   ClientListComponent,
    HomeComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterLink
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
