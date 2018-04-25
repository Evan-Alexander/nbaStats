import React, { Component } from 'react';
import  { data } from './data';

import CssBaseline from 'material-ui/CssBaseline';
import Grid from 'material-ui/Grid';

import StandingsContainer from './StandingsContainer';
import Navigation from './Navigation';

class App extends Component {

  render() {
    return (
      <Grid>
        <CssBaseline />
        <Navigation />
        <StandingsContainer data={data}/>
      </Grid>
    );
  }
}

export default App;
