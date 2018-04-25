import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import './tableTitle.css';
import TeamRow from './TeamRow';

const TableTitle = ({ conference }) => {

  const teamsArray = conference.divisions.map(division => {
    return division.teams.map(team => {
      return team;
    })
  })

  let confArray = [];
  for (var i = 0; i < teamsArray[0].length; i++) {
    confArray.push(teamsArray[0][i]);
  }
  for (var i = 0; i < teamsArray[1].length; i++) {
    confArray.push(teamsArray[1][i]);
  }
  for (var i = 0; i < teamsArray[2].length; i++) {
    confArray.push(teamsArray[2][i]);
  }

  const sorted = confArray.sort((a, b) => {
    return b.wins - a.wins;
  })

  return (
    <Paper className='tableTitle'>

      <Table style={{ tableLayout: 'auto' }}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant='body2' className='conferenceTitle'>
                {conference.name}
              </Typography>
            </TableCell>
            <TableCell>W</TableCell>
            <TableCell>L</TableCell>
            <TableCell>Pct</TableCell>
            <TableCell>GB</TableCell>
            <TableCell>Conf</TableCell>
            <TableCell>Div</TableCell>
            <TableCell>Home</TableCell>
            <TableCell>Away</TableCell>
            <TableCell>L10</TableCell>
            <TableCell>Strk</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            confArray.map(team => {
              return  (
                <TeamRow
                  key={team.id}
                  team={team}
                  teamRecords={team.records}
                />
              );
            })
          }
        </TableBody>
      </Table>
    </Paper>
  );

}

export default TableTitle;
