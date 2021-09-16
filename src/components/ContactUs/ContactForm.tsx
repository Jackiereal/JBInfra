import {
    Container,
    Typography,
    Box,
    TextField,
    Button,
   
} from '@material-ui/core';
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
})

export const ContactForm = ()=>{
    const classes = useStyles()
    return (
        <Container fixed>
            <Typography  classes={{ root : classes.root}}>Message Us</Typography>
            <form>
      <TextField  size="small"  margin="normal" label="Full Name" variant="outlined" />
      <TextField  size="small" margin="normal"  label="Email" variant="outlined"/>
      <TextField  size="small" margin="normal" label="Mobile" variant="outlined" />
      <TextField  size="small" margin="normal" label="Subject" variant="outlined" />
      <TextField  size="small" fullWidth margin="normal" label="Message" variant="outlined" />
    </form>
            {/* <Box
      component="form"
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    //   sx={{
    //     '& > :not(style)': { m: 1, width: '25ch' },
    //   }}
    //   noValidate
    //   autoComplete="off"
    >
      <TextField id="outlined-basic" label="Your Name" variant="outlined" />
      <TextField id="outlined-basic" label="Email id" variant="outlined" />
      <TextField id="outlined-basic" label="Mobile" variant="outlined" />
      <TextField id="outlined-basic" label="Subject" variant="outlined" />
       <TextField id="outlined-basic" label="Your message" fullWidth variant="outlined" />
    </Box> */}
        </Container>
    )
}