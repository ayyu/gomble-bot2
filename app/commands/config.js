"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
const ParentCommandHandler_1 = require("../lib/classes/ParentCommandHandler");
const config_1 = __importDefault(require("./config/"));
const data = new builders_1.SlashCommandBuilder()
    .setName('config')
    .setDescription('Commands for configuring this bot');
exports.default = new ParentCommandHandler_1.ParentCommandHandler(data, config_1.default);
//# sourceMappingURL=config.js.map