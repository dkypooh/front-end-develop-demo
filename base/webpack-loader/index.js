const json = require('./package.json')
const tpl = require('./index.tpl');

document.write(JSON.stringify(json));
document.body.innerHTML += tpl;
