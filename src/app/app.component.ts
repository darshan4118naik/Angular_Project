import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_client';
  
  constructor(private dialog:MatDialog ) {}

  // <---------To open dialog box for Client Register----->
  addclient()
  {
   this.dialog.open(RegisterComponent);
  }
}
