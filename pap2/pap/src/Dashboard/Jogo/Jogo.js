import React from 'react';

import useStyles from './Style';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import LinearProgress from '@material-ui/core/LinearProgress';

function JogoComponent(props) {
  const {_jogo,historyPush} = props;

  const classes = useStyles();

  const jogo = {
    r: _jogo[0],
    d: _jogo[1],
    h: _jogo[2],
    s: _jogo[3],
    n: _jogo[4],
    rc: _jogo[5],
    c: _jogo[6],
    cd: _jogo[7],
    c: _jogo[8]
  }

  const data = [
    {Nome:'Pontos',Home:55,Out:32},
    {Nome:'Golos',Home:20,Out:20},
    {Nome:'Faltas',Home:10,Out:8}
  ];

  const topGroupData = {
    Home: data.reduce(((total,value)=>total+value.Home),0),
    Out: data.reduce(((total,value)=>total+value.Out),0)
  }

  console.log(topGroupData);

  

  return (
  <>
    {
<Paper>
  <Grid container className={classes.topGroup} justify="center" alignItems="center">
    <Grid item xs={4}>
      <img mx='auto' className={classes.clubeAvatar} alt='clube' src='/static/images/clubes/mourisca.jpg'/>
      <Typography className={classes.clubeName} align='center' variant='h4' component='p'>Mourisca</Typography>
    </Grid>
    <Grid item xs={4}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={5}>
          <Typography className={classes.topGroupPlace} align='center' component='p' variant='p'>Casa</Typography>
          <Grid container alignItems="center" justify="center">
            <Grid item xs={4} md={2}><Paper className={[classes.topGroupLastRes,classes.topGroupLastResV]}>V</Paper></Grid>
            <Grid item xs={4} md={2}><Paper className={[classes.topGroupLastRes,classes.topGroupLastResV]}>V</Paper></Grid>
            <Grid item xs={4} md={2}><Paper className={[classes.topGroupLastRes,classes.topGroupLastResF]}>F</Paper></Grid>
            <Grid item xs={4} md={2}><Paper className={[classes.topGroupLastRes,classes.topGroupLastResF]}>F</Paper></Grid>
            <Grid item xs={4} md={2}><Paper className={[classes.topGroupLastRes,classes.topGroupLastResV]}>V</Paper></Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>

        </Grid>
        <Grid item xs={5}>
          <Typography className={classes.topGroupPlace} align='center' component='p' variant='p'>Fora</Typography>
          <Grid container alignItems="center" justify="center">
            <Grid item xs={4} md={2}><Paper className={[classes.topGroupLastRes,classes.topGroupLastResF]}>F</Paper></Grid>
            <Grid item xs={4} md={2}><Paper className={[classes.topGroupLastRes,classes.topGroupLastResF]}>F</Paper></Grid>
            <Grid item xs={4} md={2}><Paper className={[classes.topGroupLastRes,classes.topGroupLastResV]}>V</Paper></Grid>
            <Grid item xs={4} md={2}><Paper className={[classes.topGroupLastRes,classes.topGroupLastResF]}>F</Paper></Grid>
            <Grid item xs={4} md={2}><Paper className={[classes.topGroupLastRes,classes.topGroupLastResV]}>V</Paper></Grid>
          </Grid>
        </Grid>
      </Grid>
      <Typography className={classes.topGroupBar} align='center'>{Math.floor((topGroupData.Home/(topGroupData.Home+topGroupData.Out))*100)}% Win Rate</Typography>
      <LinearProgress variant="determinate" value={(topGroupData.Home/(topGroupData.Home+topGroupData.Out))*100} />
    </Grid>
    <Grid item xs={4}>
      <img mx='auto' className={classes.clubeAvatar} alt='clube' src='/static/images/clubes/alvarenga.png'/>
      <Typography className={classes.clubeName} align='center' variant='h4' component='p'>Alvarenga</Typography>
    </Grid>
  </Grid>
  <Divider/><Divider/><Divider/><Divider/>
  {
    data.map((item,index)=><>
      <Grid container className={classes.root} key={index}>
        <Grid item xs={4}>
          <Typography className={classes.midleGroupText} align='center' variant='h5' component='p'>{item.Home}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography align='center'>{item.Nome}</Typography>
          <LinearProgress variant="determinate" value={(item.Home/(item.Home+item.Out))*100} />
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.midleGroupText} align='center' variant='h5' component='p'>{item.Out}</Typography>
        </Grid>
      </Grid>
      <Divider/>
    </>)
  }
</Paper>
    }
  </>
  );
}

export default JogoComponent;