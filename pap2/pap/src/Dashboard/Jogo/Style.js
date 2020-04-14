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
  topGroupPlace: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('sm')]: {
      marginBottom: '10px',
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: '20px',
    },
  },
  topGroupLastRes: {
    background: "#aaa",
    padding: 3,
    borderRadius:'10%',
    fontSize: '100%',
    textAlign: 'center',
    margin:1,
    color: '#222'
  },
  topGroupLastResV: {
    background: "#6c6",
  },
  topGroupLastResF: {
    background: "#c66",
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
  topGroupBar: {
    marginTop:'40px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '0px',
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: '40px',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '80px',
    },
  },
  midleGroupText:{
    padding: '10px',
  },
}));

export default useStyles;