"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const register_commands_1 = require("../lib/functions/register_commands");
const typedi_1 = require("typedi");
const GombleClient_1 = __importDefault(require("../services/GombleClient"));
const dotenv_1 = require("dotenv");
if (process.env.NODE_ENV != 'production')
    (0, dotenv_1.config)();
const guildId = process.env.GUILD_ID;
const client = typedi_1.Container.get(GombleClient_1.default);
client.login()
    .then(() => (0, register_commands_1.registerCommands)(client, guildId))
    .then(() => client.destroy());
//# sourceMappingURL=register-guild-commands.js.map