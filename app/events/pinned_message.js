"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DiscordEvent_1 = __importDefault(require("../lib/classes/DiscordEvent"));
exports.default = new DiscordEvent_1.default('messageCreate', false, async (message) => {
    var _a;
    if (((_a = message.client.user) === null || _a === void 0 ? void 0 : _a.id)
        && message.author.id == message.client.user.id
        && message.type == 'CHANNEL_PINNED_MESSAGE') {
        return message.delete();
    }
});
//# sourceMappingURL=pinned_message.js.map