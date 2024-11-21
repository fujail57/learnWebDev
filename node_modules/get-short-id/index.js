"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nanoid_1 = require("nanoid");
function getId(options) {
    let prefix = options?.prefix || "";
    let chars = options?.chars ||
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_";
    let count = options?.count || 14;
    // some math to check probability of collision
    // https://zelark.github.io/nano-id-cc/
    return `${prefix}${(0, nanoid_1.customAlphabet)(chars, count)()}`;
}
exports.default = getId;
