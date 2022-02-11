"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
const discord_js_1 = require("discord.js");
const CommandHandler_1 = require("../../lib/classes/CommandHandler");
const data = new builders_1.SlashCommandSubcommandBuilder()
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
async function buildPermissionsOptions(guild, role) {
    const basePermissions = [
        {
            id: guild.ownerId,
            type: 2 /* USER */,
            permission: true,
        },
        {
            id: role.id,
            type: 1 /* ROLE */,
            permission: true,
        },
        {
            id: guild.roles.everyone.id,
            type: 1 /* ROLE */,
            permission: false,
        },
    ];
    const permissions = await guild.roles.fetch()
        .then(roles => roles.filter(adminRole => adminRole.permissions.has(discord_js_1.Permissions.FLAGS.ADMINISTRATOR)))
        .then(adminRoles => adminRoles.map(adminRole => ({
        id: adminRole.id,
        type: 1 /* ROLE */,
        permission: true,
    })))
        .then(adminPermissions => adminPermissions.concat(basePermissions))
        .then(permissions => permissions
        .filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i));
    return { guild, permissions };
}
async function execute(interaction) {
    const commandName = interaction.options.getString('command');
    const role = interaction.options.getRole('role');
    if (!role || !interaction.guild)
        return;
    return interaction.guild.commands.fetch()
        .then(commands => commands.filter(command => command.name === commandName))
        .then(commands => commands.first())
        .then(async (command) => {
        if (!command)
            throw new Error(`\`/${commandName}\` not found.`);
        return buildPermissionsOptions(interaction.guild, role)
            .then(options => command.permissions.set(options));
    })
        .then(() => interaction.reply(`Set role for \`/${commandName}\` to ${role}`));
}
exports.default = new CommandHandler_1.CommandHandler(data, execute);
//# sourceMappingURL=role.js.map