const { SlashCommandBuilder } = require('@discordjs/builders');
const { Collection } = require('discord.js');
const { DiscordParentCommand } = require('../models/discord/commands')(Collection);

module.exports = keyvs => {
	const data = new SlashCommandBuilder()
		.setName('config')
		.setDescription('Commands for configuring this bot');
	const subcommands = require(`./${data.name}/`)(keyvs);
	return new DiscordParentCommand(data, null, subcommands);
};
