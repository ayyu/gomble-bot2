import { registerCommands } from '../lib/functions/register_commands';
import { Container } from "typedi";
import GombleClient from '../services/GombleClient';

const client = Container.get(GombleClient)

client.login()
	.then(() => registerCommands(client))
	.then(() => client.destroy());
