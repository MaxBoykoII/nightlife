import * as _ from 'lodash';

import { Bar } from '../classes/bar';
import { Query } from '../classes/query';

import { User } from '../interfaces/user-interface';

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { ApiService } from '../services/api.service';
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'bars-viewer',
    templateUrl: './templates/bars-viewer.component.html',
})

export class BarsViewer {
    @Input() user: User;
    @Output() barClicked: EventEmitter<string> = new EventEmitter<string>();
    bars: Bar[];
    query: Query;
    constructor(private _apiService: ApiService, private _storageService: StorageService, private _authService: AuthService) {
        this.query = new Query('');
        this.bars = [];
    }

    search(location):void {
        this.query.val = location;
        this._storageService.store(this.query);
        this._apiService.fetch(location).subscribe((bars: Bar[]) => {
            this.bars = bars;
            console.log(bars);
        });
    }
    going(bar:Bar):boolean {
        return _.includes(this.user.visited, bar.id);
    }
    emitBar(id: string): void {
        this.barClicked.emit(id);
        }
        
    ngOnInit():void {
        this.query = this._storageService.retrieve() || new Query('San Francisco');
        this.search(this.query.val);
    }
}