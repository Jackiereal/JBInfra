import {
  Grid,
  Typography,
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { CopyrightOutlined } from '@material-ui/icons';
import { useState, useEffect } from "react";
import GoToTop from '../../components/GoToTop';
import { Quote } from '../../components/AboutPage/Quote';



const useStyles = makeStyles({
  root: {
      flexGrow: 1,
      width:'90%',
      margin:'auto',
      marginTop:'30px'
    },
  simpletext:{
      color: '#4a4a4a',
      fontSize: '13px',
      alignSelf:'center',
      fontFamily: 'Montserrat',
      // alignContent:'center',
    },
    iconButton: {
      display: 'flex',
     justifyContent:'left',
     width:'50%',
    },
    copyright:{
      display: 'flex',
      justifyContent:'right',
      width:'50%',
    },
    title:{
      color: '#000',
      fontSize: '14px',
      margin: ' 2px 0px',
      textAlign:'left',
      fontFamily: 'Montserrat',
    },
    text:{
      textAlign:'left',
      color: '#4a4a4a',
      fontSize: '12px',
      fontFamily: 'Montserrat',
    },
    copyrightfont:{
        fontSize: '18px',
        marginRight:'5px',
        paddingTop:'5px',
        fontFamily: 'Montserrat',
    },
    gridContainer:{
      marginTop:'20px',
    },
    logoImage:{
        width:'100px',
        margin:'auto',
    },
    cardbutton:{
      "&:hover": {
          backgroundColor: '#f78320',
          color:'#fff',
      },
    },
    
})


export const OurJourney = ()=>{
  const [projects,setProjects] = useState([]);

  if(!window.location.hash){
    window.location = window.location + '#'
    window.location.reload()
  }
  window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  const classes = useStyles();
  return (
      <div className={classes.root}>
          <Grid container spacing={2}>
              <Grid item xs={10} sm={2}>
                  <img className={classes.logoImage} src={'jbenclave.png'} alt="logo"></img>
              </Grid>
              <Grid item xs={10} sm={2} className={classes.gridContainer}>
                  <Typography className={classes.simpletext}  align="left">
                  JB Enclave is a 30 Acre Residential Plotting Venture at Bonguluru launched on 2001.
                  </Typography>
              </Grid>
          </Grid>
          <Quote/>
          <GoToTop/>
      </div>
     
  )
}