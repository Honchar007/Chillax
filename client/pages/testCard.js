import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Container from '@material-ui/core/Container'

const styled = {
  maxWidth: 345,
}

const testCard = (
  imageUr = 'sad',
  title = 'sad',
  text = 'sad',
  key = 'sad'
) => {
  return (
    <div>
      <Navbar />
      <Card style={styled}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={title}
            height="140"
            image={imageUr}
            title="SAD"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Goood
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Normal
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default testCard
