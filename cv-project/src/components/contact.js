import React, { Component } from 'react';

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            Contact: '',
            Contact: [
                email: '',
                phone: '',
                city: '',
                LinkedIn: '',
                Github: '',
                edit: false

            ]
        }
    }

    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        })
    }
    handlePhoneChange = e => {
        this.setState({
            phone: e.target.value
        })
    }
    handleCityChange = e => {
        this.setState({
            email: e.target.value
        })
    }
    handleLinkedInChange = e => {
        this.setState({
            linkedIn: e.target.value
        })
    }
    handleGithubChange = e => {
        this.setState({
            github: e.target.value
        })
    }