"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.uri = void 0;
if (process.env.NODE_ENV != 'production')
    require('dotenv').config();
exports.uri = (_a = process.env.DATABASE_URL) !== null && _a !== void 0 ? _a : '';
exports.options = {
    ssl: { require: true, rejectUnauthorized: false, },
};
//# sourceMappingURL=keyv.js.map