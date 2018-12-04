import React, {Component} from "react";
import Timer from "./Timer";
import TimerForm from "./TimerForm";

class EditableTimer extends Component {

    constructor(props) {
        super(props)

        this.formSubmit = this.formSubmit.bind(this);
        this.openEditForm = this.openEditForm.bind(this);
        this.closeEditForm = this.closeEditForm.bind(this);

        this.state = {
            editFormOpen: false
        }
    }
    formSubmit(timer) {
        this.setState({editFormOpen: false});
        this.props.onFormSubmit(timer);
        console.log(timer);
    }
    openEditForm() {
        this.setState({editFormOpen: true});
    }
    closeEditForm() {
        this.setState({editFormOpen: false});
    }
   

    render() {
        if (this.state.editFormOpen) {
           return(
            <TimerForm
                id={this.props.id}
                title={this.props.title}
                project={this.props.project}
                formSubmit={this.formSubmit}
                formCancel={this.closeEditForm}

            />
           );
        }

        else {
            return(
                <Timer 
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                    openEditForm={this.openEditForm}
                    deleteTimer={this.props.deleteTimer}
                />
            );
        }
    }
}

export default EditableTimer;