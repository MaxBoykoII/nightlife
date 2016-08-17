"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var query_1 = require('../classes/query');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var api_service_1 = require('../services/api.service');
var storage_service_1 = require('../services/storage.service');
var BarsViewer = (function () {
    function BarsViewer(_apiService, _storageService) {
        this._apiService = _apiService;
        this._storageService = _storageService;
        this.query = new query_1.Query('');
        this.bars = [];
    }
    BarsViewer.prototype.search = function (location) {
        var _this = this;
        this.query.val = location;
        this._storageService.store(this.query);
        this._apiService.fetch(location).subscribe(function (bars) {
            _this.bars = bars;
        });
    };
    BarsViewer.prototype.ngOnInit = function () {
        this.query = this._storageService.retrieve() || new query_1.Query('San Francisco');
        this.search(this.query.val);
    };
    BarsViewer = __decorate([
        core_1.Component({
            selector: 'bars',
            templateUrl: './templates/bars.viewer.html',
            providers: [http_1.HTTP_PROVIDERS, api_service_1.ApiService, storage_service_1.StorageService]
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, storage_service_1.StorageService])
    ], BarsViewer);
    return BarsViewer;
}());
exports.BarsViewer = BarsViewer;
//# sourceMappingURL=bars.viewer.js.map