import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Head from 'next/head'
import Link from 'next/link'

const CreateParty = () => (
  <>
    <Head>
      <title>Chillax:Login</title>
    </Head>
    <Navbar />
    <div className="createParty">
      <input type="text" name="" placeholder="Halloween" id="" />
      <input type="text" name="" placeholder="Halloween" id="" />
      <input type="text" name="" placeholder="Halloween" id="" />
      <input type="text" name="" placeholder="Halloween" id="" />
      <input type="text" name="" placeholder="Halloween" id="" />
    </div>
  </>
)
export default CreateParty
