import {
    Container,
    Typography,
    Grid,
    Button

} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DirectorCard } from "./DirectorCard";
import { useState } from 'react';

const useStyles = makeStyles({
  rootContainer:{
    // marginBottom:'30px',
    height:'auto',
    fontFamily: 'Avenir next',
    background: '#fff1ff',
    marginTop:'20px',
    paddingTop:'10px',
    paddingBottom:'50px',
  },
  rootGrid:{
    // marginBottom: '30px',
  },
  root: {
    width: '100%',
    color: '#f78320',
    fontSize: '24px',
    fontFamily: 'Avenir next',
    marginTop:'75px',
    marginBottom:'30px'
  },
  description: {
    fontFamily: 'Avenir next',
    fontSize: '16px',
    paddingLeft:'100px',
    paddingRight:'100px',
    textAlign:'justify'
  },
  directorDescription:{
    marginTop:'30px',
    fontFamily: 'Avenir next',
    padding:'30px',

  },
active:{
    // border: '0.25px solid #f78320'
    background: '#fbdbfb',
},
cardGrid:{
    alignItems:'center',
}

});


export const Directors = (props)=>{
    const classes = useStyles();
    const directors = props.directors
    const [directorDesc,setDirectorDesc] = useState(directors[0].description);
    const [directorName,setDirectorName] = useState(directors[0].name)
    const selectDirector = (e)=>{
        setDirectorDesc(e.description)
        setDirectorName(e.name)
    }

    return (
        <Container fixed classes={{ root : classes.rootContainer}}>
            <Typography  classes={{ root : classes.root}}>OUR DIRECTORS</Typography>
            <Grid item xs={12} classes={classes.rootGrid}>
                <Grid container justifyContent="center" spacing={2} align="center">
                    {directors.map((value) => (
                        <Grid item xs={12} sm={3} classes={classes.cardGrid} className={ directorName === value.name  ? classes.active : ""}>
                            <DirectorCard onCardSelect={selectDirector} data={value}/>
                        </Grid>
                    ))}
                </Grid>
                <Grid  container justifyContent="center" classes={{root : classes.directorDescription}}>
                    <Typography  classes={{ root : classes.description}}> {directorDesc}</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}