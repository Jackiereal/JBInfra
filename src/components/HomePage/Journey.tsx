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
        fontFamily: 'Avenir next',
        backgroundColor: '#fff',
        marginTop:'20px',
    },
    caption:{
        width: '100%',
        color: '#4a4a4a',
        fontSize: '13px',
        fontFamily: 'Avenir next',
        backgroundColor: '#fff',

    },
    containerRoot:{
        marginTop:'50px'
    }
})

export const Journey = ()=>{
    const classes = useStyles();
    return (
        <Container fixed classes={{root : classes.containerRoot}}>
            <Typography  classes={{ root : classes.root}}>OUR JOURNEY</Typography>
            <Typography  classes={{ root : classes.caption}}>Completed Projects</Typography>
            <ProjectTimeline/>
        </Container>
    )
}