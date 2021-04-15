import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

const CenteredGrid = () => {

  return (
    <div className={}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default CenteredGrid;