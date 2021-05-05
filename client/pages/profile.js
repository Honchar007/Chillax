import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Container, Grid, Avatar, Typography } from '@material-ui/core'
import styled from 'styled-components'
import ProfileInfo from '../components/ProfileInfo/ProfileInfo'
import { getSession } from 'next-auth/client'

class Profile extends React.Component {
session = await getSession({req});
  
  render() {

    return (
      <>
        <Navbar />
        <Container>
          <Grid container>
            <Grid
              item
              lg={3}
              md={4}
              sm={12}
              xs={12}
              style={{ background: 'red' }}
            >
              <ProfileInfo />
            </Grid>
            <Grid item xs style={{ background: 'blue' }}>
              xyz
            </Grid>
          </Grid>
        </Container>
      </>
    )
  }
}
export default Profile
