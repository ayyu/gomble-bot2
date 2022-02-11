import { CommandInteraction, Message, MessageComponentInteraction } from "discord.js";
import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandHandler } from "../lib/classes/CommandHandler";
import { isNotFromThread } from "../lib/functions/thread_channels";
import { promptSingleText } from "../lib/functions/collect_single";

const data = new SlashCommandBuilder()
	.setName('prediction')
	.setDescription('Start or manage a prediction.');

async function createPrediction(interaction: CommandInteraction): Promise<any> {
	return interaction.reply({
		content: `Starting a new prediction`,
	})
		.then(() => promptSingleText(interaction, {
			content: `Name the prediction`,
			ephemeral: true,
		}))
		.then(prompt => (prompt as Message).content)
		.then(content => interaction.editReply(content));
}

async function execute(interaction: CommandInteraction): Promise<any> {
	// if (isFromBotThread(interaction)) return managePrediction(interaction);
	if (isNotFromThread(interaction)) return createPrediction(interaction);
	throw new Error(`You can only use this command in channels and bot threads.`);
}

export default new CommandHandler(data, execute);
