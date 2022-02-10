const { SlashCommandSubcommandBuilder } = require('@discordjs/builders');
const { Collection, Permissions } = require('discord.js');
const { DiscordCommand } = require('../../lib/classes/commands')(Collection);
/**
 * @typedef {import('discord.js').CommandInteraction} CommandInteraction
 * @typedef {import('discord.js').Guild} Guild
 * @typedef {import('discord.js').Role} Role
 * @typedef {import('discord.js').ApplicationCommandPermissionData} ApplicationCommandPermissionData
 */

module.exports = () => {
	const data = new SlashCommandSubcommandBuilder()
		.setName('role')
		.setDescription('Set which role can use a command')
		.addStringOption(option => option
			.setName('command')
			.setDescription('Command to limit access to')
			.setAutocomplete(false)
			.setRequired(true))
		.addRoleOption(option => option
			.setName('role')
			.setDescription('Which role to use')
			.setRequired(true));

	/**
 * @param {Guild} guild
 * @param {Role} role
 * @returns {Array<ApplicationCommandPermissionData>}
 */
	const buildPermissionsOptions = async (guild, role) => {
		const basePermissions = [
			{ // always allow guild owner
				id: guild.ownerId,
				type: 'USER',
				permission: true,
			},
			{
				id: role.id,
				type: 'ROLE',
				permission: true,
			},
			{ // deny public
				id: guild.roles.everyone.id,
				type: 'ROLE',
				permission: false,
			},
		];
		return guild.roles.fetch()
			.then(roles => roles.filter(adminRole => adminRole.permissions.has(Permissions.FLAGS.ADMINISTRATOR)))
			.then(adminRoles => adminRoles.map(adminRole => ({
				id: adminRole.id,
				type: 'ROLE',
				permission: true,
			}))
			.then(adminPermissions => adminPermissions.concat(basePermissions))
			.then(permissions => permissions
				.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i) // remove duplicate role IDs
			))
			.then(permissions => ({ guild, permissions }));
	};

	/** @param {CommandInteraction} interaction */
	const execute = async interaction => {
		const commandName = interaction.options.getString('command');
		const role = interaction.options.getRole('role');
		return interaction.guild.commands.fetch()
			.then(commands => commands.filter(command => command.name === commandName))
			.then(commands => commands.first())
			.then(command => {
				if (!command) throw new Error(`\`/${commandName}\` not found.`);
				console.log(`setting permissions for ${commandName}`);
				return buildPermissionsOptions(interaction.guild, role)
					.then(options => command.permissions.set(options));
			})
			.then(() => interaction.reply(`Set role for \`/${commandName}\` to ${role}`));
	};

	return new DiscordCommand(data, execute);
};