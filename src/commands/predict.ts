import { CommandInteraction, Message, MessageComponentInteraction } from "discord.js";
import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageActionRow, Constants } from 'discord.js';
import { choices } from '../config/bets';
import { CommandHandler } from "../lib/classes/CommandHandler";

const data = new SlashCommandBuilder()
	.setName('predict')
	.setDescription('Predict with points. Win back more if your prediction is correct.');

async function execute(interaction: CommandInteraction): Promise<any> {

	const choiceRow = new MessageActionRow()
		.addComponents(
			choices.map((choice) => ({
				type: Constants.MessageComponentTypes.BUTTON,
				customId: choice.value,
				label: choice.label,
				style: Constants.MessageButtonStyles[choice.dbValue ? 'SUCCESS' : 'DANGER'],
			}))
		);
	return interaction.reply({
		content: `Place a bet`,
		components: [choiceRow],
		ephemeral: true,
		fetchReply: true,
	})
		.then(reply => (reply as Message).awaitMessageComponent({
			filter: (i: MessageComponentInteraction) => i.user.id == interaction.user.id,
			componentType: Constants.MessageComponentTypes.BUTTON,
		}))
		.then(i => interaction.editReply({
			content: `Placing a bet on: ${i?.customId}`,
			components: [],
		}));
}

export default  new CommandHandler(data, execute);

