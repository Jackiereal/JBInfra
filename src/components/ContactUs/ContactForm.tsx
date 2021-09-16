import {
    Container,
    Typography,
    Box,
    TextField,
   
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
            <Box
      component="form"
    //   sx={{
    //     '& > :not(style)': { m: 1, width: '25ch' },
    //   }}
    //   noValidate
    //   autoComplete="off"
    >
      <TextField id="outlined-basic" label="First Name" variant="outlined" />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" />
      <TextField id="outlined-basic" label="Mobile" variant="outlined" />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" />
    </Box>
        </Container>
    )
}