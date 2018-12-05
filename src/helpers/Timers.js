const uuidv4 = require("uuid/v4");

const timers = [
    {
        title: "Squat Exercises",
        project: "Gym Time",
        id: uuidv4(),
        elapsed: 0,
        runningSince: null,
        countdown: false,
        amount: null
    },

    {
        title: 'Bake a Cake',
        project: "Kitchen",
        id: uuidv4(),
        elapsed: Date.now(),
        runningSince: Date.now(),
        countdown: false,
        amount: null
    },

    { 
        title: "Steak",
        project: "Kitchen",
        id: uuidv4(),
        elapsed: 0,
        runningSince: Date.now(),
        countdown: true,
        amount: 10000
    }

];

export {timers}

