import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { BarsViewer } from '../components/bars.viewer';
import { HTTP_PROVIDERS } from '@angular/http';

import { ApiService } from '../services/api.service';
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [BarsViewer],
    providers: [HTTP_PROVIDERS, ApiService, StorageService, AuthService],
    bootstrap: [BarsViewer]
})

export class AppModule {}