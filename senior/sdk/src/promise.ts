/**
 * ----------------------------------
 * @file promise.ts
 * @desc Promise基础类封装
 * @create: 2019/02
 * ----------------------------------
 */

const resolved = Promise.resolve()

/**
 * Promise Deferred
 */
export class Deferred {
  private resolve: any
  private reject: any
  private then: any
  private catch: any
  constructor() {
    const p = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
    this.then = p.then.bind(p);
    this.catch = p.catch.bind(p);
  }
}

export const promiseQueue = (list: ((...args: any[]) => any)[]):Promise<any> => {
  let resolved = Promise.resolve({});
  list.forEach((fn: any, index: number) => {
    if (typeof fn !== 'function') throw new TypeError('Promise cell must be function');
    resolved = resolved.then((context: object) => fn(context))
  })
  return resolved;
}
