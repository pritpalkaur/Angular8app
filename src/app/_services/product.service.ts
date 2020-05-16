import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { product } from '@app/_models';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({ providedIn: 'root' })
export class productService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<product[]>(`${environment.apiUrl}/Product`);
    }
    postProduct(product)
    {
        const headers = { 'content-type': 'application/json'}  
        const body=JSON.stringify(product);
        return this.http.post<product>(`${environment.apiUrl}/Product`, body,{'headers':headers})
        .pipe(
          catchError((err) => {
            console.error(err);
            throw err;
          }
        ))
    }
    
}