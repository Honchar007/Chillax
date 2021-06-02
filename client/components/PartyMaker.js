import React, { Component } from 'react'
import styled from 'styled-components'
import { useSession, getSession } from 'next-auth/client'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Link from 'next/link'

const Wrapper = styled.div`
  margin-top: 20px;
  margin-left: 20px;

  background: white;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #c300ff;
`
const cutHandler = (text) => {
  if (text.length > 100) return text.substring(0, 100) + '...'
}
const CardPart = styled(Card)`
  max-width: 200px;
  &:hover {
    box-shadow: 0px 3px 15px #e917de;
  }
`
export class PartyMaker extends Component {
  async componentDidMount() {
    const session = await getSession()
    this.setState({ session })
  }
  render() {
    return (
      <Wrapper>
        <Grid
          container
          style={{ justifyContent: 'center', marginTop: 10 }}
          spacing={3}
        >
          {this.props.posts.map((post, idx) => {
            if (post.creator == this.props.userName)
              return (
                <Grid item key={idx}>
                  <Link href={`/party/[id]`} as={`/party/${post._id}`} passHref>
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
                        </CardContent>
                      </CardActionArea>
                    </CardPart>
                  </Link>
                </Grid>
              )
          })}
        </Grid>
      </Wrapper>
    )
  }
}

export default PartyMaker

/* */
