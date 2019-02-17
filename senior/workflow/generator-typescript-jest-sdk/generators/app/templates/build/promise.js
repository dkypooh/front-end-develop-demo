"use strict";
/**
 * ----------------------------------
 * @file promise.ts
 * @desc Promise基础类封装
 * @create: 2019/02
 * ----------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resolved = Promise.resolve();
/**
 * Promise Deferred
 */
class Deferred {
    constructor() {
        const p = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
        this.then = p.then.bind(p);
        this.catch = p.catch.bind(p);
    }
}
exports.Deferred = Deferred;
exports.promiseQueue = (list) => {
    let resolved = Promise.resolve({});
    list.forEach((fn, index) => {
        if (typeof fn !== 'function')
            throw new TypeError('Promise cell must be function');
        resolved = resolved.then((context) => fn(context));
    });
    return resolved;
};
