"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DiscordEvent_1 = __importDefault(require("../lib/classes/DiscordEvent"));
exports.default = new DiscordEvent_1.default('ready', true, (client) => {
    var _a;
    console.log(`Ready! Logged in as ${(_a = client.user) === null || _a === void 0 ? void 0 : _a.tag}`);
});
//# sourceMappingURL=ready.js.map