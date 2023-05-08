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

            experience [
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
                
            )

        export default Experience;