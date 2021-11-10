import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 300,
    height: 100,
  },
  button: {
    width: 'auto',
    marginTop: 10,
    backgroundColor: red[600],
    '&:hover': {
      backgroundColor: red[500],
    },
  },
}));
