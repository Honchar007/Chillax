import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Container, Grid, Avatar, Typography } from '@material-ui/core'
import styled from 'styled-components'
import ProfileInfo from '../components/ProfileInfo/ProfileInfo'
import PartyMaker from '../components/PartyMaker'

const Profile = ({ posts }) => {
  if (!posts) 'Loading...'

  return (
    <>
      <Navbar />
      <Container>
        <Grid container>
          <Grid item lg={3} md={3} sm={3} xs={3}>
            <ProfileInfo />
          </Grid>
          <Grid item xs={8}>
            <PartyMaker posts={posts} />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
export default Profile
export async function getServerSideProps() {
  const res = await fetch(`http://localhost:5000/api/post`)
  const posts = await res.json()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts },
  }
}
