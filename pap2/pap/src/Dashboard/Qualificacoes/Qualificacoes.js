import React from 'react';

import useStyles from './Style';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function QualificacoesComponent(props) {
  
  const classes = useStyles();

  function createData1(n, j, v, e, d, dg) {
    return {n, j, v, e, d, dg};
  }

  const rows1 = [
    createData1('AF Aveiro 1ª Div.', 22, 7, 8, 7, "26-27"),
    createData1('AF Aveiro Taça', 4, 2, 1, 1, "10-7"),
    createData1('', 26, 9, 9, 8, "36-34")
  ];

  function createData2(c,n,p,j,v,e,d,gm,gs,dg) {
    return {c,n,p,j,v,e,d,gm,gs,dg};
  }

  const rows2 = [
    createData2(1,'Fermentelos',57,22,18,3,1,51,16,'+'+35),
    createData2(2,'Vista Alegre',54,22,17,3,2,59,16,'+'+43),
    createData2(3,'Alvarenga',44,22,13,5,4,41,22,'+'+19),
    createData2(4,'LAAC',42,22,12,6,4,43,28,'+'+15),
    createData2(5,'P. Brandão',40,22,12,4,6,33,26,'+'+7),
    createData2(6,'Valecambrense',38,22,11,5,6,36,24,'+'+7)
  ];

  return (
  <>
    <h1>Qualificações 2019-2020</h1>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">J</TableCell>
            <TableCell align="right">V</TableCell>
            <TableCell align="right">E</TableCell>
            <TableCell align="right">D</TableCell>
            <TableCell align="right">DG</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows1.map((row) => (
            <TableRow key={row.n}>
              <TableCell component="th" scope="row">
                {row.n}
              </TableCell>
              <TableCell align="right">{row.j}</TableCell>
              <TableCell align="right">{row.v}</TableCell>
              <TableCell align="right">{row.e}</TableCell>
              <TableCell align="right">{row.d}</TableCell>
              <TableCell align="right">{row.dg}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h1>AF Aveiro 1ª Divisão</h1>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell align="right">P</TableCell>
            <TableCell align="right">J</TableCell>
            <TableCell align="right">V</TableCell>
            <TableCell align="right">E</TableCell>
            <TableCell align="right">D</TableCell>
            <TableCell align="right">GM</TableCell>
            <TableCell align="right">gs</TableCell>
            <TableCell align="right">DG</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="right">{row.c}</TableCell>
              <TableCell component="th" scope="row">
                {row.n}
              </TableCell>
              <TableCell align="right">{row.p}</TableCell>
              <TableCell align="right">{row.j}</TableCell>
              <TableCell align="right">{row.v}</TableCell>
              <TableCell align="right">{row.e}</TableCell>
              <TableCell align="right">{row.d}</TableCell>
              <TableCell align="right">{row.gm}</TableCell>
              <TableCell align="right">{row.gs}</TableCell>
              <TableCell align="right">{row.dg}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  );
}

export default QualificacoesComponent;