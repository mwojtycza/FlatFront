import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Expense } from '../models/Expense';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {}

  get(url: string): Observable<any> {
    return this.http.get(url);
  }

  post(url: string, body: object = {}): Observable<any> {
    return this.http.post(url, body);
  }

  put(url: string, body: object = {}): Observable<any> {
    return this.http.put(url, body);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(url);
  }

}
