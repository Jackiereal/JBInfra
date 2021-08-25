import {
    Container,
    Card,
    CardMedia

} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    cardRoot:{
        width: '450px',
        height:'auto',
        color: '#f78320',
        fontSize: '24px',
        fontFamily: 'Avenir next',
        backgroundColor: '#fff',
        marginTop:'50px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1)',
        transition: "transform 0.15s ease-in-out",
        borderRadius : '10px',
    },
    media:{
        width: '450px',
        height:'auto',
        margin:'auto',
        borderRadius : '10px',
    },
    containerRoot:{
        marginTop:'50px',
        backgroundImage:  'url("intro1.gif")',
        backgroundSize:'100% auto',
        height:'850px',
        width:'100%',
        backgroundRepeat: 'no-repeat',
        paddingTop:'200px',
        paddingLeft:'100px'
    }
})

export const Introduction = ()=>{
    const classes = useStyles();
    return (
        <Container fixed classes={{root : classes.containerRoot}}>
             <Card classes={{root: classes.cardRoot}}>
                <CardMedia
                    component='video'
                    className={classes.media}
                    image={"gearth.mp4"}
                    controls
                />
            </Card>
        </Container>
    )
}