import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Service } from '../service';
import { ToastrService } from 'ngx-toastr';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clientlist: any;
  dataSource:any;

  constructor(private formBuilder: FormBuilder, private service: Service, private toastr: ToastrService) { 
    this.getData();
  }

  ngOnInit() {
    
  }

  getData(): void {
    console.log("111111");
    this.service.getData().subscribe(
      res => {
        console.log("222222");
        this.clientlist = res;
        console.log("clientlist:", this.clientlist);
        this.dataSource = new MatTableDataSource(this.clientlist);
        console.log("dataSource:", this.dataSource);
      });
}


  displayedColumns: string[] = ['action', 'name', 'code', 'person_name','department','designation','address', 'country', 'state', 'city','mobileno', 'email', 'gstNo', 'panNo','latitud', 'longitude','pinCode', 'currency', 'contactNo', 'Email'];
  

  updateData(data: any): void {
    this.service.updateData(data).subscribe(
      () => {
        this.toastr.success('Data updated successfully.');
        this.getData();
      },
      error => {
        this.toastr.error('Error updating data.');
      }
    );
  }

  deleteData(data: any): void {
    if (confirm('Are you sure you want to delete this data?')) {
      this.service.deleteData(data).subscribe(
        () => {
          this.toastr.success('Data deleted successfully.');
          this.getData();
        });
      }
        else {
          this.toastr.error('Error deleting data.');
        }
    
    }

    DataSource = new MatTableDataSource;

  
    applyFilter(filterValue: string) {
      this.DataSource.filter = filterValue.trim().toLowerCase();
    }
  
    clearSearch() {
      this.DataSource.filter = '';
    }
  
    filterPredicate(clientlist: any, filter: string): boolean {
      const searchString = filter.trim().toLowerCase();
      return Object.values(this.clientlist).some(value => {
        const stringValue = String(value).toLowerCase();
        return stringValue.includes(searchString);
      });
    }
  }



