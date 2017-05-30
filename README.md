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
 **To initialise countdown timer.**<br>
 *Example:*
```JavaScript
    scene.countDown = _CountDownTimer(scene.countDownTimer, true, _CountDowtimercallback, true);
```
**To initialise stopwatch timer.**<br>
*Example:*
```JavaScript
    scene.stopWatch = _StopWatchTimer(scene.startTimeText, true, true, true, "", "", "", true);
```
**To initialise servertimer.** Note countryID is based on php.net timezones http://php.net/manual/en/timezones.europe.php<br>
*Example:*
```JavaScript
    var countryID = "Europe/London";
    scene.serverTimeInit = _ServerTime(_ServerTimeCallBack, countryID);
```
## CountDown Timer Commands

**Sets the minutes for countdown timer to count down.**<br>
*Example:*
```JavaScript
    scene.countDown.setMinutes(2);
```
**Sets the seconds for countdown timer to count down.**<br>
*Example:*
```JavaScript
    scene.countDown.setSeconds(9);
```
**Gets the current Minutes.**<br>
*Example:*
```JavaScript
    scene.countDown.getMinutes();
```
**Gets the current Seconds.**<br>
*Example:*
```JavaScript
    scene.countDown.getSeconds();
```
**Starts the timer.**<br>
*Example:*
```JavaScript
   scene.countDown.startTimer();
```
**Stops the timer.**<br>
*Example:*
```JavaScript
   scene.countDown.stopTimer();
```
## StopWatch Timer Commands

**Gets the stopwatch current hours.**<br>
*Example:*
```JavaScript
scene.stopWatch.getHours();
```
**Gets the stopwatch current minutes.**<br>
*Example:*
```JavaScript
scene.stopWatch.getMinutes();
```
**Gets the stopwatch current seconds.**<br>
*Example:*
```JavaScript
scene.stopWatch.getSeconds();
```
**Overrides stopwatch start minutes.**<br>
*Example:*
```JavaScript
scene.stopWatch.setMinutes(59);
```
<br>
**Overrides stopwatch start seconds.**<br>
*Example:*
```JavaScript
scene.stopWatch.setSeconds(40);
```
**Overrides stop watch Start hours.**<br>
*Example:*
```JavaScript
scene.stopWatch.setHours(0);
```
**Starts the stop watch: Starts the stop watch from default 0 unless overrides are called that would allow to change starting point.**<br>
*Example:*
```JavaScript
scene.stopWatch.startStopWatch();
```
**Resets the stopwatch. Note reseting stop watch will stop it and reset values to 0 unless overrides are decleared before.**<br><br>
*Example:*
```JavaScript
scene.stopWatch.resetStopWatch();
```
**Pauses the stop watch. Note stoping stopwatch will put in pause state if start stop watch is called again it will resume.**<br><br>
*Example:*
```JavaScript
scene.stopWatch.pauseStopWatch();
```
<br>


## Server Time Callback

EveryTime Server Time is called

*Example:*
```Javascript
_ServerTimeCallBack = function (hours, minutes, seconds, year, month, day) {};

```

# Current Limitation


# Motivation

Wanted to have quick timer I could just plug in and use.

### Author
[Edgars Adamovics]
