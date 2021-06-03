import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Navbar from '../../components/Navbar/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { deleteParty } from '../../components/Utilutil'
import Avatar from '@material-ui/core/Avatar'
import AvatarGroup from '@material-ui/lab/AvatarGroup'
import { signIn, signOut, useSession, getSession } from 'next-auth/client'
import ForLoggedMembers from '../../components/ForLoggedMembers'

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
    background: #4e0166;
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

const Post = ({ post, user }) => {
  const id = post._id
  const [theArray, setTheArray] = useState(post.visitors)

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
            <Link
              href={`/profile/[nickname]`}
              as={`/profile/${post.creator}`}
              passHref
            >
              <FormBtn color="inherit">Owner : {post.creator}</FormBtn>
            </Link>

            <ForLoggedMembers
              theArray={theArray}
              setTheArray={setTheArray}
              id={id}
            ></ForLoggedMembers>
            {post.creator == user.name && (
              <FormBtn
                onClick={() => {
                  deleteParty(id)
                }}
                color="inherit"
              >
                Delete this Party
              </FormBtn>
            )}
            <Visitors max={4}>
              {post.visitors.map((visitor, idx) => {
                return <Avatar key={idx} alt={visitor.name} src={visitor.img} />
              })}
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
  const session = await getSession(context)
  if (!session) {
    return { notFound: true }
  }
  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post, user: session.user },
  }
}
