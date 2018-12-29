import React, { Component } from "react";

import Education from '../components/Education.js';
import Footer from '../components/Footer.js';
import Goals from '../components/Goals.js';
import NamePlate from '../components/NamePlate.js';
import Projects from '../components/Projects.js';
import Skills from '../components/Skills.js';
import Project1 from '../components/MongodbProject.js';

class Project extends Component{
	render() {
		return (
            <div className="container-fluid">
                <NamePlate />
				<Project1 />
				<Footer />
            </div>
		);
	}
}
export default Project;