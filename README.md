# MagicTimer.lib

## Synopsis
Blippar JS extension timer Library that has countdown-timer, stopwatch-timer and allows to get server time, including year, month and date.

###### Usage
```JavaScript
var scene = blipp.addScene('default');
   require('./TimerLib.js');```
   
#Initialization 
 To intilise countDown Timer 
```scene.countDown = _CountDownTimer(scene.countDownTimer, true, _CountDowtimercallback, true);```

After Text node has been created minutes and seconds can be set.

``` scene.countDown.setMinutes(2);
    scene.countDown.setSeconds(9);```
    
 To start the timer use:
 '''scene.countDown.startTimer();'''
 
 To stop the timer use:
 '''scene.countDown.stopTimer();'''
 
 Note 

The `node` shown above can be either a string `"scene"`,`"screen"` or the model/node to use as a spwan point for the models. The spawn point will follow movement and rotations applied to that node/model.

The `particleParameterData` is a data struc which defines the variables used by the particle system (see detail in docs folder)

# Current Limitation



# Motivation

Wanted to have quick timmer I could just plug in and use.

### Author
[Jeff Kershaw]
