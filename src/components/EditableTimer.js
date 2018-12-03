import React, {Component} from "react";
import Timer from "./Timer";
import TimerForm from "./TimerForm";

class EditableTimer extends Component {

    constructor(props) {
        super(props)

        this.submitForm = this.submitForm.bind(this);
        this.openForm = this.openForm.bind(this);
        this.deleteTimer = this.deleteTimer.bind(this);

        this.state = {
            editFormOpen: false
        }
    }
    submitForm({timer}) {
        console.log(timer);
    }
    openForm() {
        console.log(this);
    }
    deleteTimer(timerID) {
        console.log(timerID);
    }

    render() {
        if (this.state.editFormOpen) {
           return(
            <TimerForm
                id={this.props.id}
                title={this.props.title}
                project={this.props.project}
                submitForm={this.submitForm}

            />
           );
        }

        else {
            return(
                <Timer 
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                    openForm={this.openForm}
                    deleteTimer={this.deleteTimer}
                />
            );
        }
    }
}

export default EditableTimer;