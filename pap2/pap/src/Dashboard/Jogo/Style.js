import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  // theme.typography.h4 = {
  //   fontSize: '1.3rem',
  //   '@media (min-width:600px)': {
  //     fontSize: '1.7rem',
  //   },
  //   [theme.breakpoints.up('md')]: {
  //     fontSize: '2.2rem',
  //   },
  // },
  topGroup: {
    flexGrow: 1,
    marginTop: '10px',
    marginBottom: '10px',
  },
  clubeAvatar:{
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5px',
    marginBottom: '5px',
    borderRadius: '50%',
    //border: '5px solid #222',
    width: window.innerWidth*0.25,
  },
  clubeName:{
    fontSize: '1.3rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.7rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.2rem',
    },
  },
  midleGroupText:{
    padding: '10px',
  },
}));

export default useStyles;