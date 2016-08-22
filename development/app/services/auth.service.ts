import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class AuthService {
     constructor(private http: Http) {
     }
     fetch() {
         /* Calls out to /auth/user to retrieve user object */
         return this.http.get('/auth/user')
            .map(response => response.json());
     }
}

