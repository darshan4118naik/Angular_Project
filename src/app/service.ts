import { HttpClient } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { Observable, catchError, throwError } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Service {
     apiUrl = 'http://localhost:3000/client';
     
    constructor(private http: HttpClient) { }

    getData(): Observable<any[]> {
      console.log("33333")
        return this.http.get<any[]>(this.apiUrl);
    }    
    addData(data:any): Observable<any[]> {
        console.log("55555")
        return this.http.post<any[]>(this.apiUrl, data);
        
    }
    updateData(data: any): Observable<any> {
        return this.http.put<any>(this.apiUrl, data);
    }

    deleteData(id: number): Observable<any> {
      console.log(id);
        return this.http.delete(this.apiUrl+'/'+'${id}');
    }
}







