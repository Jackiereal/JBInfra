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
        
        backgroundImage:  'url("quote.png")',
        backgroundSize:'100% auto',
        height:'850px',
        width:'100%',
        backgroundRepeat: 'no-repeat',
        // paddingTop:'200px',
        paddingLeft:'100px',
        marginTop:'-150px'
    },
    textFirst:{
        color:'#fff',
        fontSize:'28px',
        marginLeft:'100px',
        marginTop:'-250px',
        fontFamily: 'Avenir next',
        fontWeight:500,
    },
    textSecond:{
        color:'#fff',
        fontSize:'28px',
        marginLeft:'100px',
        fontFamily: 'Avenir next',
        fontWeight:500,
    },
    verticalBar:{
        width:'80%',
        height:'30px',
        backgroundColor:'#fff',
        marginLeft:'-160px',
        color:'#f78320',
        textAlign:'right',
        fontFamily:'Avenir next',
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