import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'


export class Signup extends Component {
  render() {
    return (
        <div className='signup template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
        <div className='form_container p-5 rounded bg-white'>
        <form>
          <h3 className='text-center'>Sign Up</h3><br/>
          <div className='mb-2'>
              <label htmlFor='Username'>Username</label>
              <input type='text' placeholder='Enter your Username' className='form-control'/>
          </div>
          <div className='mb-2'>
              <label htmlFor='Username'>Countries</label>
              <input type='text' placeholder='Enter your Countries' className='form-control'/>
          </div>
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
         <Link to="/" className='btn btn-primary'><button className='btn btn-primary'>Sign up</button></Link> 
          <br/>
          </div>
        </form>
        </div>
  
        </div>
    )
  }
}

export default Signup