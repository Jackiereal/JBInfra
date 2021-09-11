import {
    Card,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles({
  root: {
    width: '220px',
    height: '260px',
    boxShadow: 'none',
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

export const DirectorCard = (props:any)=>{
    // let img = `https://picsum.photos/id/${props.project.id}/240/240`
    const classes = useStyles() 
    const directorName = props.data.name
    const clickHandler = (e:any)=>{
        props.onCardSelect(props.data)
    }


    return (
        <div onClick={clickHandler}>
        <Card classes={{root: classes.root}}>
            <CardMedia
                className={classes.media}
                image='https://picsum.photos/id/100/240/240'
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
       
        </div>
    )
}