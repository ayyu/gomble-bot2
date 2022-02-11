"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = __importDefault(require("typedi"));
const DiscordEvent_1 = __importDefault(require("../lib/classes/DiscordEvent"));
const GombleClient_1 = __importDefault(require("../services/GombleClient"));
const client = typedi_1.default.get(GombleClient_1.default);
exports.default = new DiscordEvent_1.default('interactionCreate', false, async (interaction) => {
    if (!interaction.isCommand())
        return;
    const command = client.commands.get(interaction.commandName);
    if (command)
        return command.run(interaction);
});
//# sourceMappingURL=slash_command.js.map