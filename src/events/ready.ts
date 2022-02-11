import { Client } from "discord.js";
import DiscordEvent from "../lib/classes/DiscordEvent";

const command: DiscordEvent = {
	name: "ready",
	once: true,
	execute: (client: Client) => {
		console.log(`Ready! Logged in as ${client.user?.tag}`);
	}
}

export default command;
