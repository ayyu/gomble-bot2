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
Object.defineProperty(exports, "__esModule", { value: true });
const Keyv = require("keyv");
const typedi_1 = require("typedi");
const keyv_1 = require("../config/keyv");
let Keyvs = class Keyvs {
    constructor() {
        this.channel = new Keyv(keyv_1.uri, { ...keyv_1.options, namespace: 'channel' });
    }
};
Keyvs = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [])
], Keyvs);
exports.default = Keyvs;
//# sourceMappingURL=Keyvs.js.map