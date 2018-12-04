import React, {Component} from "react";

class TimerActionButton extends Component {

    render() {
        if (this.props.timerRunning) {
            return(
                <div className="ui bottom attached red basic button" onClick={this.props.stopTimer}>
                    Stop
                </div>
            );
        }
        else {
            return(
                <div className="ui bottom attached green basic button" onClick={this.props.startTimer}>
                    Start
                </div>
            );
        }
    }
}

export default TimerActionButton;