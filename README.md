# MagicTimer.lib

## Synopsis
Blippar JS extension timer Library that has countdown-timer, stopwatch-timer and allows to get server time, including year, month and date.

## Usage
```JavaScript
var scene = blipp.addScene('default');
   require('./TimerLib.js');
```  
## Initialization

###### Description
Idealy you would want to initialise after you have created a text node since you will need to pass it into Coundown Timer or StopWatch timer. Server timer doesnt rely on models all it needs is callback function.

 To initialise countDown Timer:
```
    scene.countDown = _CountDownTimer(scene.countDownTimer, true, _CountDowtimercallback, true);
```
To initialise stopWatch Timer:
```
    scene.stopWatch = _StopWatchTimer(scene.startTimeText, true, true, true, "", "", "", true);
```
To initialise server Timer:
```
    scene.serverTimeInit = _ServerTime(_ServerTimeCallBack, countryID);
```

## CountDown Timer Commands

Sets the minutes for countdown timer to count down:
```
    scene.countDown.setMinutes(2);
```
Sets the seconds for countdown timer to count down:
```
    scene.countDown.setSeconds(9);
```
Gets the current Minutes:
```
    scene.countDown.getMinutes();
```
Gets the current Seconds:
```
    scene.countDown.getSeconds();
```
Starts the timer:
```
   scene.countDown.startTimer();
```
Stops the timer:
```
   scene.countDown.stopTimer();
```
## StopWatch Timer Commands

Starts the stop watch:
```
  scene.stopWatch.startStopWatch();
```
Resets the stopwatch:
```
  scene.stopWatch.resetStopWatch();

```
Pauses the stop watch
```
  scene.stopWatch.pauseStopWatch();
```


To get Server Timer
``` scene.countDown.setMinutes(2);
    scene.countDown.setSeconds(9);```
    
 To start the timer use:
 '''scene.countDown.startTimer();'''
 
 To stop the timer use:
 '''scene.countDown.stopTimer();'''

# Current Limitation



# Motivation

Wanted to have quick timmer I could just plug in and use.

### Author
[Jeff Kershaw]
