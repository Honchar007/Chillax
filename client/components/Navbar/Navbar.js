//  Imports
import styled from 'styled-components'
import React from 'react'
import Link from 'next/link'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements'
import { signIn, signOut, useSession, getSession } from 'next-auth/client'

class Navbar extends React.Component {
  async componentDidMount() {
    const session = await getSession()
    this.setState({ session })
  }

  render() {
    return (
      <Nav>
        <Link href="/home" passHref>
          <NavLink>
            <img
              className="logo"
              src="https://api.freelogodesign.org/files/34eb4009482b4c919fdfaf4f64249cd9/thumb/logo_200x200.png?v=637534660950000000"
              alt="logo"
            />
          </NavLink>
        </Link>
        <Bars />
        <NavMenu>
          <Link href="/exploration" passHref>
            <NavLink
              activeStyle={{
                borderBottom: 'solid 3px #fff',
                paddingBottom: '1em',
              }}
              exact
            >
              Explore
            </NavLink>
          </Link>
          <Link href="/messanger" passHref>
            <NavLink
              activeStyle={{
                borderBottom: 'solid 3px #fff',
                paddingBottom: '1em',
              }}
              exact
            >
              Messanger
            </NavLink>
          </Link>
          <Link href="/parties" passHref>
            <NavLink
              activeStyle={{
                borderBottom: 'solid 3px #fff',
                paddingBottom: '1em',
              }}
              exact
            >
              Patries
            </NavLink>
          </Link>
          <Link href={'/profile'} passHref>
            <NavLink
              activeStyle={{
                borderBottom: 'solid 3px #fff',
                paddingBottom: '1em',
              }}
              exact
            >
              Profile
            </NavLink>
          </Link>
        </NavMenu>
        {!this.state?.session && (
          <NavBtn onClick={signIn}>
            <NavBtnLink>Sign in</NavBtnLink>
          </NavBtn>
        )}
        {this.state?.session && (
          <NavBtn onClick={signOut}>
            <NavBtnLink>Log out</NavBtnLink>
          </NavBtn>
        )}
      </Nav>
    )
  }
}
/**href="/login" */
export default Navbar
