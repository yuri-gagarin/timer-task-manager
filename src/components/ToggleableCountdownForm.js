import React, {Component} from "react";
import CountdownTimerForm from "./CountdownTimerForm";

class ToggleableCountdownForm extends Component {
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
        this.props.createCountdownTimer(timer);
        this.setState({isOpen: false});
    }
    render() {
        if (this.state.isOpen) {
            return (
                <CountdownTimerForm
                    formCancel = {this.formCancel}
                    formSubmit = {this.formSubmit}
                 />
            );
        } 
        else {
            return (
                    <button className="ui basic button icon" onClick={this.formOpen}>
                         <i className="plus icon" />
                         Create a Countdown Timer
                    </button>
            );
        }
    }

}

export default ToggleableCountdownForm;
