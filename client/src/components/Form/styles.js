
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    border:'4px soild black',

    borderRadius:"25px",

    overflow:"hide"

    // padding: theme.spacing(2),
  },
  form: {

    

    borderRadius:"25px",
    backgroundColor:"#FFC470",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow:"hide"

  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    width:"50%"
  },
}));
