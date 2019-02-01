function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
          derivedCtor.prototype[name] = baseCtor.prototype[name];
      });
  });
}

class FrontEndEngineer {
	html: boolean
  css: boolean
  isKnowWeex (level:number):boolean {
    return level > 8
  }
}

class ServerEngineer {
	sql: boolean
  isKnowEggjs (level:number):boolean {
    return level > 8
  }
}

class Engineer implements FrontEndEngineer, ServerEngineer {
  html: boolean = true
  sql: boolean = true
  css: boolean = true
  isKnowWeex: (level: number) => boolean
  isKnowEggjs: (level: number) => boolean
}


applyMixins(Engineer, [FrontEndEngineer, ServerEngineer]);
const my = new Engineer();

console.log('my kills:', my.css, my.html, my.sql);
console.log('weex level:', my.isKnowWeex(9));
console.log('eggjs level:', my.isKnowEggjs(6));
