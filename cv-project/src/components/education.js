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

    
