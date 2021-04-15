import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'

const styled = {
  maxWidth: 345,
}
const textHandler = (text) => {
  if (text.length > 200) return text.substring(0, 200) + '...'
}
const CardParty = (imageUr, title, text, key) => {
  const cutText = textHandler(text)
  return (
    <Card style={styled}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={imageUr}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {cutText}
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
  )
}

export default CardParty
