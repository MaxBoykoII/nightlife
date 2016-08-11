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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var api_service_1 = require('../services/api.service');
var BarsViewer = (function () {
    function BarsViewer(_apiService) {
        this._apiService = _apiService;
        this.bars = [];
    }
    BarsViewer.prototype.ngOnInit = function () {
        var _this = this;
        this._apiService.fetch().subscribe(function (data) {
            _this.bars = data;
            console.log(_this.bars);
        });
    };
    BarsViewer = __decorate([
        core_1.Component({
            selector: 'bars',
            templateUrl: './templates/bars.viewer.html',
            providers: [http_1.HTTP_PROVIDERS, api_service_1.ApiService]
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], BarsViewer);
    return BarsViewer;
}());
exports.BarsViewer = BarsViewer;
//# sourceMappingURL=bars.viewer.js.map