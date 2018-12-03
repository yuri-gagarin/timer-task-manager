import React, {Component} from "react";

class TimerForm extends Component {
    render() {
        const submitBtnText = this.props.title ? "Update" : "Create";

        return (
            <div className="ui centered card">
                <div className="content">
                    <div className="ui form">
                        <div className="field">
                            <label>Title</label>
                            <input type="text" defaultValue={this.props.title} />
                        </div>
                        <div className="field">
                            <label>Project</label>
                            <input type="text" defaultValue={this.props.project} />
                        </div>
                        <div className="ui two botttom attached buttons">
                            <button className="ui basic blue button">{submitBtnText}</button>
                            <button className="ui basic red button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TimerForm;