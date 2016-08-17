import * as _ from 'lodash';

import {
    Bar
}
from '../classes/bar';

import {
    Component
}
from '@angular/core';

import {
    HTTP_PROVIDERS
}
from '@angular/http';

import {
    ApiService
}
from '../services/api.service';

@Component({
    selector: 'bars',
    templateUrl: './templates/bars.viewer.html',
    providers: [HTTP_PROVIDERS, ApiService]
})

export class BarsViewer {
    bars: Bar[];
        query: any;
    constructor(private _apiService: ApiService) {
        this.query = {
            val: ''
        };
        this.bars = [];
    }
 
    search(location = 'San Francisco') {
        this._apiService.fetch(location).subscribe((bars: Bar[]) => {
            this.bars = bars;
        });
    }
    ngOnInit() {
        this.search();
    }
}