import React, { Component } from 'react';



class Title extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            role: '',
            edit: false

        };
    }

    handleNameChange = e => {
        this.setState({
            name: e.target.value
        })
    }

    handleRoleChange = e => {
        this.setState({
            role: e.target.value
        })
    }

    toggleEdit = e => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }


    render() {
const { name, role, edit } = this.state;

return(
    <div id="Title">
        <h1>{name ? name : 'Your name'}</h1>
        <p className="role">{role ? role : 'Your role'}</p>
        <button
            className="edit-toggle"
            type="button"
            onClick={this.toggleEdit}
            >
                Edit
            </button>

    {edit && 
        <form id="intro-edit" className="edit-form">
            <label htmlfor="name">Your name</label>
            <input
                id="name"
                type="text"
                onChange={this.handleNameChange}
                />
            <label htmlFor="role">Your role</label>
            <input
                id="role"
                type="text"
                onChange={this.handleRoleChange}
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
export default Title;