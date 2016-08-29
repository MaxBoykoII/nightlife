import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { User } from '../interfaces/user-interface';

@Injectable()

export class AuthService {
     constructor(private http: Http) {
     }
     fetch() {
         /* Calls out to /auth/user to retrieve user object */
         return this.http.get('/auth/user')
            .map(response => response.json());
     }
     addBar(userId: string, barId: string): Observable < User > {
         /* Posts a new bar id to a user's visited array */
         const body = {
             userId,
             barId
         };
         const headers = new Headers({
             'Content-Type': 'application/json'
         });
         const options = new RequestOptions({
             headers
         });
         return this.http.put('/auth/user', body, options)
             .map(response => response.json());
     }
}

