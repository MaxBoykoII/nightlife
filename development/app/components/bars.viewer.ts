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
    bars = []
    constructor(private _apiService: ApiService) {}
    ngOnInit() {
        this._apiService.fetch().subscribe(data => {
                this.bars = data;
                console.log(this.bars);
            });
        }
    }