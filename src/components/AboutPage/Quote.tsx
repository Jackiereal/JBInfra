// export const Quote = ()=>{
//     return (

//     )
// }

import {
    Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    
    containerRoot:{
        
        backgroundImage:  'url("quote4.png")',
        backgroundSize:'100% auto',
        width:'100%',
        height:'700px',
        backgroundRepeat: 'no-repeat',
        // paddingTop:'200px',
        paddingLeft:'100px',
        marginTop:'-125px',
        marginBottom:'30px',
        ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
            height:'200px',
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
    }
})

export const Quote = ()=>{
    const classes = useStyles();
    return (
        <Container fixed classes={{root : classes.containerRoot}}>
        </Container>
    )
}