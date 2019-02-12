const { exec } = require('child_process');
const watch = require('watch');
exec('rm -rf ./build && http-server');
exec('tnpm run doc');
console.log('server start...');
watch.createMonitor('./src', (monitor) => {
    monitor.on('changed', () => {
        console.log('file change ...');
        exec('rm -rf ./build && tnpm run doc');
    })
})
