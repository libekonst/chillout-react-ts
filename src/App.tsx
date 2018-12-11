import React, { Component } from 'react';
import './App.css';
import { RadioCard } from './components/RadioCard';
import { withRoot } from './withRoot';
import store from './store';

class App extends Component {
  render() {
    return (
      <div style={{ padding: 20, display: 'flex', }}>
        {store.map(radio => (
          <div style={{padding: 10}}>
          <RadioCard
            source={radio.source}
            key={radio.id}
            img={radio.img}
            name={radio.name}
          />
          </div>
        ))}
      </div>
    );
  }
}

export default withRoot(App);
