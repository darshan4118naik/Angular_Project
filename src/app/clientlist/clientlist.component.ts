import { Component, OnInit,  ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Service } from '../service';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent implements OnInit {

  clientlist: any;
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private builder: FormBuilder,
    private service: Service,
    private toastr: ToastrService,
    private router:Router
  ) {}

  displayedColumns: string[] = [
    'action',
    'Name',
    'Code',
    'Address',
    'Country',
    'State',
    'City',
    'MobileNo',
    'Email',
    'GST_No',
    'PAN_No'
  ];

  ngOnInit(): void {
      this.getData();
  }
 
   // <-------------To GET The Data------------>
  getData(): void 
  {
    this.service.getData().subscribe(
      res => {
        this.clientlist = res;
        console.log("clientlist:", this.clientlist);
        this.dataSource = new MatTableDataSource(this.clientlist);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log("dataSource:", this.dataSource);
      });
  }

   // <-------------To SEARCH The Data------------>
  applyFilter(event: Event) 
  {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) 
    {
      this.dataSource.paginator.firstPage();
    }
  }
 
   // <-------------To DELETE The Data------------>
  deleteclient(id: number): void 
  {
    if (confirm('Are you sure you want to delete this data?')) 
    {
      this.service.deleteData(id).subscribe(
        res => {
          this.toastr.success('Data deleted successfully.');
          this.getData();
        });
      }
        else 
        {
          this.toastr.error('Error deleting data.');
        }
  }
}