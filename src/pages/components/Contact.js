import React, { Component } from "react";
import axios from 'axios';



export default class ContactMe extends Component{

    constructor(){
        super();

        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({[ e.target.name]: e.target.value });
    }

    async handleSubmit(e) {
        e.preventDefault();
        e.target.reset();
        const  { name, email, message } = this.state;

        const form = await axios.post('/api/form', {
            name,
            email,
            message
        });
        
    }

	render() {
		return (
            <div className="container-contact">
                <div className="contact">
                    <h1 className="contact__heading">Contact Me.</h1>
                            <form onSubmit={this.handleSubmit.bind(this)} className="contact__form" method="POST">
           
                                <div className="contact__form--fields" >
                                    <div className="contact__form--fields-1" >
                                        <input 
                                        type="text" 
                                        name="name" 
                                        required placeholder="Your Name" 
                                        onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="contact__form--fields-2">
                                        <input 
                                        type="text" 
                                        name="email" 
                                        placeholder="Your Email" 
                                        onChange={this.handleChange}/>
                                    </div>
                                </div>
                                
                                <div className="contact__form--message">
                                    <textarea
                                    name="message"
                                    maxlength="500"
                                    placeholder="Your Message..."
                                    onChange={this.handleChange}
                                 ></textarea>
                                </div>
                                <div className="contact__form--btn">                                
                                    <input type="submit" name='submit' value="Send"/>
                                </div>
                            </form>
                            <p className="contact__text">Send me a message! I would love to hear from you.</p>  
                </div>
            </div>
            );
	   }
}