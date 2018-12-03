import React, {Component} from "react";
import Timer from "./Timer";
import TimerForm from "./TimerForm";

class EditableTimer extends Component {
    render() {
        if (this.props.editFormOpen) {
           return(
            <TimerForm
                title={this.props.title}
                project={this.props.project}
            />
           );
        }
        else {
            return(
                <Timer 
                    title={this.props.title}
                    project={this.props.title}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                />
            );
        }
    }
}

export default EditableTimer;