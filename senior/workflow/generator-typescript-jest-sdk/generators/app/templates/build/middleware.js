"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Promise中间实现
 */
const util_1 = __importDefault(require("./util"));
const event_1 = __importDefault(require("./event"));
class default_1 extends event_1.default {
    constructor(middlewares) {
        super();
        this.middlewares = [];
        this.ctx = {
            ItemComponent: null,
            message: {},
            conversation: {}
        };
        this.middlewares = middlewares;
    }
    useBatch(steps) {
        if (util_1.default.isArray(steps)) {
            this.middlewares = this.middlewares.concat(steps);
        }
        else {
            throw TypeError('useBatch must be arrary!!!');
        }
    }
    dispatch(msg, conversation) {
        let steps = Object.create(this.middlewares);
        let ctx = Object.create(this.ctx);
        ctx.conversation = conversation;
        ctx.message = msg;
        return util_1.default.promiseMiddleware(steps, ctx);
    }
}
exports.default = default_1;
