/**
 * Promise中间实现
 */
import _ from './util';
import EventEmitter from './event';

export default class extends EventEmitter{
  public middlewares:any[] = [];
  public ctx = {
    ItemComponent: null,
    message: {},
    conversation: {}
  }
  constructor(middlewares: any[]) {
    super();
    this.middlewares = middlewares;
  }

  useBatch(steps: any[]) {
    if (_.isArray(steps)) {
      this.middlewares = this.middlewares.concat(steps);
    } else {
      throw TypeError('useBatch must be arrary!!!')
    }
  }

  dispatch(msg: any, conversation: any) {
    let steps = Object.create(this.middlewares);
    let ctx = Object.create(this.ctx);
    ctx.conversation = conversation;
    ctx.message = msg;
    return _.promiseMiddleware(steps, ctx);
  }
}
