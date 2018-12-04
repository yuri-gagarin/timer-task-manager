const uuidv4 = require("uuid/v4");

const timers = [
    {
        title: "Squat Exercises",
        project: "Gym Time",
        id: uuidv4(),
        elapsed: 0,
        runningSince: null
    },

    {
        title: 'Bake a Cake',
        project: "Kitchen",
        id: uuidv4(),
        elapsed: Date.now(),
        runningSince: Date.now()
    }

];

export {timers}

