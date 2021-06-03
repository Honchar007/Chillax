import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import CardParty from '../components/CardParty'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Link from 'next/link'

const PartyWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`
const CardPart = styled(Card)`
  max-width: 345px;
  min-width: 345px;
  &:hover {
    box-shadow: 0px 3px 15px #e917de;
  }
`

const cutHandler = (text) => {
  if (text.length > 100) return text.substring(0, 100) + '...'
}

const Parties = ({ posts }) => {
  if (!posts) 'Loading...'

  return (
    <>
      <Navbar />
      <PartyWrapper data-testid="divWrapper">
        <Grid
          container
          style={{ justifyContent: 'center', marginTop: 10 }}
          spacing={3}
        >
          {posts.map((post, idx) => {
            return (
              <Grid item key={idx}>
                <Link href={`party/[id]`} as={`/party/${post._id}`} passHref>
                  <CardPart>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt={post.title}
                        height="140"
                        image={post.imgUrl}
                        title={post.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {post.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {cutHandler(post.text)}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions></CardActions>
                  </CardPart>
                </Link>
              </Grid>
            )
          })}
        </Grid>
      </PartyWrapper>
    </>
  )
}
export default Parties

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
