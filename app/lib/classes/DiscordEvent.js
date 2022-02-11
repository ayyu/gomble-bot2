"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DiscordEvent {
    constructor(name, once = false, execute) {
        this.name = name;
        this.once = once;
        this.execute = execute;
    }
}
exports.default = DiscordEvent;
//# sourceMappingURL=DiscordEvent.js.map