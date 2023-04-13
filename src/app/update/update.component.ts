import { Component , OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Service } from '../service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  companyForm!: FormGroup;
  personalForm!: FormGroup;
  companyData: any[] = [];
  personalData: any[] = [];
  clientDataIdtoUpdate!: number;
  personalDataIdtoUpdate!: number;
  isClientDataUpdated!: boolean;
  ispersonalDataUpdated!: boolean;

  companyResponse!: any
  personaldataList: any[] = [];
  personalDataListBYId: any[] = [];

  personaldataLisToUpdate: any[] = [];

  constructor(private builder: FormBuilder,
    private activerouter: ActivatedRoute,
    private dialog: MatDialog,
    private toastr: ToastrService,
    private service: Service,
    private router: Router,
    private http: HttpClient) { }
  ngOnInit(): void {

    this.companyForm = this.builder.group({

      // <----------Company Data--------->
      'GST_No': this.builder.control('', Validators.required),
      'Name': this.builder.control('', Validators.required),
      'Country': this.builder.control('', Validators.required),
      'Latitude': this.builder.control(''),
      'Longitude': this.builder.control(''),
      'PAN_No': this.builder.control('', Validators.required),
      'Address': this.builder.control('', Validators.required),
      'State': this.builder.control('', Validators.required),
      'MobileNo': this.builder.control('', Validators.compose([Validators.required, Validators.pattern('^\\d{10}$')])),
      'Code': this.builder.control('', Validators.required),
      'Pincode': this.builder.control('', Validators.compose([Validators.pattern('^\\d{6}$')])),
      'City': this.builder.control('', Validators.required),
      'Email': this.builder.control('', Validators.compose([Validators.required, Validators.email])),
      'Currency': this.builder.control('', Validators.required),
    });

    this.activerouter.params.subscribe(
      res => {
        this.clientDataIdtoUpdate = res['id'];
        this.service.getCompanyDataById(this.clientDataIdtoUpdate).subscribe(
          res => {
            this.isClientDataUpdated = true;
            this.fillCompanyDataFormToUpdate(res);
          });
      });

    this.personalForm = this.builder.group({
      // <----------Personal Data--------->
      'Name': this.builder.control('', Validators.required),
      'Department': this.builder.control('', Validators.required),
      'Mobile': this.builder.control('', Validators.compose([Validators.required, Validators.pattern('^\\d{10}$')])),
      'Designation': this.builder.control('', Validators.required),
      'Email': this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    });
  
    this.activerouter.params.subscribe(
      res=>{
        this.personalDataIdtoUpdate=res['id'];
        this.service.getPersonalDataBYId(this.personalDataIdtoUpdate
          ).subscribe( 
      res=>{
       console.log("response")
       console.log(res)
        this.personalDataListBYId=res
        console.log("getList"+this.personalDataListBYId)
        this.ispersonalDataUpdated=true;
        this.personalDataListBYId.forEach(element => {
  
          
    
            this.personalForm.setValue({
              
              'Name': element.Name,
              'Department': element.Department,
              'Mobile': element.Mobile,
              'Designation': element.Designation,
              'Email': element.Email
            });
          
            this.personaldataLisToUpdate.push(this.personalForm.value);
        });
        
        
        });
        
        });
    
  }


  

  fillCompanyDataFormToUpdate(companyData: any) {
    this.companyForm.setValue({
      'GST_No': companyData.GST_No,
      'Name': companyData.Name,
      'Country': companyData.Country,
      'Latitude': companyData.Latitude,
      'Longitude': companyData.Longitude,
      'PAN_No': companyData.PAN_No,
      'Address': companyData.Address,
      'State': companyData.State,
      'MobileNo': companyData.MobileNo,
      'Code': companyData.Code,
      'Pincode': companyData.Pincode,
      'City': companyData.City,
      'Email': companyData.Email,
      'Currency': companyData.Currency
    });

  }

  update() {
    if (this.personalForm.valid) {
      this.service.updatePersonalData(this.personaldataLisToUpdate, this.personalDataIdtoUpdate).subscribe(
        res => {
          this.toastr.success('Personal Data Updated Successfully.');
        });
    }
    else {
      this.toastr.warning('Error while updating Personal data.');
    }
    if (this.companyForm.valid) {
      this.service.updateComapanyData(this.companyForm.value, this.clientDataIdtoUpdate).subscribe(
        res => {
          this.toastr.success('Updated Successfully.', 'Thank you have a good day');
          this.router.navigate(['/home']);
        });
    }
    else {
      this.toastr.warning('Error while updating Company data.');
    }
  }
  
}
