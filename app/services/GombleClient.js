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
const discord_js_1 = require("discord.js");
const discord_client_1 = require("../config/discord_client");
const typedi_1 = require("typedi");
let GombleClient = class GombleClient extends discord_js_1.Client {
    constructor() {
        super(discord_client_1.options);
        this.token = discord_client_1.token;
        this.commands = new discord_js_1.Collection();
    }
};
GombleClient = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [])
], GombleClient);
exports.default = GombleClient;
//# sourceMappingURL=GombleClient.js.map