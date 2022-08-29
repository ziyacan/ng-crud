import { environment } from '../../environments/environment'
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  apiUrl = environment.apiUrl;

  constructor(
    public http: HttpClient
  ) { }

  getAllUser(): Observable<Employee> {
    return this.http.get<Employee>(this.apiUrl + 'posts');
  }

  getEmployeById(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.apiUrl + 'posts/' + id);
  }

  createEmploye<T>({ model }: { model: T; headers?: HttpHeaders; }): Observable<T> {
    let url;
    url = 'posts';
    return this.http.post<T>(this.apiUrl + url, JSON.stringify(model), { headers: this.headers });
  }

  updateEmp<T>(id: string, model: T): Observable<T> {
    let url;
    url = 'posts/' + id;
    return this.http.put<T>(this.apiUrl + url, JSON.stringify(model), { headers: this.headers });
  }

  deleteEmp(id: any): Observable<Employee> {
    let url;
    url = 'posts/' + id;
    return this.http.delete<Employee>(this.apiUrl + url, { headers: this.headers })
  }
}
