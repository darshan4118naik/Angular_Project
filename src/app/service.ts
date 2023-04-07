import { HttpClient } from "@angular/common/http";
import { Observable, forkJoin } from "rxjs";
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class Service {
  companyBaseUrl = 'http://localhost:3002/client';
  personalBaseUrl = 'http://localhost:3002/personal';

  constructor(private http: HttpClient) { }

  
  // <-------------To Get The Data------------>
  getData(): Observable<any[]> {
    console.log("33333")
    return this.http.get<any[]>(this.companyBaseUrl);
  }

  // <-------------To PUT The Data------------>
  addData(data: any): Observable<any[]> {
    console.log("55555")
    return this.http.post<any[]>(this.companyBaseUrl, data);
  }
  addPersonalData(data: any): Observable<any[]> {
    console.log("55555")
    return this.http.post<any[]>(this.personalBaseUrl, data);
  }

  // <-------------To UPDATE The Data------------>
  updateComapanyData(clientobject: any, id: number) {
    return this.http.put<any[]>(`${this.companyBaseUrl}/${id}`, clientobject);
  }
  updatePersonalData(personalobject: any, id: number) {
    return this.http.put<any[]>(`${this.personalBaseUrl}/${id}`, personalobject);
  }

  // <-------------To Get The DATA By ID ------------>
  getCompanyDataById(id: number) {
    return this.http.get<any>(this.companyBaseUrl + '/' + id)
  }
  getPersonalDataBYId(id: number) {
    return this.http.get<any>(this.personalBaseUrl + '/' + id)
  }

  // <-------------To DELETE The Data------------>
  deleteData(id: number): Observable<any[]> {
    return forkJoin([
      this.http.delete<any[]>(`${this.companyBaseUrl}/${id}`),
      this.http.delete<any[]>(`${this.personalBaseUrl}/${id}`)
    ]);
  }


}