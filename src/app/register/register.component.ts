import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Service } from '../service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private builder: FormBuilder,
    private activerouter: ActivatedRoute,
    private dialog: MatDialog,
    private toastr: ToastrService,
    private service: Service,
    private router: Router,
    private http: HttpClient) { }

  companyForm!: FormGroup;
  personalForm!: FormGroup;

  companyResponse!: any
  personaldataList: any[] = [];
  personalDataListBYId: any[] = [];




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

    this.personalForm = this.builder.group({
      // <----------Personal Data--------->
      'Name': this.builder.control('', Validators.required),
      'Department': this.builder.control('', Validators.required),
      'Mobile': this.builder.control('', Validators.compose([Validators.required, Validators.pattern('^\\d{10}$')])),
      'Designation': this.builder.control('', Validators.required),
      'Email': this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    });


  }


  // <-------------To PUT The Data------------>
  saveCompanyData() {
    if (this.companyForm.valid) {
      console.log("Company data" + this.companyForm.value)
      console.log(this.companyForm.value)
      console.log(this.personalForm.value)

      this.service.addData(this.companyForm.value).subscribe(
        res => {
          this.companyResponse = res
          if (this.companyResponse.id) {
            this.personaldataList.forEach(element => {
              element.id = this.companyResponse.id
            });
            this.service.addPersonalData(this.personaldataList).subscribe(
              response => {
              });
          }

          console.log(res)

          this.toastr.success('Company data added successfully.', 'Thank you have a good day');
          this.dialog.closeAll();
          this.router.navigate(['/home']);
        });
    }
    else {
      this.toastr.warning('Error adding company data.');
    }
  }

  savePersonalData() {
    if (this.personalForm.valid) {
      console.log("1St" + this.personaldataList);
      this.personaldataList.push(this.personalForm.value);
      this.toastr.success('Personal data added successfully.', 'Please add the Campany Details');
    }
    else {
      this.toastr.warning('Error adding personal data.');
    }
  }


  displayedColumns: string[] = ['Name', 'Department', 'Mobile', 'Designation', 'Email'];
  dataSource!: MatTableDataSource<any>;
}
