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
import { Footer } from './Footer'

 

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
        position: 'absolute',
        color: '#4a4a4a',
        fontSize: '18px',
        fontFamily: 'Montserrat',
        marginTop: '20px',
        textAlign: 'left',
        ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
            marginTop: '-80px',
            textAlign: 'left'
          },
          ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
            marginTop: '100px',
            textAlign: 'left'
          },
          ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
            marginTop: '30px',
            textAlign: 'center'
          },
          ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            textAlign: 'left',
            marginTop: '20px',
          },
          ['@media (min-width:1513px)']: { // eslint-disable-line no-useless-computed-key
            textAlign: 'left',
            marginTop: '20px',
          },
        // align:"left"
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
        ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'10px',
          },
          ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'10px',
          },
          ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'10px',
          },
          ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'10px',
          },
          ['@media (min-width:1513px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'10px',
          },
      },
      entire:{
        ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
          marginTop:'50px',
        },
        ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
          marginTop:'1px',
        },
        ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
          marginTop:'1px',
        },
        ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
          marginTop:'1px',
        },
        ['@media (min-width:1513px)']: { // eslint-disable-line no-useless-computed-key
          marginTop:'1px',
        },

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
        marginTop: '100px'
      }
      
})


export const OurJourney = ()=>{
    const [projects,setProjects] = useState([]);

    if(!window.location.hash){
      window.location = window.location + '#'
      window.location.reload()
    }
    
    setTimeout(() => {window.scrollTo(0, 0); }, 1000);
    setTimeout(() => {window.scrollTo(0, 0); }, 1000);
    setTimeout(() => {window.scrollTo(0, 0); }, 1000);
    setTimeout(() => {window.scrollTo(0, 0); }, 1000);
    const classes = useStyles();
    return (
      <div className={classes.entire}>
        <Banner image={'compprojects.jpg'}/>
      
        <div className={classes.root}>
           
          &nbsp;
            <Typography  classes={{ root : classes.root}}>Our Journey</Typography>
            <Typography  classes={{ root : classes.headdescroot}}>Your Happiness begins here...</Typography>
            <Grid container spacing={3}>
                <Grid item xs={10} sm={4}>
                    <img className={classes.logoImage} src={'jbenclave.png'} alt="logo"></img>
                </Grid>
                <Grid item xs={10} sm={8} className={classes.gridContainer}>
                    <Typography className={classes.simpletext}>
                    JB Enclave is a 30 Acre Prestigious Residential Plotting Venture at Bonguluru launched in the year 2001.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={10} sm={4}>
                    <img className={classes.logoImage} src={'peacockvalley.png'} alt="peacockvalley"></img>
                </Grid>
                <Grid item xs={10} sm={8} className={classes.gridContainer}>
                    <Typography className={classes.simpletext}>
                    JB's Peacock Valley is a 36 Acre Prestigious Residential Plotting Venture at Medchal launched in the year 2004.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={10} sm={4}>
                    <img className={classes.logoImage} src={'vishaka.png'} alt="logo"></img>
                </Grid>
                <Grid item xs={10} sm={8} className={classes.gridContainer}>
                    <Typography className={classes.simpletext}>
                      JB Vishaka is a 87 Acre Prestigious Residential Plotting Venture at Visakhapatnam(Vizag) launched on 2005.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={10} sm={4}>
                    <img className={classes.logoImage} src={'jbsagarvalley1.png'} alt="logo"></img>
                </Grid>
                <Grid item xs={10} sm={8} className={classes.gridContainer}>
                    <Typography className={classes.simpletext}>
                      JB Sagar Valley is a 24 Acre Prestigious Residential Plotting Venture at Mallepally near Nagarjuna Sagar launched on 2007.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={10} sm={4}>
                    <img className={classes.logoImage} src={'jbhills.png'} alt="logo"></img>
                </Grid>
                <Grid item xs={10} sm={8} className={classes.gridContainer}>
                    <Typography className={classes.simpletext}>
                      JB Hills is a 26 Acre Prestigious Residential Plotting Venture at Mallepally near Nagarjuna Sagar launched on 2007.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={10} sm={4}>
                    <img className={classes.logoImage} src={'jbsv2.png'} alt="logo"></img>
                </Grid>
                <Grid item xs={10} sm={8} className={classes.gridContainer}>
                    <Typography className={classes.simpletext}>
                      JB's Sagar Valley is a 18 Acre Prestigious Residential Plotting Venture at Patelguda, Telangana launched on 2012.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={10} sm={4}>
                    <img className={classes.logoImage} src={'jasminecity1.png'} alt="logo"></img>
                </Grid>
                <Grid item xs={10} sm={8} className={classes.gridContainer}>
                    <Typography className={classes.simpletext}>
                      JB's Jasmine City is a 33 Acre Prestigious Residential Plotting Venture at Mangalpally, Telangana launched on 2013.
                    </Typography>
                </Grid>
            </Grid>
            
            <Grid container spacing={3}>
                <Grid item xs={10} sm={4}>
                    <img className={classes.logoImage} src={'brundavanam.png'} alt="logo"></img>
                </Grid>
                <Grid item xs={10} sm={8} className={classes.gridContainer}>
                    <Typography className={classes.simpletext}>
                      JB's - Brundavanam is a 23 Acre Prestigious Residential Plotting Venture at Yamjal launched in the year 2014.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={10} sm={4}>
                    <img className={classes.logoImage} src={'jbresort.png'} alt="logo"></img>
                </Grid>
                <Grid item xs={10} sm={8} className={classes.gridContainer}>
                    <Typography className={classes.simpletext}>
                       JB Resorts is a Resort Living Plotting Project, offering modern clubhouse, which extends in 100 acre layout.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={4}>
                    <img className={classes.logoImage} src={'greenmeadows.png'} alt="logo"></img>
                </Grid>
                <Grid item xs={10} sm={8} className={classes.gridContainer}>
                    <Typography className={classes.simpletext}>
                       JB's Green Meadows is a 40 Acre Prestigious Residential Plotting Venture at Kongarkalan launched in the year 2015.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={4}>
                    <img className={classes.logoImage} src={'aeroheights.png'} alt="logo"></img>
                </Grid>
                <Grid item xs={10} sm={8} className={classes.gridContainer}>
                    <Typography className={classes.simpletext}>
                       JB's Aero Heights is a 12 Acre Prestigious Residential Plotting Venture at Tukkuguda launched in the year 2018.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={10} sm={4}>
                    <img className={classes.logoImage} src={'jbenclave2.png'} alt="logo"></img>
                </Grid>
                <Grid item xs={10} sm={8} className={classes.gridContainer}>
                    <Typography className={classes.simpletext}>
                    JB Enclave is a 10 Acre Prestigious Residential Plotting Venture at Tummaloor, Telangana launched in the year 2019.
                    </Typography>
                </Grid>
            </Grid>
            
        </div>
        <div  className={classes.quoteContainer}>
        <Quote/>
        <Footer></Footer>
        </div>
        <GoToTop/>
        </div>
       
    )
}