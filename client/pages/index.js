//  Import
import React from 'react'
import { StaticRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Home from './home'
import Explore from './exploration'
import Messanger from './messanger'
import Profile from './profile'
import Party from './parties'
import Head from 'next/head'
import { signIn, signOut, useSession, getSession } from 'next-auth/client'

//  Styles
//const [session, loading] = useSession()
class Index extends React.Component {
  async componentDidMount() {
    const session = await getSession()
    this.setState({ session })
  }

  render() {
    return (
      <>
        <Head>
          <title>Chillax</title>
        </Head>
        <Navbar />
        <div className="main">
          {this.state?.session != null && (
            <div>You are logged in! Hello, {this.state?.session.user.name}</div>
          )}
          {!this.state?.session == null && <div>You are not logged in</div>}

          <h1>Home</h1>
          <img
            src="https://api.freelogodesign.org/files/34eb4009482b4c919fdfaf4f64249cd9/thumb/logo_200x200.png?v=0"
            alt="logo"
          />
        </div>
      </>
    )
  }
}

export default Index
/* */
