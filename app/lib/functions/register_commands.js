"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCommands = void 0;
const rest_1 = require("@discordjs/rest");
const commands_1 = __importDefault(require("../../commands"));
const v9_1 = require("discord-api-types/v9");
const commands = commands_1.default.map((command) => command.data.toJSON());
async function registerCommands(client, guildId = null, token = null) {
    token = token || client.token;
    if (!token || !client.user)
        return;
    const rest = new rest_1.REST({ version: '9' }).setToken(token);
    const routes = guildId
        ? v9_1.Routes.applicationGuildCommands(client.user.id, guildId)
        : v9_1.Routes.applicationCommands(client.user.id);
    return rest.put(routes, { body: commands })
        .then(() => console.log('Successfully registered commands.'))
        .catch(console.error);
}
exports.registerCommands = registerCommands;
//# sourceMappingURL=register_commands.js.map