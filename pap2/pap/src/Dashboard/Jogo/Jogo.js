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
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';



function JogoComponent(props) {
  const {_jogo,historyPush} = props;

  const theme = createMuiTheme();

  

  const classes = useStyles(theme);

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

  const data = {
    pointsHome: 55,
    pointsOut: 32,
    goalsHome: 20,
    goalsOut: 23
  }

  

  return (
  <>
    {
<Paper>
  <Grid container className={classes.topGroup}>
    <Grid item xs={4}>
      <img mx='auto' className={classes.clubeAvatar} alt='clube' src='/static/images/clubes/mourisca.jpg'/>
      <Typography align='center' variant='h4' component='p'>Mourisca</Typography>
    </Grid>
    <Grid item xs={4}>
      <Typography align='center'></Typography>
    </Grid>
    <Grid item xs={4}>
      <img mx='auto' className={classes.clubeAvatar} alt='clube' src='/static/images/clubes/alvarenga.png'/>
      <Typography align='center' variant='h4' component='p'>Alvarenga</Typography>
    </Grid>
  </Grid>
  <Divider/><Divider/><Divider/><Divider/>
  <Grid container className={classes.root}>
    <Grid item xs={4}>
      <Typography className={classes.midleGroupText} align='center' variant='h5' component='p'>{data.pointsHome}</Typography>
    </Grid>
    <Grid item xs={4}>
      <Typography align='center'>Pontos</Typography>
      <LinearProgress variant="determinate" value={(data.pointsHome/(data.pointsHome+data.pointsOut))*100} />
    </Grid>
    <Grid item xs={4}>
      <Typography className={classes.midleGroupText} align='center' variant='h5' component='p'>{data.pointsOut}</Typography>
    </Grid>
  </Grid>
  <Divider/>
  <Grid container className={classes.root}>
    <Grid item xs={4}>
      <Typography className={classes.midleGroupText} align='center' variant='h5' component='p'>{data.goalsHome}</Typography>
    </Grid>
    <Grid item xs={4}>
      <Typography align='center'>Golos</Typography>
      <LinearProgress variant="determinate" value={(data.goalsHome/(data.goalsHome+data.goalsOut))*100} />
    </Grid>
    <Grid item xs={4}>
      <Typography className={classes.midleGroupText} align='center' variant='h5' component='p'>{data.goalsOut}</Typography>
    </Grid>
  </Grid>
  <Divider/>
</Paper>
    }
  </>
  );
}

export default JogoComponent;