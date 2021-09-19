import {
    Container,
    Typography,
    Button
   
} from '@material-ui/core';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    rootGrid:{
      marginBottom:'100px',
      background:'#eee',
    },
    root: {
      width: '100%',
      color: '#f78320',
      fontSize: '18px',
      fontFamily: 'Avenir next',
      textAlign:'left',
      marginTop:'25px',
      marginBottom:'20px'
    },
    textField:{
      color:'#f78320',
    },
    contactButton:{
      background:'#f78320',
      color:'#fff',
      float:'left',
      margin:'7px 0 0 7px',
    }
})

export const ContactForm = ()=>{
    const classes = useStyles()
    return (
        <Container fixed>
            <Typography  classes={{ root : classes.root}}>Message Us</Typography>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, float:'left' },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField color="primary" size="small" label="Full Name" variant="outlined" />
                <TextField className={classes.textField} size="small" label="Email" variant="outlined"/>
              </div>
              <div>
                <TextField className={classes.textField} size="small" label="Mobile" variant="outlined" />
                <TextField className={classes.textField} size="small" label="Subject" variant="outlined" />
              </div>
              <div>
                <TextField className={classes.textField} size="small" fullWidth label="Message" variant="outlined" />
              </div>
              <div>
                <Button classes={{ root : classes.contactButton}} >Message Us </Button>
              </div>
            
            </Box>

            
        </Container>
    )
}