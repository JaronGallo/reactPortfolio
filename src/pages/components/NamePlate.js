import React, { Component } from "react";

export default class NamePlate extends Component{

    
	render() {

        function handleAbout (e) {
            e.preventDefault();
            window.location.assign('/about');
        }
        function handleWork (e) {
            e.preventDefault();
            window.location.assign("/");
            }
            
        function handleGit(e) {
        e.preventDefault();
                    
        window.open('https://github.com/JaronGallo');
        }    

        function handleResume(e) {
        e.preventDefault();
                    
        window.open('assets/img/Resume.pdf');
        }     


        function handleContact (e) {
            e.preventDefault();
            window.location.assign('/contact');
            }
		return (
            <div className="container-nameplate">
                <div className="nameplate">
                    <div className="nameplates">
                        <div className="nameplates__logo" >
                            <img className="nameplates__logo--name" onClick={handleWork} src="assets/img/Logo.svg" />
                        </div>
                        <div className="nameplates__btns">
                            <button className="nameplates__btns--work" onClick={handleWork}>Work</button>
                            <button className="nameplates__btns--about" onClick={handleAbout}>About</button>
                            <button className="nameplates__btns--git" onClick={handleGit}>Github</button>
                            <button className="nameplates__btns--resume" onClick={handleResume}>Résumé</button>
                            <button className="nameplates__btns--border" onClick={handleContact}>Contact</button>
                        </div>
                    </div>
                </div>
            </div>         
        );
	}}