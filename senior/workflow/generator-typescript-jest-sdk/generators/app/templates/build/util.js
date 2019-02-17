"use strict";
/**
 * ----------------------------------
 * @file util.ts
 * @desc 函数类
 * @create: 2019/02
 * ----------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
const isArray = (object) => {
    return Object.prototype.toString.call(object).substr(8, 5) === 'Array';
};
exports.isArray = isArray;
const isObject = (object) => {
    return Object.prototype.toString.call(object).substr(8, 6) === 'Object';
};
exports.isObject = isObject;
const isString = (object) => {
    return Object.prototype.toString.call(object).substr(8, 6) === 'String';
};
exports.isString = isString;
const getQueryParam = (qs) => {
    qs = qs.split('+').join(' ');
    let params = {};
    let tokens;
    let re = /[?&]?([^=]+)=([^&]*)/g;
    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    return params;
};
exports.getQueryParam = getQueryParam;
const getQueryParamByName = (url, name) => {
    if (!url)
        url = location && location.search;
    const match = RegExp('[?&]' + name + '=([^&]*)').exec(url);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
};
exports.getQueryParamByName = getQueryParamByName;
const promiseMiddleware = (middlewares, ctx) => {
    let promise = Promise.resolve(null);
    let next;
    // 将ctx绑定到每个方法的this以及第一个参数
    middlewares.forEach((fn, i) => {
        middlewares[i] = fn.bind(null, ctx);
    });
    while ((next = middlewares.shift())) {
        promise = promise.then(next);
    }
    return promise.then(() => {
        return ctx;
    });
};
exports.promiseMiddleware = promiseMiddleware;
const addStyle = (styleString) => {
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = styleString;
    document.getElementsByTagName('head')[0].appendChild(style);
};
exports.addStyle = addStyle;
const objectMapQuery = (obj) => {
    let ret = [];
    for (let key in obj) {
        ret.push(`${key}=${obj[key]}`);
    }
    return ret.join('&');
};
exports.objectMapQuery = objectMapQuery;
exports.default = {
    isArray,
    isObject,
    isString,
    getQueryParam,
    getQueryParamByName,
    promiseMiddleware,
    addStyle,
    objectMapQuery
};
