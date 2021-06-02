import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Container, Grid, Avatar, Typography } from '@material-ui/core'
import styled, { keyframes } from 'styled-components'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'
import PartyMaker from '../../components/PartyMaker'
import Link from 'next/link'

const StyledLink = styled.a`
  color: #fff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
    0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
  margin: 0;
  position: absolute; /* 2 */
  top: 50%; /* 3 */
  transform: translate(0, -50%);
  display: flex;
  font-size: 50px;
  width: 100%;
  justify-content: center;
  transition: 0.4s ease all;

  &:hover {
    transition: 0.4s ease all;
    color: #d7f0e7;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #ff9102,
      0 0 82px #ff9102, 0 0 92px #ff9102, 0 0 102px #ff9102, 0 0 151px #ff9102;
  }
`

const Profile = ({ posts, user }) => {
  return (
    <>
      <Head>
        <title>Chillax:Profile</title>
      </Head>
      <Navbar />
      {user.length != 0 && (
        <Container>
          <Grid container>
            <Grid item lg={4} md={4} sm={6} xs={10}>
              <ProfileInfo userInfo={user} />
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={10}>
              <PartyMaker userName={user[0].github} posts={posts} />
            </Grid>
          </Grid>
        </Container>
      )}
      {user.length == 0 && (
        <div>
          <Link href="/fillProfile" passHref>
            <StyledLink>FillProfile</StyledLink>
          </Link>
        </div>
      )}
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

/*{"_id":{"$oid":"60a3e8eea336b8122c656396"},"nickName":"Andrey","email":"andrey2002335@gmail.com","instagram":"MyGram","github":"Honchar007","telegram":"MyTGram","photo":"https://avatars.githubusercontent.com/u/54860596?v=4","normalLevel":{"$numberInt":"0"},"__v":{"$numberInt":"0"}} */
