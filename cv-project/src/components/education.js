import React, { Component } from 'react';
import uniqid from 'uniqid';

class Education extends Component {
    constructor() {
        super();


        this.state = {
            degreeType: '',
            major: '',
            school: '',
            startDate: '',
            endDate: '',
            location: '',
            education: [
                {
                    id: uniqid(),
                    degreetype: 'Bachelors of Science',
                    major: 'Software Development',
                    school: 'Rivercity University',
                    date: 'Sept 2020 - May 2022',
                    location: 'San Antonio, TX',


                }
            ],
            edit: false
        }
    }

    handleDegreeChange = e => {
        this.setState({
            degreeType: e.target.value
        })
    }

    handleMajorChange = e => {
        this.setState({
            major: e.target.value
        })
    }

    handleSchoolChange = e => {
        this.setState({
            school: e.target.target
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

    onSubmitEducation = e => {
        e.preventDefault();
        this.setState({
            education: this.state.education.concat({
                id: uniqid(),
                degree: this.state.degreeType,
                major: this.state.major,
                school: this.state.school,
                date: this.state.startDate + ' - ' + this.state.endDate,
                location: this.state.location

            }),
            degreeType: '',
            major: '',
            school: '',
            startDate: '',
            endDate: '',
            location: ''
        })

        this.toggleEdit();
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    handleRemove = key => {
        const newEdu = this.state.education.filter(education => education.id !== key)

        this.setState({
            education: newEdu
        })
    }

    render() {
        const {
            degreeType,
            major,
            school,
            startDate,
            endDate,
            location,
            education,
            edit
        } = this.state;

        return (
            <div id="Education">
                <h2>EDUCATION</h2>
                {education.map(edu => {
                    return (
                        <div key={edu.id} onClick={() => this.handleRemove(edu.id)}>
                            <div>
                                <p className="education-degree">{edu.degree}</p>
                                <p className="education-major">{edu.major}</p>
                                <p className="education-school">{edu.school}</p>
                                <p className="education-date">{edu.date}</p>
                                <p className="education-location">{edu.location}</p>
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
                    <form id="education-add" className="edit-form">
                        <label htmlFor="degree-type">Degree Type</label>
                        <input
                            id="degree-type"
                            type="text"
                            value={degreeType}
                            onChange={this.handleDegreeChange}
                        />
                        <label htmlFor="major">Major</label>
                        <input
                            id="major"
                            type="text"
                            value={major}
                            onChange={this.handleMajorChange}
                        />
                        <label htmlFor="school">School</label>
                        <input
                            id="school"
                            type="text"
                            value={school}
                            onChange={this.handleSchoolChange}
                        />
                        <label htmlFor="start-date">Start Date</label>
                        <input
                            id="start-date"
                            type="text"
                            value={startDate}
                            placeholder="Month &amp; Year"
                            onChange={this.handleStartDateChange}
                        />
                        <label htmlFor="end-date">End Date</label>
                        <input
                            id="end-date"
                            type="text"
                            value={endDate}
                            placeholder="Month &amp; Year"
                            onChange={this.handleEndDateChange}
                        />
                        <label htmlFor="location">Location</label>
                        <input
                            id="location"
                            type="text"
                            value={location}
                            onChange={this.handleLocationChange}
                        />
                        <button
                            type="button"
                            onClick={this.onSubmitEducation}
                        >
                            Add Education
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

export default Education;
