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
import { RegisterComponent } from './register/register.component';
import { Service } from './service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { UpdateComponent } from './update/update.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ClientlistComponent,
    ClientlistComponent,
    ClientDetailsComponent,
    HomeComponent,
    UpdateComponent,
    
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
    MatInputModule,
    MatListModule,
    MatCardModule

  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
