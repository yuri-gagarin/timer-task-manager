import React, {Component} from "react";
import EditableTimer from "./EditableTimer";

class EditableTimerList extends Component {

    render() {
        console.log(this.props.timers);

        const timers = this.props.timers.map(timer => {
            console.log(timer.project);
            return(
            <EditableTimer
                key = {timer.id}
                id = {timer.id}
                title = {timer.title}
                project = {timer.project}
                elapsed = {timer.elapsed}
                runningSince = {timer.runningSince}
             />
            );
        })
        return (
            <div id="timers">
                {timers}
            </div>
        );
    }
}

export default EditableTimerList;