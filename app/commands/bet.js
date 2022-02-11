"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
const discord_js_1 = require("discord.js");
const bets_1 = require("../config/bets");
const CommandHandler_1 = require("../lib/classes/CommandHandler");
const data = new builders_1.SlashCommandBuilder()
    .setName('bet')
    .setDescription('Place or raise your bet.');
async function execute(interaction) {
    interaction.user;
    const choiceRow = new discord_js_1.MessageActionRow()
        .addComponents(bets_1.choices.map((choice) => ({
        type: discord_js_1.Constants.MessageComponentTypes.BUTTON,
        customId: choice.value,
        label: choice.label,
        style: discord_js_1.Constants.MessageButtonStyles[choice.dbValue ? 'SUCCESS' : 'DANGER'],
    })));
    return interaction.reply({
        content: `Place a bet`,
        components: [choiceRow],
        ephemeral: true,
        fetchReply: true,
    })
        .then(reply => reply.awaitMessageComponent({
        filter: (i) => i.user.id == interaction.user.id,
        componentType: discord_js_1.Constants.MessageComponentTypes.BUTTON,
    }))
        .then(i => interaction.editReply({
        content: `Placing a bet on: ${i === null || i === void 0 ? void 0 : i.customId}`,
        components: [],
    }));
}
exports.default = new CommandHandler_1.CommandHandler(data, execute);
//# sourceMappingURL=bet.js.map