import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import SideBar from '../components/SideBar'
import Head from 'next/head'
import MessangerTab from '../components/MessangerTab'
import { signIn, signOut, useSession, getSession } from 'next-auth/client'

class Messanger extends React.Component {
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

        {this.state?.session && <SideBar /> && (
          <MessangerTab
            img={this.state?.session.user.image}
            name={this.state?.session.user.name}
            loggedIn={true}
          />
        )}
        {!this.state?.session && <div>you are not logged in</div>}
        <div className="main"></div>
      </>
    )
  }
}

export default Messanger
