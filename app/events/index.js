"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ready_1 = __importDefault(require("./ready"));
const pinned_message_1 = __importDefault(require("./pinned_message"));
const slash_command_1 = __importDefault(require("./slash_command"));
exports.default = [
    ready_1.default,
    pinned_message_1.default,
    slash_command_1.default
];
//# sourceMappingURL=index.js.map