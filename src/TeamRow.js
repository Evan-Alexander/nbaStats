import React from 'react';
import { TableCell, TableRow } from 'material-ui/Table';
const TeamRow = ({ team  }) => {
    let conferenceRecord = `${team.records[3].wins}-${team.records[3].losses}`;

    let divisionRecord = `${team.records[4].wins}-${team.records[4].losses}`;

    let homeRecord = `${team.records[5].wins}-${team.records[5].losses}`;

    let awayRecord = `${team.records[13].wins}-${team.records[13].losses}`;

    let lastTenRecord = `${team.records[6].wins}-${team.records[6].losses}`;
  return(
    <TableRow key={team.id}>
      <TableCell key={team.name}>{team.name}</TableCell>
      <TableCell key={`${team.id}w${team.wins}`}>{team.wins}</TableCell>
      <TableCell key={`${team.id}l${team.losses}`}>{team.losses}</TableCell>
      <TableCell key={`${team.id}pct${team.win_pct}`}>{team.win_pct}</TableCell>
      <TableCell key={`${team.id}gb${team.games_behind.conference}`}>{team.games_behind.conference}</TableCell>
      <TableCell key={`${team.id}confR${conferenceRecord}`}>{conferenceRecord}</TableCell>
      <TableCell key={`${team.id}divR${divisionRecord}`}>{divisionRecord}</TableCell>
      <TableCell key={`${team.id}home${homeRecord}`}>{homeRecord}</TableCell>
      <TableCell key={`${team.id}away${awayRecord}`}>{awayRecord}</TableCell>
      <TableCell key={`${team.id}l10${lastTenRecord}`}>{lastTenRecord}</TableCell>
      <TableCell key={`${team.id}strk${team.market}`}>{team.streak.kind.charAt(0).toUpperCase()}{ team.streak.length}</TableCell>
    </TableRow>
  );
}
export default TeamRow;
