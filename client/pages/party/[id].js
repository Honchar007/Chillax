import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Navbar from '../../components/Navbar/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import Avatar from '@material-ui/core/Avatar'
import AvatarGroup from '@material-ui/lab/AvatarGroup'

const FormBtn = styled.button`
  border: 2px solid;
  background: transparent;
  display: block;
  margin: 25px auto;

  text-align: center;
  padding: 14px 40px;

  outline: none;
  color: #ffffff;
  letter-spacing: 4px;
  border-radius: 25px;
  transition: 0.25s;
  cursor: pointer;
  box-shadow: 0 0 5px #902e99, 0 0 25px #902e99;
  &:hover {
    background: #a200ff;
  }
`

const Wrapper = styled.div`
  background: white;
  border-radius: 6px;
  margin: 20px;
  text-align: center;
  background-color: #c300ff;
`
const Owner = styled(Link)`
  text-transform: uppercase;
`
const Visitors = styled(AvatarGroup)`
  bottom: 10px;
  height: 200px;
`
const GridStyled = styled(Grid)`
  margin: 80px;
`
const ImgStyled = styled.img`
  width: 400px;
  height: 400px;
  margin: 3px;
`
const TypographyName = styled(Typography)`
  text-transform: uppercase;
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 10px;
`

function Post({ post }) {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Grid container>
          <GridStyled item xs={12} sm={12} lg={12} xl={12}>
            <Box m={1}>
              <TypographyName>{post.title} </TypographyName>
            </Box>
          </GridStyled>
          <Grid item xs={7} sm={7} lg={5} xl={5}>
            <ImgStyled src={post.imgUrl} alt="Picture of the author" />
          </Grid>
          <Grid item xs={4} sm={5} lg={5} xl={5}>
            <div>{post.text}</div>

            <FormBtn color="inherit" href="/profile" passHref>
              Owner : Andrey
            </FormBtn>
            <Visitors max={4}>
              <Avatar
                alt="Remy Sharp"
                src="https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              />
              <Avatar
                alt="Travis Howard"
                src="https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              />
              <Avatar
                alt="Cindy Baker"
                src="https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              />
              <Avatar
                alt="Agnes Walker"
                src="https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              />
              <Avatar
                alt="Trevor Henderson"
                src="https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              />
            </Visitors>
          </Grid>
        </Grid>
      </Wrapper>
    </>
  )
}

export default Post

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:5000/api/post/${context.query.id}`)
  const post = await res.json()

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post },
  }
}
