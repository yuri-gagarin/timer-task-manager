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
                runningSince = {timer.runningSince}
                elapsed = {timer.elapsed}
                countdown = {timer.countdown}
                amount = {timer.amount}
                onFormSubmit = {this.props.editTimer}
                deleteTimer = {this.props.deleteTimer}
                startTimer = {this.props.startTimer}
                stopTimer = {this.props.stopTimer}
                resetTimer = {this.props.resetTimer}
             />
            );
        })
        return (
            <div className="ui stackable four column grid">
                {timers}
            </div>
        );
    }
}

export default EditableTimerList;