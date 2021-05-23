import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Container, Grid, Avatar, Typography } from '@material-ui/core'
import styled from 'styled-components'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'
import PartyMaker from '../../components/PartyMaker'

const Profile = ({ posts, user }) => {
  return (
    <>
      <Navbar />
      <Container>
        <Grid container>
          <Grid item lg={4} md={4} sm={6} xs={10}>
            <ProfileInfo userInfo={user} />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={10}>
            <PartyMaker posts={posts} />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
export default Profile

export async function getServerSideProps(context) {
  const [postsRes, userRes] = await Promise.all([
    fetch(`http://localhost:5000/api/post`),
    fetch(`http://localhost:5000/api/post/user/${context.query.nickname}`),
  ])
  const [posts, user] = await Promise.all([postsRes.json(), userRes.json()])
  return { props: { posts, user } }
}
