import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    height: 250,
    width: 200,
  },
  cardHeader:{
    height:'58%',
  },
  control: {
    padding: theme.spacing(2),
  },
  media: {
    height: 0,
    margin: 2,
    paddingTop: '110%', // 16:9
  },
}));

export default useStyles;