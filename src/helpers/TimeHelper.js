import {convertedTime} from "./ConverterHelper";
const uuidv4 = require("uuid/v4");



const newTimer = function(attrs={}) {
    const timer = {
        title: attrs.title || "Timer",
        project: attrs.project || "Project",
        id: uuidv4(),
        elapsed: 0
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

export {newTimer, renderTimeString}