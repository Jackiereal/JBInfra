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
import GoToTop from './GoToTop';
import { Banner} from "./AboutPage/Banner";
import { Quote } from './AboutPage/Quote';

 

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width:'90%',
        margin:'auto',
        marginTop:'10px',
        fontSize: '18px',
        fontFamily: 'Montserrat',
        color: '#f78320',
      },
    simpletext:{
        color: '#4a4a4a',
        fontSize: '18px',
        alignSelf:'center',
        fontFamily: 'Montserrat',
        marginTop: '20px'
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
          width:'300px',
          margin:'auto',
      },
      cardbutton:{
        "&:hover": {
            backgroundColor: '#f78320',
            color:'#fff',
        },
      },
      headroot: {
        width: '100%',
        color: '#f78320',
        fontSize: '24px',
        fontFamily: 'Montserrat',
        //backgroundColor: '#fff',
        marginTop:'50px',
        marginBottom:'0px'
      },
      headdescroot: {
        width: '100%',
        color: 'grey',
        fontSize: '16px',
        fontFamily: 'Montserrat',
        //backgroundColor: '#fff',
        marginBottom:'20px'
      },
      quoteContainer:{
        marginTop: '40px'
      }
      
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
      <div>
        <Banner image={'contactusintro.png'}/>
      
        <div className={classes.root}>
           
          &nbsp;
            <Typography  classes={{ root : classes.root}}>Our Journey</Typography>
            <Typography  classes={{ root : classes.headdescroot}}>Your Happiness begins here...</Typography>
            <Grid container spacing={3}>
                <Grid item xs={10} sm={4}>
                    <img className={classes.logoImage} src={'jbenclave.png'} alt="logo"></img>
                </Grid>
                <Grid item xs={10} sm={8} className={classes.gridContainer}>
                    <Typography className={classes.simpletext}  align="left">
                    JB Enclave is a 30 Acre Prestigious Residential Plotting Venture at Bonguluru launched in the year 2001.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={10} sm={4}>
                    <img className={classes.logoImage} src={'vishaka.png'} alt="logo"></img>
                </Grid>
                <Grid item xs={10} sm={8} className={classes.gridContainer}>
                    <Typography className={classes.simpletext}  align="left">
                      JB Vishaka is a 87 Acre Prestigious Residential Plotting Venture at Visakhapatnam(Vizag) launched on 2005.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={10} sm={4}>
                    <img className={classes.logoImage} src={'brundavanam.png'} alt="logo"></img>
                </Grid>
                <Grid item xs={10} sm={8} className={classes.gridContainer}>
                    <Typography className={classes.simpletext}  align="left">
                      JB's - Brundavanam is a 23 Acre Prestigious Residential Plotting Venture at Yamjal launched in the year 2014.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={10} sm={4}>
                    <img className={classes.logoImage} src={'jbresort.png'} alt="logo"></img>
                </Grid>
                <Grid item xs={10} sm={8} className={classes.gridContainer}>
                    <Typography className={classes.simpletext}  align="left">
                       JB Resorts is a Resort Living Plotting Project, offering modern clubhouse, which extends in 100 acre layout.
                    </Typography>
                </Grid>
            </Grid>
            
        </div>
        <div  className={classes.quoteContainer}>
        <Quote/>
        </div>
        <GoToTop/>
        </div>
       
    )
}