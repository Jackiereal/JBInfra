import {
    Container,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ProjectTimeline } from './Timeline'

const useStyles = makeStyles({
    root:{
        width: '100%',
        color: '#f78320',
        fontSize: '24px',
        fontFamily: 'Montserrat',
        //backgroundColor: '#fff',
        marginTop:'20px',
    },
    caption:{
        width: '100%',
        color: '#4a4a4a',
        fontSize: '13px',
        fontFamily: 'Montserrat',
        //backgroundColor: '#fff',

    },
    containerRoot:{
        marginTop:'-5px',
        backgroundImage:  'url("journey.png")',
        backgroundPosition: 'left',
        backgroundSize:'100% auto',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#f6f6f8',
        height:'1300px',
        width:'100%',
        maxWidth:'100%',
    },
})

export const Journey = ()=>{
    const classes = useStyles();
    return (
        <Container fixed classes={{root : classes.containerRoot}}>
            <ProjectTimeline/>
        </Container>
    )
}