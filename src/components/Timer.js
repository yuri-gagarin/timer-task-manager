import React, {Component} from "react";
import TimerActionButtons from "./TimerActionButtons";
import {renderTimeString} from "../helpers/TimeHelper";



class Timer extends Component {

    constructor(props) {
        super(props);

        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);

    }

    startTimer() {
        this.props.startTimer(this.props.id);
    }
    stopTimer() {
        this.props.stopTimer(this.props.id);
    }
    resetTimer() {
        this.props.resetTimer(this.props.id);
    }
    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => {
        this.forceUpdate()}, 500);
    }

    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval);
    }
    render() {

        const elapsedTime = renderTimeString(this.props.elapsed, this.props.runningSince);
        return (
            <div className="ui four wide column">
            <div className="ui centered card">
                <div className="content">
                    <div className="header">
                        {this.props.title}
                    </div>
                    <div className="meta">
                        {this.props.project}
                    </div>
                    <div className="center aligned description">
                        <h2>{elapsedTime}</h2>
                    </div>
                    <div className="extra content">
                        <span className="right floated edit icon" onClick={this.props.openEditForm}>
                            <i className="edit icon"/>
                        </span>
                        <span className="right floated trash icon" onClick={() => {this.props.deleteTimer(this.props.id)}}>
                            <i className="trash icon"/>
                        </span>
                    </div>
                </div>
                <TimerActionButtons 
                    timerRunning = {this.props.runningSince}
                    startTimer = {this.startTimer}
                    resetTimer = {this.resetTimer}
                    stopTimer = {this.stopTimer}
                />
            </div>
            </div>
        );
    }
}

export default Timer;
