import { HttpClient } from "@angular/common/http";
import { Observable, forkJoin } from "rxjs";
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class Service {
  companyBaseUrl = 'http://localhost:4005/company';
  personalBaseUrl = 'http://localhost:4005/personal';

  constructor(private http: HttpClient) { }


  // <-------------To Get The Data------------>
  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.companyBaseUrl);
  }

  // <-------------To PUT The Data------------>
  addData(data: any): Observable<any[]> {
    return this.http.post<any[]>(this.companyBaseUrl, data);
  }
  addPersonalData(data: any): Observable<any[]> {
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
    console.log("1111111111111")
    return this.http.get<any[]>(this.personalBaseUrl + '/' + id)
  }

  // <-------------To DELETE The Data------------>
  deleteData(id: number): Observable<any[]> {
    return forkJoin([
      this.http.delete<any[]>(`${this.companyBaseUrl}/${id}`),
      this.http.delete<any[]>(`${this.personalBaseUrl}/${id}`)
    ]);
  }
}