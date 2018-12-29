import React, { Component } from "react";

import Education from '../components/Education.js';
import Footer from '../components/Footer.js';
import Goals from '../components/Goals.js';
import NamePlate from '../components/NamePlate.js';
import Projects from '../components/Projects.js';
import Skills from '../components/Skills.js';
import Rail from '../components/Rail.js';

class Project2 extends Component{
	render() {
		return (
            <div className="container-fluid">
                <NamePlate />
				<Rail />
				<Footer />
            </div>
		);
	}
}
export default Project2;