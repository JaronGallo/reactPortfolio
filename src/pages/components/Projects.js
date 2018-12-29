import React, { Component } from "react";

export default class Projects extends Component{
	render() {

        function handleOcto(e) {
            window.location.assign("/project3");
        }

        function handleTrain(e) {
            window.open('https://github.com/SummitMedia1/trainstationguide');

        }
        function handleNexter(e) {
            window.open('https://nexter-jarongallo.herokuapp.com/');

        }
        function handleNatours(e) {
            window.open('https://natours-jarongallo.herokuapp.com/');

        }
        function handleTrillo(e) {
            window.open('https://trillo-jarongallo.herokuapp.com/');

        }

        function handleForms(e) {
            window.open('https://desolate-sea-56537.herokuapp.com/');
        }

        function handleGif(e) {
            window.open('https://github.com/JaronGallo/GiphyApi');
        }

        function handleLiri(e) {
            window.open('https://github.com/JaronGallo/LIRI_Bot');
        }

        function handleMongoInfo(e) {
            e.preventDefault();
            window.location.assign("/project");
        }

        function handleRail(e) {
            e.preventDefault();
            window.location.assign("/project2");
        }
		return (

            <div className="container-content">

                <div className="content">
                            <img className="content__img--left" src="assets/img/house-4.jpeg" />
                            <div className='content__textright'>
                                <h2 className='content__textright--name'>Nexter</h2>
                                <p className='content__textright--info'>Landing page for a realtors site, no Bootstrap, just HTML and CSS!</p>
                                <p className='content__textright--detail'>CSS Grid | Sass</p>
                                <div className="content__textright--btn">
                                    <button  onClick={handleNexter}>View Project</button>
                                    <button onClick={handleNexter}>View Code</button>
                                </div>
                                
                            </div>       
                </div>

                <div className="content">
                            <img className="content__img--right" src="assets/img/hotel-2.jpg" />
                            <div className='content__textleft'>
                                <h2 className='content__textleft--name'>Trillo</h2>
                                <p className='content__textleft--info'>Landing page for fake company using flexbox CSS, just HTML and CSS!</p>
                                <p className='content__textleft--detail'>CSS | Flexbox</p>
                                <div className="content__textleft--btn">
                                    <button onClick={handleTrillo}>View Project</button>
                                    <button onClick={handleNexter}>View Code</button>
                                </div>
                            </div>       
                </div>
           
                <div className="content">
                            <img className="content__img--left" src="assets/img/hero-small.jpg" />
                            <div className='content__textright'>
                                <h2 className='content__textright--name'>Natours</h2>
                                <p className='content__textright--info'>Learned from course called Advanced CSS and Sass, no Bootstrap, just HTML and CSS!</p>
                                <p className='content__textright--detail'>CSS | Sass</p>
                                <div className="content__textright--btn">
                                    <button onClick={handleNexter}>View Project</button>
                                    <button onClick={handleNexter}>View Code</button>
                                </div>
                            </div>       
                </div>

                <div className="content">
                            <img className="content__img--right" src="assets/img/database.jpg" />
                            <div className='content__textleft'>
                                <h2 className='content__textleft--name'>Forms with MongoDb</h2>
                                <p className='content__textleft--info'>Created a basic form that saves data to a Mongo Database and also has a clean UI.</p>
                                <p className='content__textleft--detail'>MongoDb | UI</p>
                                <div className="content__textleft--btn">
                                    <button onClick={handleMongoInfo}>View More</button>
                                    <button onClick={handleNexter}>View Code</button>
                                </div>
                            </div>       
                </div>

                <div className="content">
                            <img className="content__img--left" src="assets/img/michal-parzuchowski-262751-unsplash.jpg" />
                            <div className='content__textright'>
                                <h2 className='content__textright--name'>Denver Train Guide</h2>
                                <p className='content__textright--info'>Developed a interactive train app for Denver with times, weather updates, news, and directions.</p>
                                <p className='content__textright--detail'>APIs | Firebase</p>
                                <div className="content__textright--btn">
                                    <button onClick={handleTrain}>View More</button>
                                    <button onClick={handleNexter}>View Code</button>
                                </div>
                            </div>       
                </div>

                <div className="content">
                            <img className="content__img--right" src="assets/img/database.jpg" />
                            <div className='content__textleft'>
                                <h2 className='content__textleft--name'>Octothorpe (Education Tool)</h2>
                                <p className='content__textleft--info'>React app that takes all of the videos from my Web Development program and cuts out silence and irrelevant infomation.</p>
                                <p className='content__textleft--detail'>User Auth | React.js</p>
                                <div className="content__textleft--btn">
                                    <button onClick={handleOcto}>View More</button>
                                    <button onClick={handleNexter}>View Code</button>
                                </div>
                            </div>       
                </div>

            </div>
            );
	    }
    }