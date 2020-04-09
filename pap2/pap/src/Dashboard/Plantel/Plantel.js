import React from 'react';

import useStyles from './Style';

import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


function PlantelComponent(props) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const plantel = {
    guardaRedes: [
      {
        nCamisola: '1',
        nome: 'João Flávio',
        idade: '31 anos',
        imagem: '/static/images/jogadores/1.jpg'
      },
      {
        nCamisola: '12',
        nome: 'Vasco Coelho',
        idade: '24 anos',
        imagem: '/static/images/jogadores/1.jpg'
      },
      {
        nCamisola: '24',
        nome: 'Francisco Mendes',
        idade: '20 anos',
        imagem: '/static/images/jogadores/1.jpg'
      },
      {
        nCamisola: '12',
        nome: 'Vasco Coelho',
        idade: '24 anos',
        imagem: '/static/images/jogadores/1.jpg'
      },
      {
        nCamisola: '24',
        nome: 'Francisco Mendes',
        idade: '20 anos',
        imagem: '/static/images/jogadores/1.jpg'
      }
      ,
      {
        nCamisola: '12',
        nome: 'Vasco Coelho',
        idade: '24 anos',
        imagem: '/static/images/jogadores/1.jpg'
      },
      {
        nCamisola: '24',
        nome: 'Francisco Mendes',
        idade: '20 anos',
        imagem: '/static/images/jogadores/1.jpg'
      }

    ]
  }

  return (<>
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {plantel.guardaRedes.map((jogador,index) => (
            <Grid key={index} item>
              <Card className={classes.card}>
                <Grid container className={classes.cardHeader}>
                  <Grid item sx={4}>
                    <CardHeader
                      title={'GK'}
                    />  
                  </Grid>
                  <Grid item xs={8}>
                    <CardMedia
                      className={classes.media}
                      image={jogador.imagem}
                      title={jogador.nome}
                    />
                  </Grid>
                </Grid>
                <CardContent>
                  <Typography variant="h6" color="textSecondary" component="p" align='center'>
                    {jogador.nome}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Idade: {jogador.idade}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Número: {jogador.nCamisola}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    
  </>);
}

export default PlantelComponent;