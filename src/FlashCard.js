import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { Favorite, ThumbUpAlt, ThumbDownAlt } from '@material-ui/icons';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
  root: {

  },
}));

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
  <Paper elevation={3} className={classes.root}>
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
                <Grid container justify="space-between" spacing="3">
                    <Grid item xs="5">
                  <Typography variant="body2" color="textSecondary" component="div" align="left">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                  </Grid>
                  <Divider orientation="vertical" flexItem />
                 <Grid item xs="5">
                  <Typography variant="body2" color="textSecondary" component="div" align="right">
                              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                              across all continents except Antarctica
                  </Typography>
                  </Grid>
                </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Grid container
            justify="space-between" // Add it here :)
            spacing={24}
          >
          <Grid item>
            <Grid container
                        justify="space-between" // Add it here :)
                        spacing={12}
                      >
                      <Grid item xs={2}>
                <Typography variant="caption" color="textSecondary" component="p" align="left">
                    Java
                </Typography>
                </Grid>
                <Grid item xs={2}>
                <Typography variant="caption" color="textSecondary" component="p" align="left">
                    Array
                </Typography>
                </Grid>
            </Grid>
          </Grid>
          <Grid item>
          <div>
            <Favorite />
            <ThumbUpAlt />
            <ThumbDownAlt />
            <ShareIcon />

        </div>
        </Grid>
        </Grid>
      </CardActions>
    </Card>
    </Paper>
  );
}
