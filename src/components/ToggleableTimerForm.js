import React, {Component} from "react";
import TimerForm from "./TimerForm";

class ToggleableTimerForm extends Component {
    constructor(props) {
        super(props);
        this.formOpen = this.formOpen.bind(this);
        this.formCancel = this.formCancel.bind(this);
        this.formSubmit = this.formSubmit.bind(this);

        this.state = {
            isOpen: false
        }
    }

    formOpen() {
        this.setState({isOpen: true});
    }

    formCancel() {
        this.setState({isOpen: false});
    }

    formSubmit(timer) {
        this.props.createTimer(timer);
        this.setState({isOpen: false});
    }
    render() {
        if (this.state.isOpen) {
            return (
                <TimerForm
                    formCancel = {this.formCancel}
                    formSubmit = {this.formSubmit}
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
