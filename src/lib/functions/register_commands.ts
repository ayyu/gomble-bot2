import { REST } from "@discordjs/rest";
import { Client } from "discord.js";
import { ICommandHandler } from "../classes/ICommandHandler";
import commandHandlers from "../../commands";
import { Routes } from 'discord-api-types/v9';

const commands = commandHandlers.map(
	(command: ICommandHandler) => command.data.toJSON());

export async function registerCommands(
	client: Client,
	guildId: string | null = null,
	token: string | null = null,
): Promise<void> {
	token = token || client.token;
	if (!token || !client.user)
		return;
	const rest: REST = new REST({ version: '9' }).setToken(token);
	const routes = guildId
		? Routes.applicationGuildCommands(client.user.id, guildId)
		: Routes.applicationCommands(client.user.id);
	return rest.put(routes, { body: commands })
		.then(() => console.log('Successfully registered commands.'))
		.catch(console.error);
}
