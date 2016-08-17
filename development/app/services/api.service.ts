import * as _ from 'lodash';

import {
    Bar
}
from '../classes/bar';

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
            .map(response => response.json())
            .map(data => {
               return _.map(data, (bar:Bar) => {
                    //TODO Add data validation
                    return new Bar(bar.id,
                        bar.display_phone,
                        bar.image_url,
                        bar.name,
                        bar.rating,
                        bar.url);
                });
            });
    }
}