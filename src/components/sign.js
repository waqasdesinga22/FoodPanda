import React, { Component } from 'react';


import './App.css';

class sign extends Component {
  render() {
    return (
        <form action="/action_page.php">
        <div className="imgcontainer">
          <img src="img_avatar2.png" alt="Avatar" className="avatar"/>
        </div>
      
        <div className="container">
          <label for="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required/>
      
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
              
          <button type="submit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember me
          </label>
        </div>
      
        <div className="container" style="background-color:#f1f1f1">
          <button type="button" className="cancelbtn">Cancel</button>
          <span classNamw="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>
    );
  }
}

export default sign;



