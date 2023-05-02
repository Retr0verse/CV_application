import React, { Component } from 'react';
import Contact from './Contact';
import Objective from './Objective';
import Education from './Education';
import Skills from './Skills';

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