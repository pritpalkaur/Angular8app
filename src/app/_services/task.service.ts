import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

import { environment } from './environment';
import { task } from './task'
import { catchError } from 'rxjs/internal/operators/catchError';
import { response } from './response';

@Injectable({ providedIn: 'root' })
export class taskService {
  [x: string]: any;
   constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<task[]>(`${environment.apiUrl}/contracts/GetSmartContractInit`);
    }
    getGetBalanceByAddress()
    {
      return this.http.get<response>(`${environment.apiUrl}/contracts/GetBalanceByAddress`);
    }
    GetRecentTransactions()
    {
      return this.http.get<response>(`${environment.apiUrl}/contracts/GetRecentTransactions`);
  
    }
    postProduct(product)
    {
        const headers = { 'content-type': 'application/json'}  
        const body=JSON.stringify(product);
        return this.http.post<task>(`${environment.apiUrl}/task`, body,{'headers':headers})
        .pipe(
          catchError((err) => {
            console.error(err);
            throw err;
          }
        ))
    }
    
}