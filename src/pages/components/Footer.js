import React, { Component } from "react";

export default class Footer extends Component{
	render() {

        function handleResume(e) {
            e.preventDefault();
                        
            window.open('assets/img/Resume.pdf');
            }     
    
    
            function handleContact (e) {
                e.preventDefault();
                window.location.replace('/contact');
                }
		return (
            <div className="container-footer">
                <div className="footer">
                    <div className="footer__btns">
                        <button className="footer__btns--1"onClick={handleResume}>Résumé</button>
                        <button className="footer__btns--2"onClick={handleContact}>Contact</button>
                    </div>           
                </div>
            </div>
                );
	        }
}