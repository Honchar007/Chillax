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
          <Grid item lg={5} md={5} sm={4} xs={4}>
            <ProfileInfo userInfo={user} />
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

export async function getServerSideProps(context) {
  const [postsRes, userRes] = await Promise.all([
    fetch(`http://localhost:5000/api/post`),
    fetch(`http://localhost:5000/api/post/user/${context.query.nickname}`),
  ])
  const [posts, user] = await Promise.all([postsRes.json(), userRes.json()])
  return { props: { posts, user } }
}
