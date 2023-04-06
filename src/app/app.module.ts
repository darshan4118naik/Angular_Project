import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material_module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


import { HomeComponent } from './home/home.component';

import { RegisterComponent } from './register/register.component';

import { Router, RouterLink } from '@angular/router';
import { Service } from './service';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ClientlistComponent } from './clientlist/clientlist.component';






@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ClientlistComponent,
    HomeComponent,
    ClientlistComponent,
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
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
    
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
