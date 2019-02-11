/**
 * ----------------------------------
 * @file event.ts
 * @desc 事件基类
 * @author Matrix <fangbo.fb@alibaba-inc.com>
 * @create: 2018/12
 * ----------------------------------
 */
import { ICallback } from "./global";
export default class EventEmitter {
    private _eventMap;
    /**
     * emit
     * @param {String} type  事件名称
     * @param args
     */
    emit(type: string, ...args: any[]): boolean;
    /**
     * off
     * @param {String} type     事件名称
     * @param {Function} fn     绑定函数
     */
    off(type?: string, fn?: ICallback): this;
    /**
     * on
     * @param {String} type     事件名称
     * @param {Function} fn     绑定函数
     */
    on(type: string, fn: ICallback): this;
    /**
     * once
     * @param {String} type     事件名称
     * @param {Function} fn     绑定函数
     */
    once(type: string, fn: ICallback): this;
}
