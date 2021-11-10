import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors'

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: red[600],
  }
  
 
}));