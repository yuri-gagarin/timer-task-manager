import React, {Component} from "react";

class EditableTimerList extends Component {

    render() {
        return (
            <div id="timers">
                <EditableTimer 
                    title="First Timer"
                    project="World Domination"
                    elapsed="8747773"
                    runningSince={null}
                    editFormOpen={false}
                />

                <EditableTimer 
                    title="SecondTimer"
                    project="Also Domination"
                    elapse="7364623"
                    runningSince={null}
                    editFormOpen={false}
                />
            </div>
        );
    }
}

export default EditableTimerList;