//  Import
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/pages/index'
import Explore from './components/pages/exploration'
import Messanger from './components/pages/messanger'
import Profile from './components/pages/profile'
import Party from './components/pages/parties'
import Login from './components/pages/login'

//  Styles
import './components/styles/App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/messages" exact component={Messanger} />
        <Route path="/explore" exact component={Explore} />
        <Route path="/parties" exact component={Party} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/signin" exact component={Login} />
      </Switch>
    </Router>
  )
}

export default App
