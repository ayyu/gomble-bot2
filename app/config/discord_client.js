"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.token = exports.options = void 0;
const discord_js_1 = require("discord.js");
if (process.env.NODE_ENV != 'production')
    require('dotenv').config();
exports.options = { intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
    ] };
exports.token = (_a = process.env.DISCORD_TOKEN) !== null && _a !== void 0 ? _a : null;
//# sourceMappingURL=discord_client.js.map