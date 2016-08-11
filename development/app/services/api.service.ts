import {
    Injectable
}
from '@angular/core';
import {
    Http
}
from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ApiService {
    constructor(private http: Http) {}
    fetch(location = "San Francisco") {
        return this.http.get(`/api?location=${location}`)
            .map(response => response.json());
    }
}