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
                linkedin: '',
                github: '',
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
            linkedin: e.target.value
        })
    }
    handleGithubChange = e => {
        this.setState({
            github: e.target.value
        })
    }
    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))

    }

    render() {
        const {
            email,
            phone,
            city,
            LinkedIn,
            Github,
            edit
        } = this.state;

        return (
            <div id="Contact">
                <h3>CONTACT</h3>
                <div className="email">
                    <p>{email ? email : 'john@devjobs.com'}</p>
                </div>
                <div className="phone">
                    <p>{phone ? phone : '555-551-8159'}</p>
                </div>
                <div className="city">
                    <p>{city ? city : 'San Antonio, TX'}</p>
                </div>
                <div className="linkedin">
                    <a href={linkedin ? linkedin : 'linkedin.com/in/user-name'}>LinkedIn</a>
                </div>
                <div className="github">
                    <a href={github ? github : 'github.com/username'}>Github</a>
                </div>
                < button className="edit-toggle" type="button" onClick={this.toggleEdit}>Edit</button>

                {edit &&
                <form id="contact-edit" className="edit-form">
                    <label htmlFor="email">email</label>
                    <input
                    id="email"
                    type="text"
                    placeholder="john@devjobs.com"
                    onChange={this.handleEmailChange}
                    />
                    </form>}
            </div>
        )

        export default Contact