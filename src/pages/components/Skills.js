import React, { Component } from "react";

export default class Skills extends Component{
	render() {
		return (
           <div className="container-about">
               <div className="about">
                    <div className="about__left">
                        <h3 className="about__left--heading">ABOUT ME</h3>
                        <p className="about__left--text">
                        Web Development doesn't seem like work to me. I truly enjoy every second of coding a website which looks great and gives the user a unqiue experience. I finished my degree in marketing at Metropolitan State University of Denver. A year later I got a Web Development certificate at University of Denver.
                        <br/><br />
Today I am currently looking for a position at a company where I can showcase my skills in both front-end and back-end development.
                        </p>
                    </div>
                    <div className="about__right">
                        <h3 className="about__right--heading">SKILLS</h3>
                        <ul className="about__right--text">
                            <li>HTML</li>
                            <li>JavaScript</li>
                            <li>Advanced CSS</li>
                            <li>React.js</li>
                            <li>WordPress</li>
                        </ul>
                    </div>
                    <div className="about__text">
                        <ul className="about__text--text">
                            <li>MongoDB</li>
                            <li>Testing</li>
                            <li>Express</li>
                            <li>MySql</li>
                            <li>jQuery</li>
                        </ul>
                    </div>
               </div>
           </div>

            );
	    }
}