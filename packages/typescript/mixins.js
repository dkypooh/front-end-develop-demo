function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
var FrontEndEngineer = /** @class */ (function () {
    function FrontEndEngineer() {
    }
    FrontEndEngineer.prototype.isKnowWeex = function (level) {
        return level > 8;
    };
    return FrontEndEngineer;
}());
var ServerEngineer = /** @class */ (function () {
    function ServerEngineer() {
    }
    ServerEngineer.prototype.isKnowEggjs = function (level) {
        return level > 8;
    };
    return ServerEngineer;
}());
var Engineer = /** @class */ (function () {
    function Engineer() {
        this.html = true;
        this.sql = true;
        this.css = true;
    }
    return Engineer;
}());
applyMixins(Engineer, [FrontEndEngineer, ServerEngineer]);
var my = new Engineer();
console.log('my kills:', my.css, my.html, my.sql);
console.log('weex level:', my.isKnowWeex(9));
console.log('eggjs level:', my.isKnowEggjs(6));
