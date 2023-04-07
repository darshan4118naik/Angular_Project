import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {  ToastrService } from 'ngx-toastr';
import { Service } from '../service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit
{
  
  constructor(private builder: FormBuilder,
    private activerouter:ActivatedRoute,
    private dialog:MatDialog,
    private toastr: ToastrService,
    private service: Service ,
    private router:Router ,
    private http:HttpClient) {}



companyForm!:FormGroup;
personalForm!:FormGroup;
companyData: any = [];
personalData: any = [];
clientDataIdtoUpdate!:number;
personalDataIdtoUpdate!:number;
isClientDataUpdated!:boolean;
ispersonalDataUpdated!:boolean;



ngOnInit(): void {
  this.companyForm= this.builder.group({

    // <----------Company Data--------->
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
  
  this.personalForm=this.builder.group({
     // <----------Personal Data--------->
    'Name': this.builder.control(''),
    'Department': this.builder.control(''),
    'Mobile': this.builder.control(''),
    'Designation': this.builder.control(''),
    'Email': this.builder.control('')
  });

  

// <----------To Get Existing Company Data To Update------->
  this.activerouter.params.subscribe(
    res=>{
      this.clientDataIdtoUpdate=res['id'];
      this.service.getCompanyDataById(this.clientDataIdtoUpdate).subscribe( 
    res=>{
      this.isClientDataUpdated=true;
      this.fillCompanyDataFormToUpdate(res);
      });
      });

      // <----------To Get Existing Personal Data To Update------->
  this.activerouter.params.subscribe(
    res=>{
      this.personalDataIdtoUpdate=res['id'];
      this.service.getPersonalDataBYId(this.personalDataIdtoUpdate
        ).subscribe( 
    res=>{
      this.ispersonalDataUpdated=true;
      this.fillPersonalDataFormToUpdate(res);
      });
      });
}


// <-------------To PUT The Data------------>
saveCompanyData() 
{
  console.log('1111111111')
  if (this.companyForm.valid) 
  { 
    this.service.addPersonalData(this.personalForm.value).subscribe(
      response=>{     
    });
    console.log('222222')   
    this.service.addData(this.companyForm.value).subscribe (
    res => {        
        this.toastr.success('Company data added successfully.','Thank you have a good day');
        this.dialog.closeAll();
        this.router.navigate(['/home']);           
      });
  }
      else 
      {
        this.toastr.warning('Error adding company data.');
      } 
}
savePersonalData() 
{
  console.log('1111111111')
  if (this.personalForm.valid) 
  {
      this.toastr.success('Personal data added successfully.', 'Please add the Campany Details');
  }
      else 
      {
        this.toastr.warning('Error adding personal data.');
      }
}

fillCompanyDataFormToUpdate(companyData:any)
{
this.companyForm.setValue({
  'GST_No':companyData.GST_No,
  'Name':companyData.Name,
  'Country':companyData.Country,
  'Latitude':companyData.Latitude,
  'Longitude':companyData.Longitude,
  'PAN_No':companyData.PAN_No,
  'Address':companyData.Address,
  'State':companyData.State,
  'MobileNo':companyData.MobileNo,
  'Code':companyData.Code,
  'Pincode':companyData.Pincode,
  'City':companyData.City,
  'Email':companyData.Email,
  'Currency':companyData.Currency
});

}

fillPersonalDataFormToUpdate(personalData:any){

  this.personalForm.setValue({
    'Name':personalData.Name,
    'Department':personalData.Department,
   'Mobile': personalData.Mobile,
   'Designation':personalData.Designation,
   'Email':personalData.Email
   
  });
}


// <-------------To UPDATE The Data------------>
update()
{
  if (this.personalForm.valid) { 
    console.log('222222')   
    this.service.updatePersonalData(this.personalForm.value, this.personalDataIdtoUpdate).subscribe (
      res => {        
        this.toastr.success('Personal Data Updated Successfully.');        
                 
      });
    }
    else {
      this.toastr.warning('Error while updating Personal data.');
    }
  if (this.companyForm.valid) { 
    console.log('222222')   
    this.service.updateComapanyData(this.companyForm.value, this.clientDataIdtoUpdate).subscribe (
      res => {        
        this.toastr.success('Updated Successfully.','Thank you have a good day');        
        this.router.navigate(['/home']);           
      });
    }
      else {
        this.toastr.warning('Error while updating Company data.');
      }
}

}
