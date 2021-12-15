"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.isDev = exports.Message = void 0;
var Message;
(function (Message) {
    Message["FileChange"] = "file-change";
    Message["Reload"] = "reload";
})(Message = exports.Message || (exports.Message = {}));
exports.isDev = process.env.NODE_ENV === 'development';
exports.PORT = (_a = process.env.MV3_HOT_RELOAD_PORT) !== null && _a !== void 0 ? _a : 9012;
