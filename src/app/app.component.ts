import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from './register/register.component';
import { ClientlistComponent } from './clientlist/clientlist.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_client';
  
  constructor(private dialog:MatDialog )
  {

  }

  addclient()
  {
   this.dialog.open(RegisterComponent);
  }

clientlists()
  {
    this.dialog.open(ClientlistComponent);
    
  }

 
}
