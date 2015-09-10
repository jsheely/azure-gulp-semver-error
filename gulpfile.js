var gulp = require('gulp');
var exec = require('child_process').exec;
var path = require('path');

var env = process.env.NODE_ENV || 'development';
var config = {
    restApi: {
        development: 'http://localhost:3001',
        staging: '',
        production: ''
    }
}
gulp.task('default', ['ng']);
gulp.task('ng', function (cb) {

    var url;
    switch (env) {
        case 'development':
            url = config.restApi.development;
            break;
        case 'staging':
            url = config.restApi.staging;
            break;
        case 'production':
            url = config.restApi.production;
            break;
    }


    exec('cd node_modules/.bin && lb-ng -u ' + url + ' ../../server/server.js ../../client/lb-services.module.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);  // finished task
    });



});
