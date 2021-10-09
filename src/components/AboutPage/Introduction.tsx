import {
    Container,
    Typography

} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    containerRoot:{
        // marginTop:'50px',
        // backgroundImage:  'url("intro1.gif")',
        // backgroundImage:  'url("intro2.png")',
        // backgroundSize:'100% auto',
        height:'100px',
        width:'100%',
        backgroundRepeat: 'no-repeat',
        margin:'0',
        padding:'0',
    },
    img:{
        width:'100%',
        height:'auto',
    },
})

export const Introduction = (props:any)=>{
    const classes = useStyles();
    console.log(props)
    return (
        <Container fixed classes={{root : classes.containerRoot}}>
            <img className={classes.img} src={props.image} ></img>
        </Container>
    )
}