import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppSettingsService {

    users =[];
   constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
            console.log(data);
            this.users= data;
        });
    }

    public getJSON(): Observable<any> {
        return this.http.get("./assets/user.json");
    }
}