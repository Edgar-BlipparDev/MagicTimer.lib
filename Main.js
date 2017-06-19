// Created by Edgars Adamovics @ London Blippar 2017

var blipp = require('blippar').blipp;
//var appIcon = blipp.setIcon('MainCoventAppIcon.png');
//scene.getPeel().setOrientation('portrait').setScale(100);
var scene = blipp.addScene('default');
scene.setScreenScaleRotate(false);
var timerLib = require('./TimerLib.js');

var mH = blipp.getMarker().getHeight();
var mW = blipp.getMarker().getWidth();
var sW = blipp.getScreenWidth() * 1.003;
var sH = blipp.getScreenHeight() * 1.003;


blipp.setAutoRequiredAssets(true);


scene.onCreate = function () {
    //Initiate CountDownTimer
};

scene.onShow = function () {

    //_CountDownTimerExample();
    _StopWatchExample();
    //_ServerTimerExample();

    
    scene.textNode = scene.getScreen().addText()
        .setWidth(sH * 800 / 2048)
        .setHeight(sH * 523 / 2048)
        .setRotation(0, 0, 0)
        .setFontSize(100 * sH / 2048 << 0)
        .setText(" ServerTime ")
        .setTextHAlign('center')
        .setTranslation(0, 0, 0)
        .setColor('#01cef3')
        .setSides('both')
        .setType('aura')
        .setAlpha(1)
        .setHidden(false)
        .setClickable(false);

    console.log(builderpattern().withHours(true).build(scene.textNode));
};


//=============================================CountDown Example ==================================================

_CountDownTimerExample = function () {

    scene.countDownTimer = scene.getScreen().addText()
        .setWidth(sH * 800 / 2048)
        .setHeight(sH * 523 / 2048)
        .setRotation(0, 0, 0)
        .setFontSize(100 * sH / 2048 << 0)
        .setText(" CoutnDownTimer ")
        .setTextHAlign('center')
        .setTranslation(0, 0, 0)
        .setColor('#01cef3')
        .setSides('both')
        .setType('aura')
        .setAlpha(1)
        .setHidden(false)
        .setClickable(false);

    scene.countDown = _CountDownTimer(scene.countDownTimer, true, _CountDowtimerFinish, true);


    //Set The Minutes and set the secodns
    scene.countDown.setMinutes(2);
    scene.countDown.setSeconds(9);

    scene.startTimerBtn = scene.getScreen().addSprite().setName("startCountdown").setTranslation(-400, 400, 0).setScale(sH * 150 / 1024, sH * 100 / 1024, 1).setClickable(true).setAlpha(1).setHidden(false);
    scene.startTimerBtn.addText('start').setColor('000000');
    scene.startTimerBtn.on('touchEnd', function (id, x, y) {
        //initiate countDownTimer
        scene.countDown.startTimer();
    });

    scene.pauseBtn = scene.getScreen().addSprite().setName("PauseTimer").setTranslation(0, 400, 0).setScale(sH * 150 / 1024, sH * 100 / 1024, 1).setClickable(true).setAlpha(1).setHidden(false);
    scene.pauseBtn.addText('Pause').setColor('000000');
    scene.pauseBtn.on('touchEnd', function (id, x, y) {

    });

    scene.stopBtn = scene.getScreen().addSprite().setName("stopTimer").setTranslation(400, 400, 0).setScale(sH * 150 / 1024, sH * 100 / 1024, 1).setClickable(true).setAlpha(1).setHidden(false);
    scene.stopBtn.addText('Stop').setColor('000000');

    scene.stopBtn.on('touchEnd', function (id, x, y) {

        scene.countDown.stopTimer();
        console.log("Minutes " + scene.countDown.getMinutes());
        console.log("Seconds " + scene.countDown.getSeconds());
    });



};
_CountDowtimerFinish = function () {
    console.log("====FINISHED DO SOMETHING====");
};
//=============================================StopWatch Example ==================================================

