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
    [theme.breakpoints.down('xs')]: {
      width: '90px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '180px',
    },
    [theme.breakpoints.up('md')]: {
      width: '240px',
    },
  },
  clubeName:{
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.0rem',
    },
  },
  midleGroupText:{
    padding: '10px',
  },
}));

export default useStyles;