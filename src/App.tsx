import React, { Component } from 'react';
import './App.css';
import RadioCard from './components/RadioCard';
import { withRoot } from './withRoot';
import data from './data';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import logo from './assets/logo-no-bg.svg';

class App extends Component {
  render() {
    return (
      <div style={{}}>
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
        {/* <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}> */}
        <div
          style={{
            // display: 'flex',
            // flexWrap: 'wrap',
            flexFlow: 'row wrap',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gridAutoRows: 'minmax(150px, auto)',
            gridGap: '1em',
          }}
        >
          {data.map(radio => (
            <div style={{ padding: 4, flexGrow: 1 }} key={radio.id}>
              <RadioCard
                source={radio.source}
                image={radio.image}
                // image={logo}
                name={radio.name}
                label={radio.label}
              />
            </div>
          ))}
        </div>
      </div>
      // </div>
    );
  }
}

export default withRoot(App);
