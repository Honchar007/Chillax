//  Imports
import React from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements'

const Navbar = () => (
  <>
    <Nav>
      <NavLink to="/">
        <img
          className="logo"
          src="https://api.freelogodesign.org/files/34eb4009482b4c919fdfaf4f64249cd9/thumb/logo_200x200.png?v=637534660950000000"
          alt="logo"
        />
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/explore" activeStyle>
          Explore
        </NavLink>
        <NavLink to="/messages" activeStyle>
          Messanger
        </NavLink>
        <NavLink to="/parties" activeStyle>
          Patries
        </NavLink>
        <NavLink to="/profile" activeStyle>
          Profile
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/signin">Sign in</NavBtnLink>
      </NavBtn>
    </Nav>
  </>
)

export default Navbar
