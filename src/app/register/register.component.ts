import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Service } from '../service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent 
{
  
  constructor(private builder: FormBuilder,private dialog:MatDialog, private toastr: ToastrService, private service: Service , private router:Router ,private http:HttpClient) {

  }




companyData: any = [];
personalData: any = [];




companyForm= this.builder.group({

  // Company Data..........................................................
  'GST_No': this.builder.control('') ,
  'Name': this.builder.control(''),
  'Country':this.builder.control( ''),
  'Latitude': this.builder.control(''),
  'Longitude':this.builder.control(''),
  'PAN_No': this.builder.control(''),
  'Address':this.builder.control(''),
  'State':this.builder.control(''),
  'MobileNo': this.builder.control('', Validators.compose([ Validators.pattern('^\\d{10}$')])),
  'Code':this.builder.control( ''),
  'Pincode':this.builder.control( '',Validators.compose( [ Validators.pattern('^\\d{6}$')])),
  'City':this.builder.control(''),
  'Email': this.builder.control('', Validators.compose([ Validators.email])),
  'Currency':this.builder.control(''),
});

personalForm=this.builder.group({
  // Personal Data..............................................................
  'Name': this.builder.control(''),
  'Department': this.builder.control(''),
  'Mobile': this.builder.control(''),
  'Designation': this.builder.control(''),
  'Email': this.builder.control('')
});







saveCompanyData() {
  console.log('1111111111')
  if (this.companyForm.valid) { 

  
    console.log('222222')   
    this.service.addData(this.companyForm.value).subscribe (
      res => {
        this.toastr.success('Company data added successfully.');
        //this.companyForm.reset();
            this.personalData = []; 
      });
    }
      else {
        this.toastr.warning('Error adding company data.');
      }
    
  
}

savePersonalData() {
  if (this.personalForm.valid) {
    this.personalData.push(this.personalForm.value);
    this.toastr.success('Personal data added successfully.');  
  }
}



}

//   form= this.builder.group({

//     // Company Data..........................................................
//     'GST_No': this.builder.control('') ,
//   'Name': this.builder.control(''),
//   'Country':this.builder.control( ''),
//   'Latitude': this.builder.control(''),
//   'Longitude':this.builder.control(''),
//   'PAN_No': this.builder.control(''),
//   'Address':this.builder.control(''),
//   'State':this.builder.control(''),
//   'MobileNo': this.builder.control('', Validators.compose([ Validators.pattern('^\\d{10}$')])),
//   'Code':this.builder.control( ''),
//   'Pincode':this.builder.control( '',Validators.compose( [ Validators.pattern('^\\d{6}$')])),
//   'City':this.builder.control(''),
//   'Email': this.builder.control('', Validators.compose([ Validators.email])),
//   'Currency':this.builder.control(''),
// 'PName': this.builder.control(''),
//   'Department': this.builder.control(''),
//   'Mobile': this.builder.control(''),
//   'Designation': this.builder.control(''),
//   'PEmail': this.builder.control('')
// });

 



  // registerForm() 
  // {console.log("111111")
    
  //   if (this.form.valid) 
  //   {console.log("222222")

  //     this.service.addData(this.form.value).subscribe
  //     (res => {
  //         this.toastr.success('Data added successfully.');
  //         this.form.reset();
  //         console.log("33333")
  //       });
  //     }
  //       else {console.log("4444444")
  //         this.toastr.warning('Error adding data.');
  //       }
      
    
  // }

// , Validators.required
// , Validators.required
// , Validators.required
// , Validators.required
// Validators.required,
// Validators.required,
// , Validators.required
// Validators.required,
// , Validators.required
// , Validators.required
// ,
//  Validators.required
// , Validators.required
// , Validators.required
// , Validators.required
