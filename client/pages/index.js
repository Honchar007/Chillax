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

//  Styles

function App() {
  return (
    <>
      <Head>
        <title>Chillax</title>
      </Head>
      <Navbar />
    </>
  )
}

export default App
