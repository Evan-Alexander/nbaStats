import React from 'react';
import TableTitle from './TableTitle';
import './standingsContainer.css';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

const StandingsContainer =({ data }) => {


  return (
    <div className='standingsContainer'>
      {
        data.conferences.map((conference, i) => {
          return (
            <Grid item xs key={i}>
              <Paper>
                <TableTitle
                  conference={conference}
                  key={conference.id}
                />
              </Paper>
            </Grid>
          );
        })
       }
    </div>
  );
}

export default StandingsContainer;
