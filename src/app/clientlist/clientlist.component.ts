import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Service } from '../service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent implements OnInit {
  clientlist: any;
  dataSource!: MatTableDataSource<any>;

  constructor(
    private builder: FormBuilder,
    private service: Service,
    private toastr: ToastrService,
  ) {

  }

  displayedColumns: string[] = [
    'action',
    'id',
    'Name',
    'Code',
    'Name',
    'Address',
    'Country',
    'State',
    'City',
    'MobileNo',
    'Email',
    'GST_No',
    'PAN_No',

    'Latitude',
    'Longitude',
    'Pincode',
    'Currency',

    'PName',
    'Department',
    'Mobile',
    'Designation',
    'PEmail'
  ];

  ngOnInit(): void {
      this.getData();
  }
 
  getData(): void {
    console.log("111111");
    this.service.getData().subscribe(
      res => {
        console.log("222222");
        this.clientlist = res;
        console.log("clientlist:", this.clientlist);
        this.dataSource = new MatTableDataSource(this.clientlist);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log("dataSource:", this.dataSource);
      });
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

