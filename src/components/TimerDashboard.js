import React, {Component} from "react";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";

import {timers} from "../helpers/Timers";

class TimersDashboard extends Component {
    constructor() {
        super();
        this.state = {
            timers:[]
        }
    }

    componentDidMount() {
        this.setState({timers: timers}, () => {
            console.log(this.state.timers);
        });
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
                     />
                </div>
            </div>
        );
    }
}

export default TimersDashboard;