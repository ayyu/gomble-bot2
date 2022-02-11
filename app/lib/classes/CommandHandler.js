"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandHandler = void 0;
const discord_js_1 = require("discord.js");
class CommandHandler {
    constructor(data, execute) {
        this.data = data;
        this.execute = execute;
    }
    async run(interaction) {
        if (this.execute)
            return this.execute(interaction)
                .catch((err) => this.error(interaction, err));
    }
    async error(interaction, err) {
        return interaction.reply({
            content: err.message,
            ephemeral: true,
        }).then(() => console.error(err));
    }
    static collectCommands(commands, callback) {
        const collection = new discord_js_1.Collection();
        for (const command of commands) {
            if (callback)
                callback(command);
            collection.set(command.data.name, command);
        }
        return collection;
    }
}
exports.CommandHandler = CommandHandler;
//# sourceMappingURL=CommandHandler.js.map