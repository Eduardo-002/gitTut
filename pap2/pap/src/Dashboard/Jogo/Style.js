import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
  midleGroupText:{
    padding: '10px',
  },
}));

export default useStyles;