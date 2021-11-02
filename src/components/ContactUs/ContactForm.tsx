import {
    Container,
    Typography,
    Button
   
} from '@material-ui/core';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';
init("user_DqOWSHU5U0XJDVy8rzYOi");



const useStyles = makeStyles({
    rootGrid:{
      marginBottom:'100px',
      background:'#eee',
    },
    root: {
      width: '100%',
      color: '#f78320',
      fontSize: '18px',
      fontFamily: 'Montserrat',
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

 interface MessageProps{
  name: string,
  email : string,
  mobile: string,
  subject : string,
  message : string
}

export const ContactForm = ()=>{
    const classes = useStyles()
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [mobile,setMobile] = useState('');
    const [subject,setSubject] = useState('');
    const [message,setMessage] = useState('');

    const handleNameChange = (event:any)=>{
      setName(event.target.value)
    }
    const handleEmailChange = (event:any)=>{
      setEmail(event.target.value)
    }
    const handleMobileChange = (event:any)=>{
      setMobile(event.target.value)
    }
    const handleSubjectChange = (event:any)=>{
      setSubject(event.target.value)
    }
    const handleMessageChange = (event:any)=>{
      setMessage(event.target.value)
    }

     const handleMessageClick = async ()=>{
      let messageObject: MessageProps ={ 
        name : '',
        email: '',
        mobile : '',
        subject : '',
        message : '',
      } 
      messageObject.name = name;
      messageObject.email = email;
      messageObject.mobile = mobile;
      messageObject.subject = subject;
      messageObject.message = message;
      emailjs.send(`service_j9uyrb5`, 'template_2jvy6rt',messageObject, 'user_DqOWSHU5U0XJDVy8rzYOi')
        .then((result) => {
          console.log(result)
        },
        (error) => {
          console.log(error)
        });
      
    }

    return (
        <Container fixed>
            <Typography  classes={{ root : classes.root}}></Typography>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, float:'left' },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField color="primary" size="small" label="Full Name" variant="outlined" onChange={handleNameChange}/>
                <TextField className={classes.textField} size="small" label="Email" variant="outlined" onChange={handleEmailChange}/>
              </div>
              <div>
                <TextField className={classes.textField} size="small" label="Mobile" variant="outlined" onChange={handleMobileChange}/>
                <TextField className={classes.textField} size="small" label="Subject" variant="outlined" onChange={handleSubjectChange}/>
              </div>
              <div>
                <TextField className={classes.textField} size="small" fullWidth label="Message" variant="outlined" onChange={handleMessageChange}/>
              </div>
              <div>
                <Button classes={{ root : classes.contactButton}} onClick={handleMessageClick}>Message Us </Button>
              </div>
            
            </Box>

            
        </Container>
    )
}