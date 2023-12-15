import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Rout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchVisible: false,
      isButtonClicked: false,
    };
  }

  handleButtonClick = () => {
    this.setState({ isButtonClicked: true });
  };

  toggleSearch = () => {
    this.setState((prevState) => ({
      isSearchVisible: !prevState.isSearchVisible,
    }));
  };

  

  render() {
    const buttonStyle = {
      backgroundColor: this.state.isButtonClicked ? 'blue' : 'initial',
      // Ajoutez d'autres styles selon vos besoins
      padding: '10px',
      border: 'none',
      cursor: 'pointer',
    };
    const { isSearchVisible } = this.state;

    const handleLogout = () => {
      // Logique de déconnexion à mettre ici
      console.log('Déconnexion effectuée');
    };

    return (
    
      <nav style={{boxShadow: "1px 2px 9px black"}} className="navbar navbar-expand-lg navbar-dark bg-black-50">
        <Link className="navbar-brand" style={{ fontSize: 30, fontWeight: "bolder" }}><b>MNG</b></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link text-black " style={{ fontWeight: 'bold'}} to="/home">Home</Link>
            </li>
            &nbsp;
            
            <li className="nav-item">
              <Link className="nav-link text-black" style={{ fontWeight: 'bold' }} to="/about">About Us</Link>
            </li>
            &nbsp;
            <li className="nav-item">
              <Link className="nav-link text-black" style={{ fontWeight: 'bold' }} to="/contact">Contact</Link>
            </li>
            &nbsp;
            <li className="nav-item" style={{ marginInlineEnd: '18rem' }}></li>
      
            <li className="nav-item">
              <div className="input-group">
                
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
              
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-black rounded-circle"
                    type="button"
                    id="button-addon2"
                    style={{boxShadow: "10px 5px 5px black"}}
                  >
                  &nbsp;
                    <i class="bi bi-search" style={{color: 'black', fontWeight:"bolder"}}></i>
                  </button>
                </div>
              </div>
            </li>
            <li className="nav-item" style={{ marginInlineEnd: '18rem' }}></li>
          <li className="nav-item"> 
          <Link style={{backgroundColor:'gold', borderWidth:'2px'}} className="btn btn-outline-light rounded-pill" onClick={handleLogout} to="/signup">
          <i class="bi bi-box-arrow-in-right" style={{width:'850px', color:'black', fontWeight:'bolder'}}>  Signup</i>
              </Link>
                  

            </li>
          </ul>
        </div>
      </nav>
    );
  }
}



export default Rout;
