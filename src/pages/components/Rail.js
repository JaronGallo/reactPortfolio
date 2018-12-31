import React, { Component } from "react";
import Typed from 'react-typed';
import { render } from 'react-dom';

export default class Rail extends Component{
	render() {
        // Train button
        function handleTrainCode(e) {
            window.open('https://github.com/SummitMedia1/trainstationguide');
        }
        function handleTrain(e) {
            window.open('https://github.com/SummitMedia1/trainstationguide');
        }
		return (
        <div className="container-train">
        <div className="train">
            <div className="train__img">
                <img className="train__img--1" src="assets/img/business-coffee-computer-374006.jpg" />
            </div>
            <div className="train__heading">
                <h1 className="train__heading--text"><Typed 
                    strings={['Denver Train Guide'
                    ]} 
                    typeSpeed={50}
                    /> </h1>
                <p className="train__heading--tag">APi's | Firebase</p>
            </div>
            <div className="train__content" >
                <div className="train__content--obj">
                    <p className="train__content--obj-heading">OBJECTIVE</p>
                    <p className="train__content--obj-text" >A group project where my focus was on creating a page that uses Google Maps API to find current location, add markers to each rail station, and provide a link for directions.</p>
                    <div />
                    <div className="train__content--challenge">
                        <p className="train__content--challenge-heading">CHALLENGE</p>
                        <p className="train__content--challenge-text-1">Google Maps API was the hardest feat. A week prior I just learned about using APIs so learning a brand new API was difficult. Through trial and error I learned how to utilize Google Maps API.</p>
                    </div>
                </div>
                <div className="train__content2" >
                    <div className="train__content2--solution">
                        <p className="train__content2--solution-heading">SOLUTION</p>
                        <p className="train__content2--solution-text-1">Scrolling down the main page, the button that says, "Where am I?." This links to my part of the group project.</p>
                        <p className="train__content2--solution-text-2">Google Maps intergraded within the page that first asks permission if user will allow app to see location. After agreeing, an alert shows where you are compared to the custom markers of each rail station. When clicked, the markers shows the name of station, what lines travel there, and a link to Google Maps to get directions straight from your location.</p>
                    </div>
                    <div className="train__content2--btns">
                        <div className="train__content2--btns-1">
                            <button onClick={handleTrainCode}>View Code</button>
                            <button onClick={handleTrain}>View Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


           
            );
	   }
}