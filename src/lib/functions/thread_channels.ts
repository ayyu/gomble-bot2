import { Interaction, Message } from "discord.js";

export function isFromBotThread(model: Message | Interaction): boolean {
	return !model.channel
		|| (model.channel.isThread()
			&& model.channel.ownerId == model.client.user?.id);
}

export function isNotFromThread(model: Message | Interaction): boolean {
	return !model.channel?.isThread();
}
