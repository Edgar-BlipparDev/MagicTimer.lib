var blipp = require('blippar').blipp;

var markerW = blipp.getMarker().getWidth();
var markerH = blipp.getMarker().getHeight();
var sW = blipp.getScreenWidth() * 1.003;
var sH = blipp.getScreenHeight() * 1.003;

var TimerVariables = {
    mins: 0,
    secs: 0,
    hours: 0
};

var errorNo;
;
//==========================================Timer Prototype Getter and setter methods=====================================================

//Class
var TimerValues = function (mins, secs, hours) {
    this.mins = mins;
    this.secs = secs;
    this.hours = hours;
};

//Instance Methods
TimerValues.prototype.getHours = function () {
    return this.hours;
};

TimerValues.prototype.getMins = function () {
    return this.mins;
};

TimerValues.prototype.getSecs = function () {
    return this.secs;
};

TimerValues.prototype.setHours = function (hours) {
    TimerVariables.hours = hours;
    return this.hours = hours;
};

TimerValues.prototype.setMins = function (minutes) {
    TimerVariables.mins = minutes;
    return this.mins = minutes;
};

TimerValues.prototype.setSecs = function (seconds) {
    TimerVariables.secs = seconds;
    return this.secs = seconds;
};

TimerValues.prototype.onTimeEnd = function (callback) {
    callback.call(this);
};




//CountDown Timer
_CountDownTimer = function (obj, displayMinutes, callback, enableLog) {

    var timerPresets = new TimerValues();
    var objectHolder = {};

    objectHolder.getHours = function () {
        return timerPresets.getHours();
    };

    objectHolder.getMinutes = function () {
        return timerPresets.getMins();
    };

    objectHolder.getSeconds = function () {
        var currentSeconds = (timerPresets.getSecs() < 10 ? "0" : "") + timerPresets.getSecs();
        return currentSeconds;
    };

    objectHolder.setHours = function (hours) {
        timerPresets.setHours(hours);
    };

    objectHolder.setMinutes = function (minutes) {
        timerPresets.setMins(minutes);
    };

    objectHolder.setSeconds = function (seconds) {
        timerPresets.setSecs(seconds);
    };

    objectHolder.startTimer = function () {
        var temp = timerPresets.getSecs();
        if (timerPresets.getSecs() !== 0) {
            objectHolder.timer = function () {
                timerPresets.setSecs(timerPresets.getSecs() - 1);
                if (displayMinutes == true) {
                    obj.setText(timerPresets.getMins() + ":" + (timerPresets.getSecs() < 10 ? "0" : "") + timerPresets.getSecs());
                } else {
                    obj.setText(timerPresets.getSecs());
                }
                if (enableLog == true) {
                    console.log(timerPresets.getMins() + ":" + (timerPresets.getSecs() < 10 ? "0" : "") + timerPresets.getSecs());
                }
                if (timerPresets.getSecs() > 0) {
                    objectHolder.countdownTimer = setTimeout(function () {
                        objectHolder.timer();
                    }, 1000);
                } else {
                    if (timerPresets.getMins() >= 1) {
                        timerPresets.setSecs(60);
                        timerPresets.setMins(timerPresets.getMins() - 1);
                        objectHolder.countdownTimer = setTimeout(function () {
                            objectHolder.timer();
                        }, 1000);
                    } else {
                        timerPresets.onTimeEnd(callback);
                    }
                }
            };
            objectHolder.timer();
        } else {
            console.log("ERROR " + " : Please Set Minutes and Set Seconds");
        }
    };

    objectHolder.stopTimer = function () {
        clearTimeout(objectHolder.countdownTimer);
    };

    return objectHolder;

};
 exports._CountDownTimer = _CountDownTimer;

