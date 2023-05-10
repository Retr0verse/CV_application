import React, { Component } from 'react';

class Objective extends Component {
    constructor() {
        super();

        this.state = {
            objective: '',
            edit: false 
        };
    }

handleObjectiveChange = e => {
    this.setState({
        objective: e.target.value
    })
}

toggleEdit = () => {
    this.setState(prevState => ({
        edit: !prevState.edit
    }))
}

render() {
    const { objective } = this.state;

    return (
        <div id="Objective">
            <h2>Objective</h2>
            <p className="objective"></p>
        </div>
    )
}

}