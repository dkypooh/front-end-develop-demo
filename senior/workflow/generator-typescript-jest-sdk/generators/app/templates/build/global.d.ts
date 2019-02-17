export declare type ICallback = (...args: any[]) => any;
export interface IObject {
    api?: string;
    timeout?: number | string;
    v: string;
    data?: any;
}
export interface MessageObject {
    id: number | string;
}
