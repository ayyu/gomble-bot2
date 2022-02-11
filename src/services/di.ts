import "reflect-metadata";

import { config } from "dotenv";
import { container } from "tsyringe";
import { PrismaClient } from "@prisma/client";
import { GombleClient } from "./GombleClient";
import { ClientOptions } from "discord.js";

import { options } from "../config/discord_client";

if (process.env.NODE_ENV != "production") config();
const token = process.env.DISCORD_TOKEN as string;
const guildId = process.env.GUILD_ID as string;

container.registerInstance<string>("guildId", guildId);
container.registerInstance<ClientOptions>("clientOptions", options);
container.registerInstance<string>("discordToken", token);

container.registerSingleton(GombleClient);
container.registerSingleton(PrismaClient);

export {
	container,
	GombleClient, PrismaClient
};
