"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const middleware_1 = __importDefault(require("./middleware"));
class default_1 extends middleware_1.default {
    constructor(middlewares) {
        super(middlewares);
    }
}
exports.default = default_1;
