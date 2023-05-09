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




   }
export default Title;