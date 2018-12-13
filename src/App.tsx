import React, { Component } from 'react';
import './App.css';
import RadioCard from './components/RadioCard';
import { withRoot } from './withRoot';
import store from './store';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'flexStart',
        }}
      >
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
        {store.map(radio => (
          <div style={{ padding: 4 }}>
            <RadioCard
              key={radio.id}
              source={radio.source}
              image={radio.image}
              name={radio.name}
              label={radio.label}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default withRoot(App);
