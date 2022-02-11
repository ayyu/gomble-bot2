import { registerCommands } from '../lib/functions/register_commands';
import { Container } from "typedi";
import GombleClient from '../services/GombleClient';
import { config } from "dotenv";

if (process.env.NODE_ENV != 'production') config();
const guildId = process.env.GUILD_ID;

const client = Container.get(GombleClient)

client.login()
	.then(() => registerCommands(client, guildId))
	.then(() => client.destroy());
