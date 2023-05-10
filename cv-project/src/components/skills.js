import React, { Component } from 'react';
import uniqid from 'uniqid';

class Skills extends Component {
    constructor() {
        super();

        this.state= {
            skill: '',
            skills: [
                {
                    id: uniqid(),
                    skill: 'Git'
                },
                {
                    id: uniqid(),
                    skill: ''
                },
                {
                    id: uniqid(),
                    skill: ''
                },
                {
                    id: uniqid(),
                    skill: ''
                },
                {
                    id: uniqid(),
                    skill: ''
                },
                {
                    id: uniqid(),
                    skill: ''
                },
                {
                    id: uniqid(),
                    skill: ''
                }
            ],
            edit: false
        }
    }

    
}