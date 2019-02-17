"use strict";
/**
 * ----------------------------------
 * @file event.ts
 * @desc 事件基类
 * @author Matrix <fangbo.fb@alibaba-inc.com>
 * @create: 2018/12
 * ----------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
class EventEmitter {
    constructor() {
        this._eventMap = new Map();
    }
    /**
     * emit
     * @param {String} type  事件名称
     * @param args
     */
    emit(type, ...args) {
        if (this._eventMap.has(type)) {
            const cbs = this._eventMap.get(type);
            for (const fn of cbs) {
                fn.apply(this, args);
            }
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * off
     * @param {String} type     事件名称
     * @param {Function} fn     绑定函数
     */
    off(type, fn) {
        if (type === undefined) {
            this._eventMap.clear();
        }
        else if (this._eventMap.has(type)) {
            if (fn === undefined) {
                this._eventMap.delete(type);
            }
            else {
                const cbs = this._eventMap.get(type);
                if (cbs.length > 1) {
                    cbs.splice(cbs.indexOf(fn), 1);
                }
                else {
                    this._eventMap.delete(type);
                }
            }
        }
        return this;
    }
    /**
     * on
     * @param {String} type     事件名称
     * @param {Function} fn     绑定函数
     */
    on(type, fn) {
        if (this._eventMap.has(type)) {
            const cbs = this._eventMap.get(type);
            cbs.push(fn);
        }
        else {
            this._eventMap.set(type, [fn]);
        }
        return this;
    }
    /**
     * once
     * @param {String} type     事件名称
     * @param {Function} fn     绑定函数
     */
    once(type, fn) {
        this.on(type, (...args) => {
            this.off(type, fn);
            fn.apply(this, args);
        });
        return this;
    }
}
exports.default = EventEmitter;
