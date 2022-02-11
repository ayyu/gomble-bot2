import { registerCommands } from '../lib/functions/register_commands';
import { container, GombleClient } from "../services/di";

const client = container.resolve(GombleClient);

client.login()
	.then(() => registerCommands(client))
	.then(() => client.destroy());
