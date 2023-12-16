import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

export class Login extends Component {
  render() {
    return (
      <div className='Login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
        <div className='form_container p-5 rounded bg-white'>
          <form>
            <h3 className='text-center'>Sign In</h3><br/>
            <div className='mb-2'>
              <label htmlFor='Email'>Email</label>
              <input type='email' placeholder='Enter your Email' className='form-control'/>
            </div>
            <div className='mb-2'> 
              <label htmlFor='password'>Password</label>
              <input type='password' placeholder='Enter your password' className='form-control'/>
            </div>
            <div className='d-grid'>
              <br/>
              {/* Utilisez Link au lieu de la balise <a> pour éviter l'avertissement */}
              <Link to="/home" className='btn btn-primary'>Sign in</Link>
              <br/>
            </div>
            <p className='text-right'>
              Forgot Password?<Link to="/signup" className='ms-2'>Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
