import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import FlashCard from './FlashCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    width: 'auto',
    padding: "10px",
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
             <Grid container direction="row" alignContent="center" className={classes.root} spacing={2} mx="auto">
                <Grid item xs={12}>
                  <Grid container direction="column" justify="center" spacing={2}>
                    {[0, 1, 2].map((value) => (
                      <Grid key={value} item>
                        <FlashCard />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item xs={4} >
                    <Pagination count={10} shape="rounded" />
                </Grid>
             </Grid>
  );
}
