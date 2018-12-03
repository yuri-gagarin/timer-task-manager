import React, {Component} from "react";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";

import {newTimer} from "../helpers/TimeHelper";
import {timers} from "../helpers/Timers";

class TimersDashboard extends Component {
    constructor(props) {
        super(props);
        //timer CRUD
        this.handleTimerForm = this.handleTimerForm.bind(this);
        this.handleDeleteTimer = this.handleDeleteTimer.bind(this);

        this.state = {
            timers:[],
        }
    }

    componentDidMount() {
        this.setState({timers: timers}, () => {
        });
    }
    
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
                project: timer.project
            });
            this.setState({timers: this.state.timers.concat(task)});
        }     
    }
    handleDeleteTimer(timerID) {
        console.log(timerID);
        const updatedTimers = this.state.timers.filter(t => {
            return t.id != timerID;
        });
        this.setState({timers: updatedTimers});
    } 
    
    render() {
        return(
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList
                        timers = {this.state.timers}
                        editTimer = {this.handleTimerForm}
                        deleteTimer = {this.handleDeleteTimer}
                     />

                    <ToggleableTimerForm
                        createTimer = {this.handleTimerForm}
                     />
                </div>
            </div>
        );
    }
}

export default TimersDashboard;