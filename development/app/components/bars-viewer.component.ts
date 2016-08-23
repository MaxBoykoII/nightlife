import * as _ from 'lodash';

import { Bar } from '../classes/bar';
import { Query } from '../classes/query';

import { User } from '../interfaces/user-interface';

import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { ApiService } from '../services/api.service';
import { StorageService } from '../services/storage.service';

@Component({
    selector: 'bars-viewer',
    templateUrl: './templates/bars-viewer.component.html',
})

export class BarsViewer {
    @Input() user: User;
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