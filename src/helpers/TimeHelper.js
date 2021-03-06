import {convertedTime} from "./ConverterHelper";
const uuidv4 = require("uuid/v4");



const createTimer = function(attrs={}) {
    const timer = {
        title: attrs.title || "Timer",
        project: attrs.project || "Project",
        id: uuidv4(),
        elapsed: 0,
        runningSince: attrs.runningSince,
        countdown: attrs.countdown,
        amount: attrs.amount
    };

    return timer;
};

const renderTimeString = function(elapsed, started) {
    let totalElapsed = elapsed;
    if (started) {
        totalElapsed += Date.now() - started;
    }
    return convertedTime(totalElapsed);
}

const renderCountdownString = function(elapsed, runningSince, remain){
    let remainder = remain;
    if (runningSince) {
        let decrement = Date.now() - runningSince - elapsed;
        remainder -= decrement;
    }
    if (remainder < 0) {
        return("Time is up!");
    }
    else {
        return convertedTime(remainder);
    }
 
}


export {createTimer, renderTimeString, renderCountdownString}