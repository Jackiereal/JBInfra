import {
  Container,
  Card,
  CardMedia  
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
// import { VideoCard } from 'material-ui-player';
import ReactPlayer from 'react-player'

const useStyles = makeStyles({
    containerRoot :{
        margin:0,
        padding:0
    }
})

export const ProjVideo = (props:any)=>{
    const classes = useStyles();
    return (
        // <Container fixed 
        //  classes={{root : classes.containerRoot}}
        // >
        //    <Card 
        // //    classes={{root: classes.cardRoot}}
        //    >
        //         <CardMedia
        //             component='video'
        //             // className={classes.media}
        //             src={"gearth.mp4"}
        //             au src={props.image} toPlay

        //         />
        //     </Card> 
        // </Container>
        // <VideoCard src={'gearth.mp4'} autoplay={true} loop={true}/>
        <ReactPlayer url={props.video} playing loop width='100%' height='auto' muted/>
    )
}