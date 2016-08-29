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
var _ = require('lodash');
var query_1 = require('../classes/query');
var core_1 = require('@angular/core');
var api_service_1 = require('../services/api.service');
var storage_service_1 = require('../services/storage.service');
var auth_service_1 = require('../services/auth.service');
var BarsViewer = (function () {
    function BarsViewer(_apiService, _storageService, _authService) {
        this._apiService = _apiService;
        this._storageService = _storageService;
        this._authService = _authService;
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
    BarsViewer.prototype.going = function (bar) {
        return _.includes(this.user.visited, bar.id);
    };
    BarsViewer.prototype.addBar = function (id) {
        this._authService.addBar(this.user._id, id).subscribe(function (user) {
            console.log(user);
        });
    };
    BarsViewer.prototype.ngOnInit = function () {
        this.query = this._storageService.retrieve() || new query_1.Query('San Francisco');
        this.search(this.query.val);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BarsViewer.prototype, "user", void 0);
    BarsViewer = __decorate([
        core_1.Component({
            selector: 'bars-viewer',
            templateUrl: './templates/bars-viewer.component.html',
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, storage_service_1.StorageService, auth_service_1.AuthService])
    ], BarsViewer);
    return BarsViewer;
}());
exports.BarsViewer = BarsViewer;
//# sourceMappingURL=bars-viewer.component.js.map