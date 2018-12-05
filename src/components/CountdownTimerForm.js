import React, {Component} from "react";
import {convertToMilis} from "../helpers/ConverterHelper";


class CountdownTimerForm extends Component {
    constructor(props){
        super(props);

        this.formSubmit = this.formSubmit.bind(this);

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleProjectChange = this.handleProjectChange.bind(this);
        this.handleHoursChange = this.handleHoursChange.bind(this);
        this.handleMinutesChange = this.handleMinutesChange.bind(this);
        this.handleSecondsChange = this.handleSecondsChange.bind(this);

        this.state = {
            title: "",
            project: "",
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    }

    formSubmit() {
        const hr = parseInt(this.state.hours);
        const min = parseInt(this.state.minutes);
        const sec = parseInt(this.state.seconds);
        console.log(convertToMilis(hr,min,sec));
        
    }

    handleTitleChange(e) {
        this.setState({title: e.target.value});
    }
    handleProjectChange(e) {
        this.setState({project: e.target.value});

    }
    handleHoursChange(e) {
        this.setState({hours: e.target.value});
    }
    handleMinutesChange(e) {
        this.setState({minutes: e.target.value});
    }
    handleSecondsChange(e) {
        this.setState({seconds: e.target.value});
    }


    render() {
        return(     
            <div className="ui centered card">
                <div className="content">
                    <div className="ui form centered">
                        <div className="field">
                            <label>Title</label>
                            <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
                        </div>
                        <div className="field">
                            <label>Project</label>
                            <input type="text" value={this.state.project} onChange={this.handleProjectChange} />
                        </div>
                        <div className="fields">
                            <div className="field">
                                <label>Hours</label>
                                <input type="text" defaultValue="00" onChange={this.handleHoursChange}/>
                            </div>
                            <div className="field">
                                <label>Minutes</label>
                                <input type="text" defaultValue="00" onChange={this.handleMinutesChange}/>
                            </div>
                            <div className="field">
                                <label>Seconds</label>
                                <input type="text" defaultValue="00" onChange={this.handleSecondsChange}/>
                            </div>
                        </div>
                        <div className="ui two botttom attached buttons">
                            <button className="ui basic blue button" onClick={ () => {this.formSubmit()} }> Create</button>
                            <button className="ui basic red button" onClick={this.props.formCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CountdownTimerForm;