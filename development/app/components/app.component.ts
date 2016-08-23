import { Component } from '@angular/core';

import { BarsViewer } from './bars-viewer.component';

import { AuthService } from '../services/auth.service';

import { User } from '../interfaces/user-interface';



@Component({
    selector:  'bar-app',
    templateUrl: './templates/app.component.html'
})

export class App {
    user: User;
    constructor(private _authService: AuthService) {
        this.user = {authenticated: false};
    }
    ngOnInit() {
        this._authService.fetch().subscribe((user: User) => {
            this.user = user;
            console.log(this.user);
        });
    }
}