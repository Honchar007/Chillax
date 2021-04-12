import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Link from 'next/link'

const Registration = () => (
  <>
    <Navbar />
    <div id="login-box">
      <div className="left">
        <h1 className="logH">Sign up</h1>

        <input
          className="logInput"
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          className="logInput"
          type="text"
          name="email"
          placeholder="E-mail"
        />
        <input
          className="logInput"
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          className="logInput"
          type="password"
          name="password2"
          placeholder="Retype password"
        />

        <input
          className="logBtn"
          type="submit"
          name="signup_submit"
          value="Sign me up"
        />
      </div>

      <div className="right">
        <span className="loginwith">
          Sign in with
          <br />
          social network
        </span>

        <button className="social-signin facebook">Log in with facebook</button>
        <button className="social-signin twitter">Log in with Twitter</button>
        <button className="social-signin google">Log in with Google+</button>
      </div>
      <div className="or">OR</div>
    </div>
  </>
)
export default Registration
