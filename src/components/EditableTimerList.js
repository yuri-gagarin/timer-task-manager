import React, {Component} from "react";
import EditableTimer from "./EditableTimer";

class EditableTimerList extends Component {

    render() {

        const timers = this.props.timers.map(timer => {
            return(
            <EditableTimer
                key = {timer.id}
                id = {timer.id}
                title = {timer.title}
                project = {timer.project}
                elapsed = {timer.elapsed}
                runningSince = {timer.runningSince}
                onFormSubmit = {this.props.editTimer}
                deleteTimer = {this.props.deleteTimer}
                startTimer = {this.props.startTimer}
                stopTimer = {this.props.stopTimer}
                resetTimer = {this.props.resetTimer}
             />
            );
        })
        return (
            <div className="timers">
                {timers}
            </div>
        );
    }
}

export default EditableTimerList;