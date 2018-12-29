import React, { Component } from "react";
import Typed from 'react-typed';
import { render } from 'react-dom';

export default class Octo extends Component{
	render() {
		return (
            <div className="container-octothorpe">
                <div className="octothorpe">
                    <div className="octothorpe__img">
                        <img className="octothorpe__img--1" src="assets/img/business-coffee-computer-374006.jpg" />
                    </div>
                    <div className="octothorpe__heading">
                        <h1 className="octothorpe__heading--text"><Typed 
                            strings={['Octothorpe'
                            ]} 
                            typeSpeed={50}
                            /> </h1>
                        <p className="octothorpe__heading--tag">User Auth | React.js</p>
                    </div>
                    <div className="octothorpe__content" >
                        <div className="octothorpe__content--obj">
                            <p className="octothorpe__content--obj-heading">OBJECTIVE</p>
                            <p className="octothorpe__content--obj-text" >Implement user authentication using Google and Facebook into our final group project. After being authenticated, routing the user to our page with the videos.</p>
                            <div />
                            <div className="octothorpe__content--challenge">
                                <p className="octothorpe__content--challenge-heading">CHALLENGE</p>
                                <p className="octothorpe__content--challenge-text-1">Given a 4 week window to finish the project, I knew how to use Facebook and Google authentication but not in React. I first built the authentication using regular JavaScript but had a hard time getting it to connect to our React site. I ended up having to re-code the whole thing in order to be compatible.</p>
                            </div>
                        </div>
                        <div className="octothorpe__content2" >
                            <div className="octothorpe__content2--solution">
                                <p className="octothorpe__content2--solution-heading">SOLUTION</p>
                                <p className="octothorpe__content2--solution-text-1">A simple landing page which asks the user to sign in using either Facebook or Google. Once they sign in, they are sent to a page with a list of videos that were hand edited to get rid of unimportant info.</p>
                                <p className="octothorpe__content2--solution-text-2">With good communication and team work we were able to put all of our parts together fairly easy but video list not complete.</p>
                            </div>
                            <div className="octothorpe__content2--btns">
                                <div className="octothorpe__content2--btns-1">
                                    <button>View Code</button>
                                    <button>View Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
	   }
}