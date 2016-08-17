import * as _ from 'lodash';

import {
    Bar
}
from '../classes/bar';

import {
    Query
}
from '../classes/query';

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

import {
    StorageService
}
from '../services/storage.service';

@Component({
    selector: 'bars',
    templateUrl: './templates/bars.viewer.html',
    providers: [HTTP_PROVIDERS, ApiService, StorageService]
})

export class BarsViewer {
    bars: Bar[];
    query: Query;
    constructor(private _apiService: ApiService, private _storageService: StorageService) {
        this.query = new Query('');
        this.bars = [];
    }

    search(location) {
        this.query.val = location;
        this._storageService.store(this.query);
        this._apiService.fetch(location).subscribe((bars: Bar[]) => {
            this.bars = bars;
        });
    }
    ngOnInit() {
        this.query = this._storageService.retrieve() || new Query('San Francisco');
        this.search(this.query.val);
    }
}