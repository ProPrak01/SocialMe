
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    border:'2px solid black',

    borderRadius:"25px",

    overflow:"hide"

    // padding: theme.spacing(2),
  },
  form: {

    border:"2px solid #8B322C",

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
