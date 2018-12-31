import React, { Component } from "react";
import Typed from 'react-typed';
import { render } from 'react-dom';

export default class MongodbProject extends Component{
	render() {
        // Train button
        function handleMongoCode(e) {
            window.open('https://github.com/JaronGallo/formsWithMongo');
        }
        function handleMongo(e) {
            window.open('https://desolate-sea-56537.herokuapp.com/');
        }
		return (
            <div className="container-mongodb">
                <div className="mongodb">
                    <div className="mongodb__img">
                        <img className="mongodb__img--1" src="assets/img/business-coffee-computer-374006.jpg" />
                    </div>
                    <div className="mongodb__heading">
                        <h1 className="mongodb__heading--text">
                            <Typed 
                            strings={['Forms with MongoDb'
                            ]} 
                            typeSpeed={50}
                            /> 
                        </h1>
                        <p className="mongodb__heading--tag">MongoDb | UI</p>
                    </div>
                    <div className="mongodb__content">
                        <div className="mongodb__content--obj">
                            <p className="mongodb__content--obj-heading">OBJECTIVE</p>
                            <p className="mongodb__content--obj-text" >Build an app that saves data the user enters into the form. Have a fresh user interface that works on both desktop and mobile devices.</p>
                            <div />
                            <div className="mongodb__content--challenge">
                                <p className="mongodb__content--challenge-heading">CHALLENGE</p>
                                <p className="mongodb__content--challenge-text-1">Lots of challenges were involved in
                                    building this project but the largest was to make sure that the
                                    database would react with the front-end. The data inputted had to be validated before entered into the database. When the user entered in false data,
                                    such as a email address without "@", they will be prompted to enter a valid email.</p>
                                <p className="mongodb__content--challenge-text-2">Responsiveness was important to have when the user changed the window size or was on mobile.</p>
                            </div>
                        </div>
                        <div className="mongodb__content2" >
                            <div className="mongodb__content2--solution">
                                <p className="mongodb__content2--solution-heading">SOLUTION</p>
                                <p className="mongodb__content2--solution-text-1">Created a form that requires First Name, Email, Password and Repeat Password. Built and styled the app using Materialize (CSS Framework) and also used media queries (Styling the site based on screen size) to make sure the user interface was clean no matter what size of screen.</p>
                                <p className="mongodb__content2--solution-text-2">Used mongo.js and mongoose.js to link my server to the database and push data if validated by schema and front-end. Made button that links to an API where the user can view or delete the database.</p>
                            </div>
                            <div className="mongodb__content2--btns">
                                <div className="mongodb__content2--btns-1">
                                    <button onClick={handleMongoCode}>View Code</button>
                                    <button onClick={handleMongo}>View Project</button>
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            );
	   }
}