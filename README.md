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

 To initialise countdown timer.\\
 Eaxample:
```JavaScript
    scene.countDown = _CountDownTimer(scene.countDownTimer, true, _CountDowtimercallback, true);
```
To initialise stopwatch timer.
Eaxample:
```JavaScript
    scene.stopWatch = _StopWatchTimer(scene.startTimeText, true, true, true, "", "", "", true);
```
To initialise servertimer.
Example:
```JavaScript
    scene.serverTimeInit = _ServerTime(_ServerTimeCallBack, countryID);
```

## CountDown Timer Commands

Sets the minutes for countdown timer to count down.
Eaxample:
```JavaScript
    scene.countDown.setMinutes(2);
```
Sets the seconds for countdown timer to count down.
Eaxample:
```JavaScript
    scene.countDown.setSeconds(9);
```
Gets the current Minutes.
Eaxample:
```JavaScript
    scene.countDown.getMinutes();
```
Gets the current Seconds.
Eaxample:
```JavaScript
    scene.countDown.getSeconds();
```
Starts the timer.
Eaxample:
```JavaScript
   scene.countDown.startTimer();
```
Stops the timer.
Eaxample:
```JavaScript
   scene.countDown.stopTimer();
```

## StopWatch Timer Commands

Gets the stopwatch current hours.
Eaxample:
   ```JavaScript
   scene.stopWatch.getHours();
   ```
Gets the stopwatch current minutes.
Eaxample:
   ```JavaScript
   scene.stopWatch.getMinutes();
   ```
Gets the stopwatch current seconds.
Eaxample:
   ```JavaScript
   scene.stopWatch.getSeconds();
   ```
Overrides stopwatch start minutes.
Eaxample:
   ```JavaScript
   scene.stopWatch.setMinutes(59);
   ```
Overrides stopwatch start seconds.
Eaxample:
   ```JavaScript
   scene.stopWatch.setSeconds(40);
   ```
Overrides stop watch Start hours.
Eaxample:
 ```JavaScript
 scene.stopWatch.setHours(0);
 ```
Starts the stop watch: Starts the stop watch from default 0 unless overrides are called before that allows to change starting point.
Eaxample:
```JavaScript
  scene.stopWatch.startStopWatch();
```
Resets the stopwatch. Note reseting stop watch will stop it and reset values to 0 unless overrides are decleared before.
Eaxample:
```JavaScript
  scene.stopWatch.resetStopWatch();
```
Pauses the stop watch. Note stoping stopwatch will put in pause state if start stop watch is called again it will resume.
Eaxample:
```JavaScript
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
