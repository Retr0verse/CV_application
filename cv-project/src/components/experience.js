import React, { Component } from 'react';
import uniqid from 'uniqid';

class Experience extends Component {
    constructor() {
        super();

        this.state = {
            role: '',
            company: '',
            startDate: '',
            endDate: '',
            location: '',
            details: '',

            experience: [
                {
                    id: uniqid(),
                    role: 'Software Developer',
                    company: 'Broca Tech',
                    date: 'June 2021 - Current',
                    location: '/ London, UK',
                    /*add four bulleted sections for experience details per job*/
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie nunc non blandit massa enim nec dui.'

                },
                {
                    id: uniqid(),
                    role: 'Junior Web Developer',
                    company: 'Nudle',
                    date: 'September 2019 - June 2021',
                    location: '/ Palo Alto, CA',
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu vitae elementum curabitur vitae.'

                },
                {
                    id: uniqid(),
                    role: 'Web Design Intern',
                    company: 'Nudle',
                    date: 'April 2019 - September 2019',
                    location: '/ Palo Alto, CA',
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum.'


                }
            ],
            edit: false
        };
    }

    handleRoleChange = e => {
        this.setState({
            role: e.target.value
        })
    }

    handleCompanyChange = e => {
        this.setState({
            company: e.target.value
        })
    }

    handleStartDateChange = e => {
        this.setState({
            startDate: e.target.value
        })
    }

    handleEndDateChange = e => {
        this.setState({
            endDate: e.target.value
        })
    }

    handleLocationChange = e => {
        this.setState({
            location: e.target.value
        })

        handleDetailsChange = e => {
            this.setState({
                details: e.target.value
            })
        }

        onSubmitExperience = e => {
            e.preventDefault();
            this.setState({
                experience: this.state.experience.concat({
                    id: uniqid(),
                    role: this.state.role,
                    company: this.state.company,
                    date: this.state.startDate + ' - ' + this.state.endDate,
                    location: this.state.location,
                    details: this.state.details

                }),
                role: '',
                company: '',
                startDate: '',
                endDate: '',
                location: '',
                details: ''

            })

            this.toggleEdit()
        }

        toggleEdit = () => {
            this.setState(prevState => ({
                edit: !prevState.edit
            }))
        }

        handleRemove = () => {
            const newExp = this.state.experience.filter(exp => exp.id !== key)

            this.setState({
                experience: newExp
            })
        }

        render() {
            const {
                role,
                company,
                startDate,
                endDate,
                location,
                details,
                experience,
                edit
            } = this.state;
        

            return (
                <div id="Experience">
                    <h2>Work Experience</h2>
                    {experience.map(exp => {
                        return(
                            <div key={exp.id} onClick={() => this.handleRemove(exp.id)}>
                                <div>
                                    <p className="experience-role">{exp.role}</p>
                                    <p className="experience-company">{exp.company}</p>
                                    <p className="experience-date">{exp.date}</p>
                                    <p className="experience-location">{exp.location}</p>
                                    <p className="experience-details">{exp.details}</p>
                                </div>
                            </div>
                        )
                    })}
                    <button 
                    className="edit-toggle"
                    type="button"
                    onClick={this.toggleEdit}
                    >
                        Add
                        </button> 
                
                {edit &&
                <form id="experience-add" className="edit-form">
                    <label htmlFor="role">Role</label>
                    <input 
                    id="role"
                    type="text"
                    value={role}
                    onChange={this.handleRoleChange}
                    />
                    <label htmlFor="company">Company</label>
                    <input
                    id="company"
                    type="text"
                    value={company}
                    onChange={this.handleCompanyChange}
                    />
                    <label htmlFor="start-date">Start Date</label>
                    <input
                    id="start-date"
                    type="text"
                    value={startDate}
                    onChange={this.handleStartDateChange}
                    />
                    <label htmlFor="end-date">End Date</label>
                    <input
                    id="end-date"
                    type="text"
                    value={endDate}
                    onChange={this.handleEndDateChange}
                    />
                    <label htmlFor="location">Location</label>
                    <input
                    id="location"
                    type="text"
                    value={location}
                    onChange={this.handleLocationChange}
                    />
                    <label htmlFor="details">Details</label>
                    <input
                    id="details"
                    type="text"
                    value={details}
                    onChange={this.handleDetailsChange}
                    />

                    <button 
                    type="button"
                    onClick={this.onSubmitExperience}
                    >
                        Add Experience
                    </button>
                    <button
                        type="button"
                        onClick={this.toggleEdit}
                        >
                            Close
                        </button>
                    </form>
                }
            </div>
            )

       }

    }



        export default Experience;