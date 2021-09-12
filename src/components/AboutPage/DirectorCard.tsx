import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    IconButton,
    Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';


const useStyles = makeStyles({
  rootGrid:{
    transition: "transform 0.15s ease-in-out",
    "&:hover": {
        transform: "scale3d(1.05, 1.05, 1)" 
    },
  },
  root: {
    width: '220px',
    height: '200px',
    boxShadow: 'none',
    
  },
  controls:{
    width: '40px',
    boxShadow:'none',
  },
  media: {
    height: 0,
    paddingTop: '70%', // 16:9,
    marginTop:'30'
  },
  cardtitle:{
    color: '#f78320',
    fontSize: '18px',
    margin: ' 2px 0px'
  },
  cardtext:{
    color: '#4a4a4a',
    fontSize: '10px',
  },
  

});

export const DirectorCard = (props:any)=>{
    // let img = `https://picsum.photos/id/${props.project.id}/240/240`
    const classes = useStyles() 
    const directorName = props.data.name
    const clickHandler = (e:any)=>{
        props.onCardSelect(props.data)
    }


    return (
        <Grid container classes={{root: classes.rootGrid}} onClick={clickHandler}>
        <Grid xs={12} sm={9} item>
          <Card classes={{root: classes.root}}>
            <CardMedia
                className={classes.media}
                image={`https://picsum.photos/id/${props.data.id}/240/240`}
                title="Project 1"
            />
            <CardContent>
                <Typography variant='body1' className={classes.cardtitle} align="left">
                    {directorName}
                </Typography>
                {/* <Typography variant='body1' className={classes.cardtext} align="left">
                    {props.project.description}
                </Typography> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={3} item>
          <div>
            <IconButton >
                <FacebookIcon />
            </IconButton>
            <IconButton >
                <TwitterIcon />
            </IconButton>
            <IconButton >
                <InstagramIcon />
            </IconButton>
            <IconButton >
                <LinkedInIcon />
            </IconButton>
          </div>
        </Grid>
        </Grid>
    )
}