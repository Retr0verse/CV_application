import React, { Component } from 'react';
import Contact from './contact';
import Objective from './objective';
import Education from './education';
import Skills from './skills';

class Leftside extends Component {
    render() {
        return (
            <leftside id="Leftside">
                <Contact />
                <Objective />
                <Education />
                <Skills />

            </leftside>
        )
    }
}
    export default Leftside;