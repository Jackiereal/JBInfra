import {
    Card,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '220px',
    height: '260px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1)',
    transition: "transform 0.15s ease-in-out",
    "&:hover": {
        transform: "scale3d(1.05, 1.05, 1)" 
    },
  },
  media: {
    height: 0,
    paddingTop: '70%', // 16:9,
    marginTop:'30'
  },
  cardtitle:{
    color: '#f78320',
    fontSize: '12px',
    margin: ' 2px 0px'
  },
  cardtext:{
    color: '#4a4a4a',
    fontSize: '10px',
  },
  

});

export const ProjectCard = (props:any)=>{
    // let img = `https://picsum.photos/id/${props.project.id}/240/240`
    let img = props.project.img
    console.log(props.project.img)
    const classes = useStyles() 
    return (
        <>
        <Card classes={{root: classes.root}}>
            <CardMedia
                className={classes.media}
                image={img}
                title="Project 1"
        />
            <CardContent>
                <Typography variant='body1' className={classes.cardtitle} align="left">
                    {props.project.title}
                </Typography>
                <Typography variant='body1' className={classes.cardtext} align="left">
                    {props.project.description}
                </Typography>
            </CardContent>
        </Card>
       
        </>
    )
}