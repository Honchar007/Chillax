import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Link from 'next/link'
import Head from 'next/head'

const Signin = () => {
  return (
    <>
      <Head>
        <title>Chillax:Login</title>
      </Head>
      <Navbar />
      <div className="login">
        <form action="/api/login" className="box">
          <h1 className="logH" data-text="Login">
            Login
          </h1>
          <input
            className="logInput"
            type="text"
            placeholder="Username"
            name=""
            id="username"
          />
          <input
            className="logInput"
            type="password"
            placeholder="Passwod"
            name=""
            id="password"
          />
          <input
            className="logBtn"
            type="submit"
            value="Log in"
            placeholder=""
            name=""
            id="logBtn"
          />
          <Link href="/registration" passHref>
            <input
              className="logBtn"
              onClick="window.location.href = 'my-account';"
              type="submit"
              value="Sign up"
              placeholder=""
              name=""
              id="regBtn"
            />
          </Link>
        </form>
      </div>
    </>
  )
}
export default Signin
