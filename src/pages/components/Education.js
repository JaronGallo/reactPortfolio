
import React, { Component } from "react";

export default class Education extends Component{
	render() {
		return (

<div className="row">
        <div className="container" id="exp">
            <h2 style={{textAlign: 'center'}}>Education</h2>
            <h3>Certificate, University of Denver Coding Bootcamp --- 2018</h3>
            <h3>Bachelors of Science, Marketing --- 2016</h3>
                    <div className="center">
                    
                    <br />
                    <button className="ui button teal big" type="button" id="docs">Resume via Google Docs</button>
                          <div className="ui modal test">
                      <i className="close icon"></i>
                      <div className="header">
                        My Resume
                      </div>
                      <div className="content" style={{height: '530px'}}>
                        <embed src="Resume.pdf" type="application/pdf" style={{width: '100%',height: '100%',border: 'none'}}>
                          </embed>
                        
                      </div>
                      <div className="actions">
                        <div className="ui positive right labeled icon button" style={{marginBottom:"1em"}}>
                          All Done
                          <i className="checkmark icon"></i>
                        </div>
                      </div>
                    </div>
                    </div>
        </div>
    </div>
        );
	}}