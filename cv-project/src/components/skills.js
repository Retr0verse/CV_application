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
                    skill: 'JavaScript(React, Node.js)',
                },
                {
                    id: uniqid(),
                    skill: 'HTML/CSS'
                },
                {
                    id: uniqid(),
                    skill: 'Python(Django)',
                },
                {
                    id: uniqid(),
                    skill: 'C#'
                },
                {
                    id: uniqid(),
                    skill: 'SQL(MySQL)',
                },
                {
                    id: uniqid(),
                    skill: 'Java'
                }
            ],
            edit: false
        }
    }

    handleSkillChange = e => {
        this.setState({
            skill: e.target.value
        })
}

onSubmitSkill = e => {