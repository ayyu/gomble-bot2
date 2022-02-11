import { Collection, CommandInteraction, InteractionReplyOptions, Message } from "discord.js";

export async function collectSingleText(
	interaction: CommandInteraction
): Promise<Message<boolean> | undefined> {
	const filter = (response: Message) => response.author.id == interaction.user.id;
	if (!interaction.channel) return;
	return interaction.channel.awaitMessages({ filter, max: 1 })
		.then(collected => collected.first())
		.catch(err => {
			if (err instanceof Collection && !err.size) {
				throw new Error(`No response received.`);
			} else {
				throw err;
			}
		});
}

export async function promptSingleText(
	interaction: CommandInteraction,
	prompt: InteractionReplyOptions,
):  Promise<Message<boolean> | undefined> {
	const reply: Message = await interaction
		.followUp({...prompt, fetchReply: true })
		.then(r => r as Message);
	return collectSingleText(interaction)
		.then(async response => {
			await reply.delete();
			return response;
		});
}
