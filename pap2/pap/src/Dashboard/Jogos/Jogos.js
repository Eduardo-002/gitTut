import React from 'react';

import useStyles from './Style';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function JogosComponent(props) {
  const {setJogoComponent,historyPush} = props;
  const classes = useStyles();

  function createData1(r,d,h,s,n,rc,c,cd) {
    return [r,d,h,s,n,rc,c,cd];
  }

  const rows1 = [
    createData1('h2h','2020-05-31','17:00','(F)','Alvarenga','-','AF Aveiro 1ºDivisão 19/20','J34'),
    createData1('h2h','2020-05-23','17:00','(C)','Macieirence','-','AF Aveiro 1ºDivisão 19/20','J33'),
    createData1('h2h','2020-05-17','17:00','(F)','Fermentelos','-','AF Aveiro 1ºDivisão 19/20','J32'),
    createData1('h2h','2020-05-10','17:00','(C)','Mansores','-','AF Aveiro 1ºDivisão 19/20','J31'),
    createData1('h2h','2020-05-03','16:00','(F)','CRAC','-','AF Aveiro 1ºDivisão 19/20','J30'),
    createData1('h2h','2020-04-26','16:00','(C)','P. Brandão','ADI','AF Aveiro 1ºDivisão 19/20','J29'),
    createData1('h2h','2020-04-19','16:00','(F)','Pinheirense','ADI','AF Aveiro 1ºDivisão 19/20','J28')
  ];

  return (
  <>
    <h1>Jogos 2019-2020</h1>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableBody>
          {rows1.map((row,index) => (
            <TableRow key={index} onClick={()=>{setJogoComponent(row);historyPush('/dashboard/jogo')}}>
              {
                row.map((col,index)=>(
                  <TableCell align="right" key={index}>{col}</TableCell>
                ))
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  );
}

export default JogosComponent;