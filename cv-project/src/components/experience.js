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
            details2: '',
            details3: '',
            details4: '',

            experience: [
                {
                    id: uniqid(),
                    role: 'Software Developer',
                    company: 'Broca Tech',
                    date: 'June 2021 - Current',
                    location: ' / London, UK',
                    /*add four bulleted sections for experience details per job*/
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie nunc non blandit massa enim nec dui.',
                    details2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie nunc non blandit massa enim nec dui.',
                    details3:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie nunc non blandit massa enim nec dui.',
                    details4:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie nunc non blandit massa enim nec dui.'
                },
                {
                    id: uniqid(),
                    role: 'Junior Web Developer',
                    company: 'Nudle',
                    date: 'September 2019 - June 2021',
                    location: ' / Palo Alto, CA',
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu vitae elementum curabitur vitae.',
                    details2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie nunc non blandit massa enim nec dui.',
                    details3:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie nunc non blandit massa enim nec dui.' ,
                    details4:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie nunc non blandit massa enim nec dui.'
                },
                {
                    id: uniqid(),
                    role: 'Web Design Intern',
                    company: 'Nudle',
                    date: 'April 2019 - September 2019',
                    location: ' / Palo Alto, CA',
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum.',
                    details2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie nunc non blandit massa enim nec dui.',
                    details3:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie nunc non blandit massa enim nec dui.',
                    details4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie nunc non blandit massa enim nec dui.'

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
    }
        handleDetailsChange = e => {
            this.setState({
                details: e.target.value
            })
        }
        handleDetails2Change = e => {
            this.setState({
                details2: e.target.value
            })
        }
        handleDetails3Change = e => {
            this.setState({
                details3: e.target.value
            })
        }
        handleDetails4Change = e => {
            this.setState({
                details4: e.target.value
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
                    details: this.state.details,
                    details2: this.state.details2,
                    details3: this.state.details3,
                    details4: this.state.details4

                }),
                role: '',
                company: '',
                startDate: '',
                endDate: '',
                location: '',
                details: '',
                details2: '',
                details3: '',
                details4: ''

            })

            this.toggleEdit()
        }

        toggleEdit = () => {
            this.setState(prevState => ({
                edit: !prevState.edit
            }))
        }

        handleRemove = key => {
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
                details2,
                details3,
                details4,
                experience,
                edit
            } = this.state;
        

            return (
                <div id="Experience">
                    <h2>WORK EXPERIENCE</h2>
                    {experience.map(exp => {
                        return(
                            <div key={exp.id} onClick={() => this.handleRemove(exp.id)}>
                                <div>
                                    <p className="experience-role">{exp.role}</p>
                                    <p className="experience-company">{exp.company}</p>
                                    <p className="experience-date">{exp.date}{exp.location}</p>
                                 <ul>  
                                 <li className="experience-details">{exp.details}</li>
                                 <li className="experience-details2">{exp.details2}</li>
                                 <li className="experience-details3">{exp.details3}</li>
                                 <li className="experience-details4">{exp.details4}</li>

                                 </ul> 
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
                    <label htmlFor="details2">Details 2</label>
                    <input
                    id="details2"
                    type="text"
                    value={details2}
                    onChange={this.handleDetails2Change}
                    />
                    <label htmlFor="details3">Details 3</label>
                    <input
                    id="details3"
                    type="text"
                    value={details3}
                    onChange={this.handleDetails3Change}
                    />
                    <label htmlFor="details4">Details 4</label>
                    <input
                    id="details4"
                    type="text"
                    value={details4}
                    onChange={this.handleDetails4Change}
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