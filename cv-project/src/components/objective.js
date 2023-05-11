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
    const { objective, edit } = this.state;

    return (
        <div id="Objective">
            <h2>Objective</h2>
            <p className="objective">{objective ? objective : 'Analytical-minded and creative team player with a strong background in designing, planning, and maintenance of software programs, desirous of the role of Software Engineer at DC Inc. to hone my technical skills and expertise along with designing creative software and products as per the clients’ needs and enhance the reputation of your organisation.' }</p>
            <button
                className="edit-toggle"
                type="button"
                onClick={this.toggleEdit}

            >
                Edit
            </button>

            {edit &&
                <form id="objective-edit" className="edit-form">
                    <label htmlFor="objective">Career Objective</label>
                    <textarea
                        id="objective"
                        onClick={this.handleObjectiveChange}

                        />
                        <button
                        type="button"
                        onClick={this.toggleEdit}
                        >
                            Close Edit
                        </button>
                </form>
}

        </div>
    )
}

}

export default Objective;