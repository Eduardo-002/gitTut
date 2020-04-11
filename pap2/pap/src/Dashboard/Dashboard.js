import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Switch, Route, BrowserRouter as Router, Redirect} from 'react-router-dom';

import useStyles from './Style';

import AppBarComponent from './AppBarComponent/AppBarComponent';
import DrawerComponent from './Drawer/Drawer';
import NewsComponent from './News/News';

import QualificacoesComponent from './Qualificacoes/Qualificacoes';
import JogosComponent from './Jogos/Jogos';
import PlantelComponent from './Plantel/Plantel';
import JogoComponent from './Jogo/Jogo';

const firebase = require('firebase');

const Dashboard = (props) => {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [news, setNews] = useState([]);
  const [jogo, setJogo] = useState([]);

  const history = useHistory();
  const historyPush = (newPath) => {
    history.push(newPath);
  }

  firebase.auth().onAuthStateChanged(async _usr => {
    if(!_usr)
      historyPush('/login');
    else {
      await firebase.firestore().collection('news').get().then(async res => {
        const _news = res.docs.map(_doc => _doc.data());
        await setNews(_news);
      })
    }
  });

  const signOut = () => firebase.auth().signOut();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const  setJogoComponent = (_jogo) => {
    setJogo(_jogo);
  }

  return (
    <div className={classes.root}>
      <AppBarComponent handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}/>
      <DrawerComponent handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} signOut={signOut} historyPush={historyPush}/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {
          window.location.pathname=='/dashboard/noticias' ?
          <NewsComponent news={news}/> :
          window.location.pathname=='/dashboard/ranking' ?
          "ranking" :
          window.location.pathname=='/dashboard/qualificacoes' ?
          <QualificacoesComponent /> :
          window.location.pathname=='/dashboard/jogos' ?
          <JogosComponent setJogoComponent={setJogoComponent} historyPush={historyPush}/> :
          window.location.pathname=='/dashboard/jogadores' ?
          <PlantelComponent /> :
          window.location.pathname=='/dashboard/jogo' ?
          <JogoComponent _jogo={jogo} historyPush={historyPush}/> :
          <Redirect from="/dashboard" to="/dashboard/noticias" />
        }
      </main>
    </div>
  );
}

export default Dashboard;