//StopWatch Timer
_StopWatchTimer = function (obj, displayHours, displayMinutes, displaySeconds, stopHours, stopMins, stopSecs, enableLog) {

    var timerPresets = new TimerValues();
    var objectHolder = {};

    objectHolder.getHours = function () {
        return timerPresets.getHours();
    };

    objectHolder.getMinutes = function () {
        return timerPresets.getMins();
    };

    objectHolder.getSeconds = function () {
        return timerPresets.getSecs();
    };

    objectHolder.setHours = function (hours) {
        timerPresets.setHours(hours);
    };

    objectHolder.setMinutes = function (minutes) {
        timerPresets.setMins(minutes);
    };

    objectHolder.setSeconds = function (seconds) {
        timerPresets.setSecs(seconds);
    };

    objectHolder.addTime = function () {
        timerPresets.setSecs(timerPresets.getSecs() + 1);
        if (timerPresets.getSecs() >= 60) {
            timerPresets.setSecs(0);
            timerPresets.setMins(timerPresets.getMins() + 1);
            if (timerPresets.getMins() >= 60) {
                timerPresets.setMins(0);
                timerPresets.setHours(timerPresets.getHours() + 1);
            }
        }
        try {
            if (displayHours === true && displayMinutes === false && displaySeconds === false) {
                obj.setText((timerPresets.getHours() ? (timerPresets.getHours() > 9 ? timerPresets.getHours() : "0" + timerPresets.getHours()) : "00"));
            } else if (displayHours === true && displayMinutes === false && displaySeconds === true) {
                obj.setText((timerPresets.getHours() ? (timerPresets.getHours() > 9 ? timerPresets.getHours() : "0" + timerPresets.getHours()) : "00") + ":" + (timerPresets.getSecs() > 9 ? timerPresets.getSecs() : "0" + timerPresets.getSecs()));
            } else if (displayHours === true && displayMinutes === true && displaySeconds === false) {
                obj.setText((timerPresets.getHours() ? (timerPresets.getHours() > 9 ? timerPresets.getHours() : "0" + timerPresets.getHours()) : "00") + ":" + (timerPresets.getMins() ? (timerPresets.getMins() > 9 ? timerPresets.getMins() : "0" + timerPresets.getMins()) : "00"));
            } else if (displayHours === false && displayMinutes === true && displaySeconds === true) {
                obj.setText((timerPresets.getMins() ? (timerPresets.getMins() > 9 ? timerPresets.getMins() : "0" + timerPresets.getMins()) : "00") + ":" + (timerPresets.getSecs() > 9 ? timerPresets.getSecs() : "0" + timerPresets.getSecs()));
            } else if (displayHours === false && displayMinutes === true && displaySeconds === false) {
                obj.setText(timerPresets.getMins() ? (timerPresets.getMins() > 9 ? timerPresets.getMins() : "0" + timerPresets.getMins()) : "00");
            } else if (displayHours === false && displayMinutes === false && displaySeconds === true) {
                obj.setText(timerPresets.getSecs() > 9 ? timerPresets.getSecs() : "0" + timerPresets.getSecs());
            } else {
                obj.setText((timerPresets.getHours() ? (timerPresets.getHours() > 9 ? timerPresets.getHours() : "0" + timerPresets.getHours()) : "00") + ":" + (timerPresets.getMins() ? (timerPresets.getMins() > 9 ? timerPresets.getMins() : "0" + timerPresets.getMins()) : "00") + ":" + (timerPresets.getSecs() > 9 ? timerPresets.getSecs() : "0" + timerPresets.getSecs()));
            }
        } catch (err) {
            errorNo = 102;
            errorHandler(err.line);
        }
        if (enableLog === true) {
            console.log((timerPresets.getHours() ? (timerPresets.getHours() > 9 ? timerPresets.getHours() : "0" + timerPresets.getHours()) : "00") + ":" + (timerPresets.getMins() ? (timerPresets.getMins() > 9 ? timerPresets.getMins() : "0" + timerPresets.getMins()) : "00") + ":" + (timerPresets.getSecs() > 9 ? timerPresets.getSecs() : "0" + timerPresets.getSecs()));
        }

        if (stopHours === timerPresets.getHours() && stopMins === timerPresets.getMins() && stopSecs === timerPresets.getSecs()) {
            if (stopHours === "" || stopHours == undefined && stopMins === "" || stopMins == undefined && stopSecs === "" || stopSecs == undefined) {
                objectHolder.startStopWatch();
            }
            timerPresets.onTimeEnd(objectHolder.pauseStopWatch);

        } else {
            objectHolder.startStopWatch();
        }
    };


    objectHolder.startStopWatch = function () {
        objectHolder.stopWatchTimer = setTimeout(objectHolder.addTime, 1000);
    };

    objectHolder.pauseStopWatch = function () {
        clearTimeout(objectHolder.stopWatchTimer);
    };

    objectHolder.resetStopWatch = function () {
        clearTimeout(objectHolder.stopWatchTimer);
        objectHolder.setMinutes(0);
        objectHolder.setSeconds(0);
        objectHolder.setHours(0);
    };



    return objectHolder;
};
 exports._StopWatchTimer = _StopWatchTimer;

//Server Time
_ServerTime = function (callback, timeZone) {
    var timeArray = [];
    var timeData = {};
    var currentServertimeData = 'https://cust-solution.blippar.com/ServerTime/?json=true' + '&tz=' + timeZone + '&time=time&var=date';

        blipp.xmlHttpRequest('GET', currentServertimeData, function (code, result) {
            if (code === blipp.xmlHttpRequest.DONE) {
                timeData = JSON.parse(result);
                var tempDate = timeData.date;
                var tempTime = timeData.time;

                var year = tempDate.substring(0, 4);
                var month = tempDate.substring(4, 6);
                var day = tempDate.substring(6);

                var hours = tempTime.substring(0, 2);
                var minutes = tempTime.substring(2, 4);
                var seconds = tempTime.substring(4);

                if (hours.substring(0, 1) == "0") {
                    newHours = hours.substring(1, 2);
                }
                if (minutes.substring(0, 1) == "0") {
                    newMinutes = minutes.substring(1, 2);
                }
                if (seconds.substring(0, 1) == "0") {
                    newMinutes = seconds.substring(1, 2);
                }
               
                var temp = {
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds,
                    year: year,
                    month: month,
                    day: day
                };

               callback(hours, minutes, seconds, year, month, day);

            }

            if (code === blipp.xmlHttpRequest.PROGRESS) {
                console.log("Server time request on progress");
            }

            if (code === blipp.xmlHttpRequest.CANCELLED) {
                console.log("Server time request cancelled");
            }

            if (code === blipp.xmlHttpRequest.FAILED) {
                console.log("Server time request failed");
                _ServerTime();
            }
        });

 };
 exports._ServerTime = _ServerTime;


function errorHandler(lineNo) {
    var stack = new Error().stack;
    if (errorNo == 102) {
        console.log("ERROR at line " + lineNo + " :Please make sure you set correct boolean values");
    }
}