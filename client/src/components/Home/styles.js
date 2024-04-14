import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    
    borderRadius: "2rem",
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    backgroundColor:"#FFC470"
    
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {
    backgroundColor:"#DD5746",
    borderRadius:"2rem",
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));
