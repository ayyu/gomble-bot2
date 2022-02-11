"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typedi_1 = require("typedi");
const commands_1 = __importDefault(require("./commands"));
const events_1 = __importDefault(require("./events"));
const CommandHandler_1 = require("./lib/classes/CommandHandler");
const GombleClient_1 = __importDefault(require("./services/GombleClient"));
const client = typedi_1.Container.get(GombleClient_1.default);
client.commands = CommandHandler_1.CommandHandler.collectCommands(commands_1.default);
for (const event of events_1.default) {
    const callback = (event.once ? client.once : client.on).bind(client);
    callback(event.name, (...args) => event.execute(...args));
}
client.login();
//# sourceMappingURL=index.js.map