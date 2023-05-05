import React, { Component } from "react";
import Title from './Title';
import Leftside from './Leftside';
import Rightside from './Rightside';

class CV extends Component {
    render() {
        return (
            <div id="CV">
                <Title />
                <Leftside />
                <Rightside />
            </div>
        )
    }
}

export default CV;