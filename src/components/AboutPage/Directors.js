import {
    Container,
    Typography,
    Grid,

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
    paddingBottom:'100px',
    maxWidth:'100%',
  },
  rootGrid:{
    // marginBottom: '30px',
   
  },
  root: {
    width: '100%',
    color: '#f78320',
    fontSize: '24px',
    fontFamily: 'Montserrat',
    marginTop:'75px',
    marginBottom:'30px',
   
  },
  description: {
    fontFamily: 'Montserrat',
    fontSize: '14px',
    lineHeight:'28px',
    paddingLeft:'100px',
    paddingRight:'100px',
    textAlign:'justify',
    ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: '11px',
      lineHeight:'22px',
      paddingLeft:'5px',
      paddingRight:'5px',
    },
    ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
        fontSize: '13px',
        lineHeight:'26px',
        paddingLeft:'20px',
        paddingRight:'20px',
    },
    ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
        fontSize: '16px',
        lineHeight:'32px',
        paddingLeft:'100px',
        paddingRight:'100px',
        
    },
  },
  directorDescription:{
    marginTop:'30px',
    fontFamily: 'Montserrat',
    padding:'30px',
    ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
      padding:'5px'
    },
    ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
      padding:'10px'
       
    },
    ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
      padding:'30px',
        
    },

  },
active:{
    // border: '0.25px solid #f78320'
    // background: '#fbdbfb',
},
cardGrid:{
    alignItems:'center',
}

});


export const Directors = (props)=>{
    const classes = useStyles();
    const directors = props.directors
    const [directorDesc,setDirectorDesc] = useState(directors[0].description);
    const [directorName,setDirectorName] = useState(directors[0].name);
    const [directorDesig,setDirectorDesignation] = useState(directors[0].designation);
    const [directorFb,setDirectorFb] = useState(directors[0].facebook);
    const [directorInsta,setDirectorInsta] = useState(directors[0].instagram)
    const [directorLi,setDirectorLi] = useState(directors[0].linkedin)
    const [directorTwitter,setDirectorTwitter] = useState(directors[0].twitter)
    const selectDirector = (e)=>{
        setDirectorDesc(e.description)
        setDirectorName(e.name)
        setDirectorDesignation(e.designation)
        setDirectorFb(e.facebook)
        setDirectorInsta(e.instagram)
        setDirectorLi(e.linkedin)
        setDirectorTwitter(e.twitter)

    }

    return (
        <Container fixed classes={{ root : classes.rootContainer}}>
            <Typography  classes={{ root : classes.root}}>OUR DIRECTORS</Typography>
            <Grid item xs={12} classes={classes.rootGrid}>
                <Grid container justifyContent="center" spacing={2} align="center">
                    {directors.map((value) => (
                        <Grid item xs={12} sm={6} md={3} classes={classes.cardGrid} 
                          // className={ directorName === value.name  ? classes.active : ""}
                        >
                            <DirectorCard onCardSelect={selectDirector} data={value} active={directorName === value.name}/>
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