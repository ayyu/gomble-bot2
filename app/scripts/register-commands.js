"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const register_commands_1 = require("../lib/functions/register_commands");
const typedi_1 = require("typedi");
const GombleClient_1 = __importDefault(require("../services/GombleClient"));
const client = typedi_1.Container.get(GombleClient_1.default);
client.login()
    .then(() => (0, register_commands_1.registerCommands)(client))
    .then(() => client.destroy());
//# sourceMappingURL=register-commands.js.map