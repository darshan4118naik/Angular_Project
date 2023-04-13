import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'clients', component: ClientlistComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'details/:id', component: ClientDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
