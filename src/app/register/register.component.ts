import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Service } from '../service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent 
{
  

  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: Service) {

  }


  form= this.builder.group({

    // Company Data..........................................................
    gstNo: this.builder.control('', Validators.required) ,
    name: this.builder.control('', Validators.required),
    country:this.builder.control( '', Validators.required),
    latitude: this.builder.control(''),
    longitude:this.builder.control(''),
    panNo: this.builder.control('', Validators.required),
    address:this.builder.control('', Validators.required),
    state:this.builder.control('', Validators.required),
    mobileNo: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('^\\d{10}$')])),
    code:this.builder.control( '', Validators.required),
    pinCode:this.builder.control( '',Validators.compose( [Validators.required, Validators.pattern('^\\d{6}$')])),
    city:this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    currency:this.builder.control('', Validators.required),

// Personal Data..............................................................
    person_name: this.builder.control('', Validators.required),
    department: this.builder.control('', Validators.required),
    contactNo: this.builder.control('', Validators.required),
    designation: this.builder.control('', Validators.required),
    Email: this.builder.control('', Validators.required)

  });



  registerForm() 
  {console.log("111111")
    
    if (this.form.valid) 
    {console.log("222222")

      this.service.addData(this.form.value).subscribe
      (res => {
          this.toastr.success('Data added successfully.');
          this.form.reset();
          console.log("33333")
        });
      }
        else {console.log("4444444")
          this.toastr.warning('Error adding data.');
        }
      
    
  }
}
