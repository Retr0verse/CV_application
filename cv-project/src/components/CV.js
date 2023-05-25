import React, { Component } from "react";
import Title from './title';
import Leftside from './leftside';
import Rightside from './rightside';

class CV extends Component {
    render() {
        return (
            <div id="CV">
                <Title />
                <div id="main-container">
                <Leftside />
                <Rightside />
                </div>
            </div>
        )
    }
}

export default CV;