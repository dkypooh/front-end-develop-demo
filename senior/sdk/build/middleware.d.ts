import EventEmitter from './event';
export default class extends EventEmitter {
    middlewares: any[];
    ctx: {
        ItemComponent: null;
        message: {};
        conversation: {};
    };
    constructor(middlewares: any[]);
    useBatch(steps: any[]): void;
    dispatch(msg: any, conversation: any): Promise<any>;
}
