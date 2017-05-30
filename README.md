# MagicTimer.lib

## Synopsis
Blippar JS extension timer Library that has countdown-timer, stopwatch-timer and allows to get server time, including year, month and date.

## Usage
```JavaScript
var scene = blipp.addScene('default');
   require('./TimerLib.js');
```  
## Initialization

### Description
Ideally you would want to initialize after you have created a text node since you will need to pass it into countdown timer or stopwatch timer. Server timer doesn't rely on models, all it needs is call-back function that will return current time and date from server.
<br><br>
 To initialise countdown timer.<br><br>
 **Example:**
```JavaScript
    scene.countDown = _CountDownTimer(scene.countDownTimer, true, _CountDowtimercallback, true);
```
To initialise stopwatch timer.<br><br>
**Example:**
```JavaScript
    scene.stopWatch = _StopWatchTimer(scene.startTimeText, true, true, true, "", "", "", true);
```
To initialise servertimer.<br><br>
**Example:**
```JavaScript
    scene.serverTimeInit = _ServerTime(_ServerTimeCallBack, countryID);
```
<br>
## CountDown Timer Commands

Sets the minutes for countdown timer to count down.<br><br>
**Example:**
```JavaScript
    scene.countDown.setMinutes(2);
```
Sets the seconds for countdown timer to count down.<br><br>
**Example:**
```JavaScript
    scene.countDown.setSeconds(9);
```
Gets the current Minutes.<br><br>
**Example:**
```JavaScript
    scene.countDown.getMinutes();
```
Gets the current Seconds.<br><br>
**Example:**
```JavaScript
    scene.countDown.getSeconds();
```
Starts the timer.<br><br>
**Example:**
```JavaScript
   scene.countDown.startTimer();
```
Stops the timer.<br><br>
**Example:**
```JavaScript
   scene.countDown.stopTimer();
```
## StopWatch Timer Commands

Gets the stopwatch current hours.<br><br>
**Example:**:
```JavaScript
scene.stopWatch.getHours();
```
Gets the stopwatch current minutes.<br><br>
**Example:**
```JavaScript
scene.stopWatch.getMinutes();
```
Gets the stopwatch current seconds.<br><br>
**Example:**
```JavaScript
scene.stopWatch.getSeconds();
```
Overrides stopwatch start minutes.<br><br>
**Example:**
```JavaScript
scene.stopWatch.setMinutes(59);
```
<br>
Overrides stopwatch start seconds.<br><br>
**Example:**:
```JavaScript
scene.stopWatch.setSeconds(40);
```
Overrides stop watch Start hours.<br><br>
**Example:**
```JavaScript
scene.stopWatch.setHours(0);
```
Starts the stop watch: Starts the stop watch from default 0 unless overrides are called before that allows to change starting point.
**Example:**
```JavaScript
scene.stopWatch.startStopWatch();
```
Resets the stopwatch. Note reseting stop watch will stop it and reset values to 0 unless overrides are decleared before.<br><br>
**Example:**
```JavaScript
scene.stopWatch.resetStopWatch();
```
Pauses the stop watch. Note stoping stopwatch will put in pause state if start stop watch is called again it will resume.<br><br>
**Example:**
```JavaScript
scene.stopWatch.pauseStopWatch();
```
<br>


## Server Timer Commands

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
