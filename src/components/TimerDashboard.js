import React, {Component} from "react";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";

import {newTimer} from "../helpers/TimeHelper";
import {timers} from "../helpers/Timers";

class TimersDashboard extends Component {
    constructor(props) {
        super(props);
        this.createTimer = this.createTimer.bind(this);
        this.state = {
            timers:[]
        }
    }

    componentDidMount() {
        this.setState({timers: timers}, () => {
        });
    }
    
    createTimer(timer) {
        
        let task = 
        newTimer({
            title: timer.title,
            project: timer.project
        });
        this.setState({timers: this.state.timers.concat(task)});
        
        
    }   
    
    render() {
        return(
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList
                        timers = {this.state.timers}
                     />

                    <ToggleableTimerForm
                        isOpen = {true}
                        createTimer = {this.createTimer}
                     />
                </div>
            </div>
        );
    }
}

export default TimersDashboard;