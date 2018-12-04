import React, {Component} from "react";

class TimerActionButtons extends Component {

    render() {
        if (this.props.timerRunning) {
            return(
                <div className="ui bottom attached buttons">
                    <div className="ui orange button inverted" onClick={this.props.stopTimer}>
                        Stop
                    </div>
                    <div className="or color red"></div>
                    <div className="ui red button inverted" onClick={this.props.resetTimer}>
                        Reset
                    </div>
                </div>
            );
        }
        else {
            return(
                <div className="ui bottom attached buttons">
                    <div className="ui green button inverted" onClick={this.props.startTimer}>
                        Start
                    </div>
                    <div className="or color red"></div>
                    <div className="ui red button inverted" onClick={this.props.resetTimer}>
                        Reset
                    </div>
                </div>
            );
        }
    }
}

export default TimerActionButtons;