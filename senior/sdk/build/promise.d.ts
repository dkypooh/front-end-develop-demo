/**
 * ----------------------------------
 * @file promise.ts
 * @desc Promise基础类封装
 * @create: 2019/02
 * ----------------------------------
 */
/**
 * Promise Deferred
 */
export declare class Deferred {
    private resolve;
    private reject;
    private then;
    private catch;
    constructor();
}
export declare const promiseQueue: (list: ((...args: any[]) => any)[]) => Promise<any>;
