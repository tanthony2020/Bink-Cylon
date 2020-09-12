# Blink-Cylon
My first IoT project.

This will make an led light blink every one second on Raspberry PI 4. This is for the purposes of learning.

You will also have to create a gulpfile.js.

To do this... 

type touch gulp.js in the directory where these files are located.
Edit this file and add the following.
/// <binding AfterBuild='deploy' />
var gulp = require('gulp');
var Candyman = require('candyman');

var candyman = new Candyman({
    targetDevices: [
        { devicename: '{your device name}', hostname: '{your hostname}'}
    ],
    projectName: 'blink-cylon',
    user: '{your username}',
    password: '{your password}',
    startFile: 'app.js'
});
gulp.task('deploy', function () {
    console.log('running deploy');
   return candyman.deploy();
});


npm install to install gulp, candyman, cylon and cylon-raspi

Note, cylon-raspi will only install on the Raspberry PI device. It will not install on your local machine.
