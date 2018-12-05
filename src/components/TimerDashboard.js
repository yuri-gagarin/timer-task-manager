import React, {Component} from "react";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";
import ToggleableCountdownForm from "./ToggleableCountdownForm";
import {newTimer} from "../helpers/TimeHelper";
import {timers} from "../helpers/Timers";


class TimersDashboard extends Component {
    constructor(props) {
        super(props);
        //timer CRUD
        this.handleTimerForm = this.handleTimerForm.bind(this);
        this.handleDeleteTimer = this.handleDeleteTimer.bind(this);

        //stopwatch
        this.handleCountdownForm = this.handleCountdownForm.bind(this);

        //timer controls
        this.handleStartTimer = this.handleStartTimer.bind(this);
        this.handleStopTimer = this.handleStopTimer.bind(this);
        this.handleResetTimer = this.handleResetTimer.bind(this);

        this.state = {
            timers:[],
        }
    }

    componentDidMount() {
        this.setState({timers: timers}, () => {
        });
    }
    
    //timer edit controlls
    handleTimerForm(timer) {
        
        if (timer.id) {
            console.log(timer);
            const updatedTimers = this.state.timers.map(t => {
                if (t.id === timer.id) {
                    t.title = timer.title;
                    t.project = timer.project
                    return t;
                }
                else {
                    return t;
                }
            });
            this.setState({timers: updatedTimers});
        }
        else {
            let task = 
            newTimer({
                title: timer.title,
                project: timer.project,
                elapsed: null,
                runningSince: Date.now()
            });
            this.setState({timers: this.state.timers.concat(task)}, () => console.log(this.state.timers));
        }     
    }
    handleDeleteTimer(timerID) {
        const updatedTimers = this.state.timers.filter(t => {
            return t.id !== timerID;
        });
        this.setState({timers: updatedTimers});
    }

    handleCountdownForm(obj) {
        console.log(obj)
    }

    //timer controlls
    handleStartTimer(timerID) {
        const updatedTimers = this.state.timers.map(timer => {
            if (timerID === timer.id) {
                console.log(timer)
                if (timer.elapsed != null) {
                    timer.runningSince = Date.now() - timer.elapsed;
                    timer.elapsed = 0;   
                }
                else {
                    timer.runningSince = Date.now();
                }
                return timer;
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
                if (timer.countdown) {
                    timer.runningSince = null;
                    return timer;
                }
                else {
                    timer.elapsed = null;
                    timer.runningSince = null;
                    return timer;
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
                if(timer.countdown) {
                    timer.amount -=Date.now() - timer.runningSince;
                    timer.runningSince = null;
                    return timer;
                }
                else {
                    timer.elapsed = Date.now() - timer.runningSince;
                    timer.runningSince = null;
                    return timer;
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
            <div className="ui two column centered grid">
                <div className="sixteen wide column">
                    <EditableTimerList
                        timers = {this.state.timers}
                        editTimer = {this.handleTimerForm}
                        deleteTimer = {this.handleDeleteTimer}
                        startTimer = {this.handleStartTimer}
                        stopTimer = {this.handleStopTimer}
                        resetTimer = {this.handleResetTimer}
                     />
                </div>
                <div className="four column centered row">
                    <div className="column">
                        <ToggleableTimerForm
                            createTimer = {this.handleTimerForm}
                        />
                    </div>
                    <div className="column">
                        <ToggleableCountdownForm
                            createCountdownTimer = {this.handleSubmitStopWatchForm}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default TimersDashboard;