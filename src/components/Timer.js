import React, {Component} from "react";
import {renderTimeString} from "../helpers/TimeHelper";


class Timer extends Component {
    render() {
        const elapsedTime = renderTimeString(this.props.elapsed);
        return (
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
                <div className="ui bottom attached blue basic button">
                    Start
                </div>
            </div>
        );
    }
}

export default Timer;
