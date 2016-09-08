import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { App } from '../components/app.component';
import { BarsViewer } from '../components/bars-viewer.component';

import { HttpModule } from '@angular/http';

import { ApiService } from '../services/api.service';
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [App, BarsViewer],
    providers: [ApiService, StorageService, AuthService],
    bootstrap: [App]
})

export class AppModule {}