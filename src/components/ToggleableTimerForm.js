import React, {Component} from "react";
import TimerForm from "./TimerForm";

class ToggleableTimerForm extends Component {
    constructor() {
        super();
        this.formOpen = this.formOpen.bind(this);
        this.formCancel = this.formCancel.bind(this);
        
        this.state = {
            isOpen: false
        }
    }

    formOpen() {
        this.setState({isOpen: true});
    }

    formCancel() {
        console.log("Cancel Form");
        this.setState({isOpen: false});
    }

    render() {
        if (this.state.isOpen) {
            return (
                <TimerForm
                    formCancel = {this.formCancel}
                 />
            );
        } 
        else {
            return (
                <div className="ui basic content center aligned segment">
                    <button className="ui basic button icon" onClick={this.formOpen}>
                         <i className="plus icon" />
                    </button>
                </div>
            );
        }
    }

}

export default ToggleableTimerForm;
