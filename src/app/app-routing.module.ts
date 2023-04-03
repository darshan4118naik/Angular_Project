import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientListComponent } from './client-list/client-list.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"clients",component:ClientListComponent},
  {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
