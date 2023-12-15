import React, { Component } from 'react';
import Rout from './Rout';
import Footer from './Footer';
import './App.css';


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the form submission, e.g., sending an email or saving to a database
    console.log('Form submitted:', this.state);
  };

 

  render() {
    return (
      <div style={{ backgroundImage: 'url("https://www.supdecreation.com/wp-content/uploads/sites/9/2023/03/flyer-cover-atelier-manga-sup-de-creation-1024x483.jpg")', backgroundSize: 'cover',backgroundPosition: '50%', minHeight: '100vh' }} class="card text-center">
        <Rout />
        <br/> <br/>
        <div className="card-body">
          <h1 className="card-title" style={{color: 'gold',fontWeight:'bolder', textShadow: '2px 2px 3px black' }}><b><ins>Contact-Nous</ins></b></h1><hr/>
          <div className="row">
            <div className="col-md-6 offset-md-3 text-left">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" style={{color: 'white', fontWeight:'bolder'}}>Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                  />
                </div><br/>
                <div className="form-group">
                  <label htmlFor="email" style={{color: 'white', fontWeight:'bolder'}}>Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  /><br/>
                </div>
                <div className="form-group">
                  <label htmlFor="message" style={{color: 'white', fontWeight:'bolder'}}>Message:</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                    required
                  /><br/>
                </div>
                <button type="submit" className="btn btn-warning" style={{width: "200px", color: "white", boxShadow:"10px 5px 5px black", fontFamily: "monospace"}}>Sending</button>
              </form>
            </div>
          </div>
        </div>
        <br/><br/>
        <Footer />
      </div>
    );
  }
}

export default Contact;

     // <div style={{ backgroundImage: 'url("https://www.supdecreation.com/wp-content/uploads/sites/9/2023/03/flyer-cover-atelier-manga-sup-de-creation-1024x483.jpg")', backgroundSize: 'cover',backgroundPosition: '50%', minHeight: '100vh' }} class="card text-center">
       
     
        