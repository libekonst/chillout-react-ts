import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import './App.css';
import { CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
    type: 'light',
  },
  typography: {
    useNextVariants: true,
},
});

class App extends Component {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div />;
      </MuiThemeProvider>
    );
  }
}

export default App;
