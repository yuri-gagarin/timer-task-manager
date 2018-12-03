const uuidv4 = require("uuid/v4");

const timers = [
    {
        title: "Squat Exercises",
        project: "Gym Time",
        id: uuidv4(),
        elapsed: 5456099,
        runningSince: Date.now()
    },

    {
        title: 'Bake a Cake',
        project: "Kitchen",
        id: uuidv4(),
        elapsed: 1273998,
        runningSince: null
    }

];

export {timers}

