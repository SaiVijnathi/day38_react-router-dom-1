import React from 'react'
import { Link } from 'react-router-dom';


function LogIn() {
  return (
    <div>
        <form>
            <h2>LogIn</h2>
            
            <div>
                <label>Email</label>
                <input type='email' placeholder="Enter your Email"></input>
            </div>
            <div>
                <label>Password</label>
                <input type='password' placeholder="Enter your password"></input>
            </div>
            <div>
                <button type='button'>LogIn</button>
                <Link to="/dashboard">LogIn</Link>
            </div>
        </form>
        <br></br>
        <br></br>
        <Link to="/signup">SignUp</Link>
    </div>
  )
}

export default LogIn;