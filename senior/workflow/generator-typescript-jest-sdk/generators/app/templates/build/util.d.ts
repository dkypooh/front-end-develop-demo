/**
 * ----------------------------------
 * @file util.ts
 * @desc 函数类
 * @create: 2019/02
 * ----------------------------------
 */
declare const isArray: (object: object) => boolean;
declare const isObject: (object: object) => boolean;
declare const isString: (object: object) => boolean;
declare const getQueryParam: (qs: string) => any;
declare const getQueryParamByName: (url: string, name: string) => string | null;
declare const promiseMiddleware: (middlewares: any[], ctx: any) => Promise<any>;
declare const addStyle: (styleString: string) => void;
declare const objectMapQuery: (obj: any) => string;
export { isArray, isObject, isString, getQueryParam, getQueryParamByName, promiseMiddleware, addStyle, objectMapQuery };
declare const _default: {
    isArray: (object: object) => boolean;
    isObject: (object: object) => boolean;
    isString: (object: object) => boolean;
    getQueryParam: (qs: string) => any;
    getQueryParamByName: (url: string, name: string) => string | null;
    promiseMiddleware: (middlewares: any[], ctx: any) => Promise<any>;
    addStyle: (styleString: string) => void;
    objectMapQuery: (obj: any) => string;
};
export default _default;
