import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { App } from '../components/app.component';
import { BarsViewer } from '../components/bars-viewer.component';

import { HTTP_PROVIDERS } from '@angular/http';

import { ApiService } from '../services/api.service';
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [App, BarsViewer],
    providers: [HTTP_PROVIDERS, ApiService, StorageService, AuthService],
    bootstrap: [App]
})

export class AppModule {}