import { Intents } from 'discord.js';
if (process.env.NODE_ENV != 'production') require('dotenv').config();

export const options = { intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
	] };

export const token = process.env.DISCORD_TOKEN ?? null;
