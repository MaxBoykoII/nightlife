import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { BarsViewer } from '../components/bars.viewer';
import { HTTP_PROVIDERS } from '@angular/http';

import { ApiService } from '../services/api.service';

import { StorageService } from '../services/storage.service';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [BarsViewer],
    providers: [HTTP_PROVIDERS, ApiService, StorageService],
    bootstrap: [BarsViewer]
})

export class AppModule {}