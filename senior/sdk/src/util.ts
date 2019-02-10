/**
 * ----------------------------------
 * @file util.ts
 * @desc 函数类
 * @create: 2019/02
 * ----------------------------------
 */

declare var document: any;

const isArray = (object: object) => {
  return Object.prototype.toString.call(object).substr(8, 5) === 'Array';
};

const isObject = (object: object) => {
  return Object.prototype.toString.call(object).substr(8, 6) === 'Object';
};

const isString = (object: object) => {
  return Object.prototype.toString.call(object).substr(8, 6) === 'String';
};

const getQueryParam = (qs: string) => {
  qs = qs.split('+').join(' ');
  let params:any = {};
  let tokens;
  let re = /[?&]?([^=]+)=([^&]*)/g;
  while (tokens = re.exec(qs)) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }
  return params;
}

const getQueryParamByName = (url: string, name: string) => {
  if (!url) url = location && location.search
  const match = RegExp('[?&]' + name + '=([^&]*)').exec(url)
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
}

const promiseMiddleware = (middlewares: any[], ctx: any) => {
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
}

const addStyle =  (styleString: string) => {
  let style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = styleString;
  document.getElementsByTagName('head')[0].appendChild(style);
};

const objectMapQuery = (obj: any) => {
  let ret = [];
  for (let key in obj) {
    ret.push(`${key}=${obj[key]}`);
  }

  return ret.join('&');
}


export {
  isArray,
  isObject,
  isString,
  getQueryParam,
  getQueryParamByName,
  promiseMiddleware,
  addStyle,
  objectMapQuery
}

export default {
  isArray,
  isObject,
  isString,
  getQueryParam,
  getQueryParamByName,
  promiseMiddleware,
  addStyle,
  objectMapQuery
}
