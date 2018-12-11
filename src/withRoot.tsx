import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { indigo, pink } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';

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

export const withRoot = (Component: React.ComponentType) => props => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...props} />
    </MuiThemeProvider>
  );
};
