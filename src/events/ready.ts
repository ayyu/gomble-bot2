import { Client } from "discord.js";
import DiscordEvent from '../lib/classes/DiscordEvent';

export default new DiscordEvent('ready', true, (client: Client) => {
	console.log(`Ready! Logged in as ${client.user?.tag}`);
});
