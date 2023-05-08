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
                    company: 'Nudle',
                    date: 'June 2021 - Current',
                    location: '/ Los Angeles, CA',
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie nunc non blandit massa enim nec dui.'

                },
                {
                    id: uniqid(),
                    role: 'Junior Web Developer',
                    company: 'Blume',
                    date: 'September 2019 - June 2021'
                }
            ]
    }





        export default Experience;