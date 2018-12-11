import React, { Component } from 'react';
import './App.css';
import { RadioCard } from './components/RadioCard';
import { withRoot } from './withRoot';
import store from './store';
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Grid,
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

class App extends Component {
  render() {
    return (
      <>
        {/* // <div
      //   style={{
      //     padding: 20,
      //     display: 'flex',
      //     flexWrap: 'wrap',
      //     flexDirection: 'row',
      //     justifyContent: 'spaceAround',
      //     alignItems: 'center',
      //   }}
      // > */}
        <AppBar position="sticky">
          <Toolbar>
            <Typography
              style={{ flexGrow: 1, fontFamily: 'Courgette, cursive' }}
              color="inherit"
              variant="h5"
            >
              The Chillout App
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={16} justify="space-around">
          {store.map(radio => (
            <Grid item xs key={radio.id}>
              <RadioCard
                source={radio.source}
                image={radio.image}
                name={radio.name}
                label={radio.label}
              />
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}

export default withRoot(App);
