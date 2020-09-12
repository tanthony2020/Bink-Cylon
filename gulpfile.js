/// <binding AfterBuild='deploy' />
var gulp = require('gulp');
var Candyman = require('candyman');

var candyman = new Candyman({
    targetDevices: [
        { devicename: '', hostname: ''}
    ],
    projectName: 'blink-cylon',
    user: '',
    password: '',
    startFile: 'app.js'
});
gulp.task('deploy', function () {
    console.log('running deploy');
   return candyman.deploy();
});
