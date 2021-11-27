// export const Quote = ()=>{
//     return (

//     )
// }
import {
    Typography,
    Card,
    Grid,
    CardMedia

} from '@material-ui/core';
import {
    Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    
    containerRoot:{
        
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
            height:'600px',
            marginTop:'-100px',
            maxWidth:'100%',
        },
        ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            height:'800px',
            marginTop:'-125px',
            maxWidth:'100%',
        },
        ['@media (min-width:1536px)']: { // eslint-disable-line no-useless-computed-key
            height:'1100px',
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
        position:'relative',marginTop:'750px',marginLeft: '450px'
    },
    mail:{
        marginLeft: '800px',position:'relative',marginTop:'40px'
    }
})

const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

export const Quote = ()=>{
    const classes = useStyles();
    return (
        <Container fixed classes={{root : classes.containerRoot}}>
            
            <a href="tel:04029554577"><img src="mobile.png"></img></a><br />
            
            <Mailto email="customercare@jbinfraprojects.com" subject="Get in Touch" body="H!">
                <img src="mail.png"/>
            </Mailto>
        </Container>
    )
} 