_StopWatchExample = function () {

    scene.startTimeText = scene.getScreen().addText()
        .setWidth(sH * 800 / 2048)
        .setHeight(sH * 523 / 2048)
        .setRotation(0, 0, 0)
        .setFontSize(100 * sH / 2048 << 0)
        .setText("StopWatch")
        .setTextHAlign('center')
        .setTranslation(0, 0, 0)
        .setColor('#01cef3')
        .setSides('both')
        .setType('aura')
        .setAlpha(1)
        .setHidden(false)
        .setClickable(false);

    //Intilise StopWatch
    //_StopWatchTimer(TextNode, displayHours bool, displayMinutes bool, displaySeconds bool, HoursToStop, MintuesToStop, SecondsToStop, logactive bool)
    scene.stopWatch = _StopWatchTimer(scene.startTimeText, true, true, true, "", "", "", true);

    //costum Overrides if needed : defaults are 0
    scene.stopWatch.setMinutes(59);
    scene.stopWatch.setSeconds(40);
    scene.stopWatch.setHours(0);

    scene.startTimerBtn = scene.getScreen().addSprite().setName("startCountdown").setTranslation(-400, 400, 0).setScale(sH * 150 / 1024, sH * 100 / 1024, 1).setClickable(true).setAlpha(1).setHidden(false);
    scene.startTimerBtn.addText('start').setColor('000000');
    scene.startTimerBtn.on('touchEnd', function (id, x, y) {
        //starts the stopwatch
        scene.stopWatch.startStopWatch();
    });

    scene.pauseBtn = scene.getScreen().addSprite().setName("PauseTimer").setTranslation(0, 400, 0).setScale(sH * 150 / 1024, sH * 100 / 1024, 1).setClickable(true).setAlpha(1).setHidden(false);
    scene.pauseBtn.addText('Pause').setColor('000000');
    scene.pauseBtn.on('touchEnd', function (id, x, y) {
        //pauses stop watch if startStopWatch called again it will resume where it left off
        scene.stopWatch.pauseStopWatch();
    });

    scene.stopBtn = scene.getScreen().addSprite().setName("stopTimer").setTranslation(400, 400, 0).setScale(sH * 150 / 1024, sH * 100 / 1024, 1).setClickable(true).setAlpha(1).setHidden(false);
    scene.stopBtn.addText('Stop').setColor('000000');
    scene.stopBtn.on('touchEnd', function (id, x, y) {
        //stops the stop watch if startStopWatch called again it will start counting from 0 unless it is overriden
        scene.stopWatch.resetStopWatch();

        console.log("Minutes " + scene.stopWatch.getMinutes());
        console.log("Seconds " + scene.stopWatch.getSeconds());

    });

};

//=============================================Server Time ==================================================
_ServerTimerExample = function () {
    // List of all available countries 
    //http://php.net/manual/en/timezones.europe.php
    //
    var countryID = "Europe/London";
    scene.serverTimerTextNode = scene.getScreen().addText()
        .setWidth(sH * 800 / 2048)
        .setHeight(sH * 523 / 2048)
        .setRotation(0, 0, 0)
        .setFontSize(100 * sH / 2048 << 0)
        .setText(" ServerTime ")
        .setTextHAlign('center')
        .setTranslation(0, 0, 0)
        .setColor('#01cef3')
        .setSides('both')
        .setType('aura')
        .setAlpha(1)
        .setHidden(false)
        .setClickable(false);

    scene.serverTimeInit = _ServerTime(_ServerTimeCallBack, countryID);


};

_ServerTimeCallBack = function (hours, minutes, seconds, year, month, day) {
    //console.log(JSON.stringify(data));
    scene.serverTimerTextNode.setText("hours " + hours + "\n" + "minutes " + minutes + "\n" + "seconds " + seconds + "\n" + "year " + year + "\n" + "month " + month + "\n" + "day " + day);


};

