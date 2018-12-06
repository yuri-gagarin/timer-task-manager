import React, {Component} from "react";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";
import ToggleableCountdownForm from "./ToggleableCountdownForm";
import ToolBar from "./ToolBar";
import {createTimer} from "../helpers/TimeHelper";
import {timers} from "../helpers/Timers";


class TimersDashboard extends Component {
    constructor(props) {
        super(props);
        //timer CRUD
        console.log(timers);
        this.handleTimerForm = this.handleTimerForm.bind(this);
        this.handleDeleteTimer = this.handleDeleteTimer.bind(this);

        //toolbarSortOption
        this.displaySorted = this.displaySorted.bind(this);

        //stopwatch
        this.handleCountdownForm = this.handleCountdownForm.bind(this);

        //timer controls
        this.handleStartTimer = this.handleStartTimer.bind(this);
        this.handleStopTimer = this.handleStopTimer.bind(this);
        this.handleResetTimer = this.handleResetTimer.bind(this);

        this.state = {
            timers:[],
            sortOption: "All"
        }
    }

    componentDidMount() {
        this.setState({timers: timers}, () => {
        });
    }
    //sorting controls
    displaySorted(option) {
        let allTimers = timers;
        let updatedTimers = [];
        switch (option) {
            case "All" :
                //in future get timers from server
                updatedTimers = timers.map(timer => {
                    return timer;
                });
            break;
            case "Timers":
                updatedTimers = allTimers.filter(timer => {
                    console.log(timer)
                    return timer.countdown === false;
                });
            break;
            case "Countdown Timers":
                updatedTimers = allTimers.filter(timer => {
                    return timer.countdown === true;
                })
            break;
            case "Most Recent":
            break ;
            case "Oldest":
            break;

        }
        this.setState({
            sortOption: option,
            timers: updatedTimers
        });
    }

    //create countdown timer
    handleCountdownForm(data) {
        const timer = createTimer({
            title: data.title, 
            project: data.project, 
            elapsed: null, 
            runningSince: null,
            countdown: data.countdown,
            amount: data.amount
        });

        this.setState({
            timers: this.state.timers.concat(timer)
        });
    }
    
    //timer edit controlls
    handleTimerForm(timer) {
        
        if (timer.id) {
            const updatedTimers = this.state.timers.map(t => {
                if (t.id === timer.id) {
                    const newTimer = Object.assign({}, t)
                    newTimer.title = timer.title;
                    newTimer.project = timer.project
                    return newTimer;
                }
                else {
                    return t;
                }
            });
            this.setState({timers: updatedTimers});
        }
        else {
            let newTimer = 
            createTimer({
                title: timer.title,
                project: timer.project,
                elapsed: null,
                runningSince: null,
                countdown: false,
                amount: 0
            });
            this.setState({timers: this.state.timers.concat(newTimer)});
        }     
    }
    handleDeleteTimer(timerID) {
        const updatedTimers = this.state.timers.filter(t => {
            return t.id !== timerID;
        });
        this.setState({timers: updatedTimers});
    }

  

    //timer controlls
    handleStartTimer(timerID) {
        const updatedTimers = this.state.timers.map(timer => {
            if (timerID === timer.id) {
                const newTimer = Object.assign({}, timer);
                if (timer.elapsed != null) {
                    newTimer.runningSince = Date.now() - timer.elapsed;
                    newTimer.elapsed = 0;   
                }
                else {
                    newTimer.runningSince = Date.now();
                }
                return newTimer;
            }
            else {
                return timer;
            }
        });
        this.setState({timers: updatedTimers});
    } 
    handleResetTimer(timerID) {
        const updatedTimers = this.state.timers.map(timer => {
            if (timerID === timer.id) {
                const newTimer = Object.assign({}, timer);
                if (timer.countdown) {
                    newTimer.runningSince = null;
                    return newTimer;
                }
                else {
                    newTimer.elapsed = null;
                    newTimer.runningSince = null;
                    return newTimer;
                    }
                }
            else {
                return timer;
            }
        });
        this.setState({timers: updatedTimers});
    }
    handleStopTimer(timerID) {
        const updatedTimers = this.state.timers.map(timer => {
            if (timer.id === timerID) {
                const newTimer = Object.assign({}, timer);
                if(timer.countdown) {
                    newTimer.amount -=Date.now() - timer.runningSince;
                    newTimer.runningSince = null;
                    return newTimer;
                }
                else {
                    newTimer.elapsed = Date.now() - timer.runningSince;
                    newTimer.runningSince = null;
                    return newTimer;
                }
            }
            else {
                return timer;
            }
        });

        this.setState({timers: updatedTimers});
    }
    
    render() {
        return(
            <div className="container state-container">
                <ToolBar activeItem = {this.state.sortOption}
                         displaySorted = {this.displaySorted}
                 />
                <div className="container">
                    <EditableTimerList
                        timers = {this.state.timers}
                        editTimer = {this.handleTimerForm}
                        deleteTimer = {this.handleDeleteTimer}
                        startTimer = {this.handleStartTimer}
                        stopTimer = {this.handleStopTimer}
                        resetTimer = {this.handleResetTimer}
                     />
                </div>
                <div className="ui stackable four column grid">
                    <div className="column">
                    </div>
                    <div className="column">
                        <ToggleableTimerForm
                            createTimer = {this.handleTimerForm}
                        />
                    </div>
                    <div className="column">
                        <ToggleableCountdownForm
                            createCountdownTimer = {this.handleCountdownForm}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default TimersDashboard;