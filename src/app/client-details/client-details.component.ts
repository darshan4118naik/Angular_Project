import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent {

  
  clientId!: number;
  clientDetails!: any[];
  constructor(private activatedRoute: ActivatedRoute, private service: Service) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(val => {
      this.clientId = val['id'];
      console.log(this.clientId)
      this.fetchUserDetails(this.clientId);
    })
  }

   // <-------------To GET The Data For Details Card------------>
  fetchUserDetails(clientId: number) {
    this.service.getPersonalDataBYId(clientId)
      .subscribe({
        next: (res) => {
          console.log(res)
          this.clientDetails = res;
          console.log(this.clientDetails)
        },
        error: (err) => {
          console.log(err);
        }
      })
  }
}
