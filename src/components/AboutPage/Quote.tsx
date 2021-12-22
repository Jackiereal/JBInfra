// export const Quote = ()=>{
//     return (

//     )
// }
import {
    Typography,
    Card,
    Grid,
    CardMedia,
    Fab

} from '@material-ui/core';
import {
    Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useState, useEffect } from 'react';


const useStyles = makeStyles({
    
    containerRoot:{
        position:'relative',
        backgroundImage:  'url("getintouch.png")',
        backgroundSize:'100% auto',
        width:'100%',
        height:'700px',
        backgroundRepeat: 'no-repeat',
        // paddingTop:'200px',
        paddingLeft:'100px',
        marginTop:'-125px',
        marginBottom:'30px',
        ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
            height:'300px',
            marginTop:'-100px',
            maxWidth:'100%',
        },
        ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
            height:'400px',
            marginTop:'-100px',
            maxWidth:'100%',
        },
        ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
            height:'650px',
            marginTop:'-100px',
            maxWidth:'100%',
        },
        ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            height:'750px',
            marginTop:'-125px',
            maxWidth:'100%',
        },
        ['@media (min-width:1300px)']: { // eslint-disable-line no-useless-computed-key
            height:'800px',
            marginTop:'-125px',
            maxWidth:'100%',
        },
        ['@media (min-width:1400px)']: { // eslint-disable-line no-useless-computed-key
            height:'850px',
            marginTop:'-125px',
            maxWidth:'100%',
        },
        ['@media (min-width:1500px)']: { // eslint-disable-line no-useless-computed-key
            height:'900px',
            marginTop:'-125px',
            maxWidth:'100%',
        },
        ['@media (min-width:1536px)']: { // eslint-disable-line no-useless-computed-key
            height:'1000px',
            marginTop:'-200px',
            maxWidth:'100%',
        },
       
       
        
    },
    textFirst:{
        color:'#fff',
        fontSize:'28px',
        marginLeft:'100px',
        marginTop:'-250px',
        fontFamily: 'Montserrat',
        fontWeight:500,
    },
    textSecond:{
        color:'#fff',
        fontSize:'28px',
        marginLeft:'100px',
        fontFamily: 'Montserrat',
        fontWeight:500,
    },
    verticalBar:{
        width:'80%',
        height:'30px',
        backgroundColor:'#fff',
        marginLeft:'-160px',
        color:'#f78320',
        textAlign:'right',
        fontFamily:'Montserrat',
        paddingRight:'30px',
        paddingTop:'5px',
    },
    mobile:{
        position:'absolute',
        bottom:'80px',
        right:'40px',
        ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
            bottom:'80px',
        },
        ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
            bottom:'100px',
        },
        ['@media (min-width:1024px)']: { // eslint-disable-line no-useless-computed-key
            bottom:'100px',
        },
        ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            bottom:'100px',
        },
        ['@media (min-width:1536px)']: { // eslint-disable-line no-useless-computed-key
            bottom:'160px',
        },
        
    },
    buttonImage:{
        height:'60px',
        ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
            height:'30px',
        },
        ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
            height:'50px',
        },
        ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
            height:'60px',
        },
        ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            height:'60px',
        },
        ['@media (min-width:1300px)']: { // eslint-disable-line no-useless-computed-key
            height:'80px',
        },
    },
    mail:{
        position:'absolute',
        bottom:'50px',
        right:'40px',
        ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
            bottom:'20px',
        },
        ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
            bottom:'20px',
        },
        ['@media (min-width:1024px)']: { // eslint-disable-line no-useless-computed-key
            bottom:'40px',
        },
        ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            bottom:'40px',
        },
        ['@media (min-width:1536px)']: { // eslint-disable-line no-useless-computed-key
            bottom:'80px',
        },
    },
    fabMobile: {
        position:'fixed',
        bottom: '20px',
        right: '20px',
        color: "#fff",
        backgroundColor: "#f78320",
        margin: '10px',
        "&:hover": {
            backgroundColor: '#fff',
            color:'#f78320',
        }
    },
    fabMail: {
        position:'fixed',
        bottom: '20px',
        right: '100px',
        backgroundColor: "#f78320",
        margin: '10px',
        "&:hover": {
            backgroundColor: '#fff',
        }
    },
    link:{
        color:'#fff',
        textDecoration:'none',
        paddingTop:'8px',
        "&:hover": {
            color:'#f78320',
        }
    }
})

const Mailto = ({ email, subject = '', body = '', children , className}) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`} className={className}>{children}</a>;
  };

export const Quote = ()=>{

    const [scroll,setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 400);
        });
      }, []); 

    const classes = useStyles();
    return (
        <Container fixed classes={{root : classes.containerRoot}}>
            {/* <Grid className={classes.mobile}>
                <a href="tel:04029554577"><img className={classes.buttonImage} src="mobile.png"></img></a><br />
            </Grid>
            <Grid className={classes.mail}>
                <Mailto email="customercare@jbinfraprojects.com" subject="Get in Touch" body="H!">
                    <img className={classes.buttonImage} src="mail.png"/>
                </Mailto>
            </Grid> */}
            <div>
            {
                scroll ? 
                <div>
                <Fab className={classes.fabMail} aria-label="add">
                    {/* <MailIcon> */}
                        <a href="tel:04029554577" className={classes.link}>  <LocalPhoneIcon/> </a>
                    {/* </MailIcon> */}
                </Fab>
                <Fab className={classes.fabMobile} aria-label="add">
                    {/* <LocalPhoneIcon> */}
                        <Mailto email="customercare@jbinfraprojects.com" subject="Get in Touch" body="H!" className={classes.link}>
                            <MailIcon/>
                        </Mailto>
                    {/* </LocalPhoneIcon> */}

                </Fab>
                </div>
                 : null
            }
            </div>
        </Container>
    )
} 