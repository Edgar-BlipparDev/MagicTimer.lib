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
Ideally you would want to initialize after you have created a text node since you will need to pass it into countdown timer or stopwatch timer. Server timer doesn't rely on models, all it needs is callback function that will rerun current time and date from server.
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
<br>
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
<br>
Sets the seconds for countdown timer to count down.<br><br>
**Example:**
```JavaScript
    scene.countDown.setSeconds(9);
```
<br>
Gets the current Minutes.<br><br>
**Example:**
```JavaScript
    scene.countDown.getMinutes();
```
<br>
Gets the current Seconds.<br><br>
**Example:**
```JavaScript
    scene.countDown.getSeconds();
```
<br>
Starts the timer.<br><br>
**Example:**
```JavaScript
   scene.countDown.startTimer();
```
<br>
Stops the timer.<br><br>
**Example:**
```JavaScript
   scene.countDown.stopTimer();
```
<br>
## StopWatch Timer Commands

Gets the stopwatch current hours.<br><br>
**Example:**:
```JavaScript
scene.stopWatch.getHours();
```
<br>
Gets the stopwatch current minutes.<br><br>
**Example:**
```JavaScript
scene.stopWatch.getMinutes();
```
<br>
Gets the stopwatch current seconds.<br><br>
**Example:**
```JavaScript
scene.stopWatch.getSeconds();
```
<br>
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
<br>
Overrides stop watch Start hours.<br><br>
**Example:**
```JavaScript
scene.stopWatch.setHours(0);
```
<br>
Starts the stop watch: Starts the stop watch from default 0 unless overrides are called before that allows to change starting point.
**Example:**
```JavaScript
scene.stopWatch.startStopWatch();
```
<br>
Resets the stopwatch. Note reseting stop watch will stop it and reset values to 0 unless overrides are decleared before.<br><br>
**Example:**
```JavaScript
scene.stopWatch.resetStopWatch();
```
<br>
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
