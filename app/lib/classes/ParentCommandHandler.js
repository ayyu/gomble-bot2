"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParentCommandHandler = void 0;
const CommandHandler_1 = require("./CommandHandler");
class ParentCommandHandler extends CommandHandler_1.CommandHandler {
    constructor(data, subcommands) {
        super(data);
        this.subcommands = CommandHandler_1.CommandHandler.collectCommands(subcommands, (command) => data
            .addSubcommand(command.data));
    }
    async run(interaction) {
        if (!interaction.options.getSubcommand(false))
            return;
        const subcommand = this.subcommands.get(interaction.options.getSubcommand());
        if (subcommand)
            return subcommand.run(interaction);
    }
}
exports.ParentCommandHandler = ParentCommandHandler;
//# sourceMappingURL=ParentCommandHandler.js.map