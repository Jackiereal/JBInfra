import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    IconButton,
    Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { useState } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 0, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease-in-out', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation

});


const useStyles = makeStyles({
  rootGrid:{
    
    
  },
  root: {
    width: '220px',
    height: 'auto',
    boxShadow: 'none',
    "&:hover": {
      transform: "scale3d(1.05, 1.05, 0.8)" 
    },
    transition: "transform 0.15s ease-in-out",
    background:'transparent',
    ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
        width: '220px',
    },
    ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
        width: '160px',
    },
    ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
        width: '180px',
    },
    ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
      width: '220px',
    },
    ['@media (min-width:1513px)']: { // eslint-disable-line no-useless-computed-key
        width: '330px',
    },
  },
  controls:{
    width: '40px',
    boxShadow:'none',
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9,
    marginTop:'20px',
    // "&:hover": {
    //   transform: "scale3d(1.1, 1.1, 1)" 
    // },
    // transition: "transform 0.15s ease-in-out",
  },
  cardtitle:{
    color: '#f78320',
    fontSize: '18px',
    margin: ' 2px 0px',
    fontFamily: 'MontserratSemiBold',
  },
  cardtext:{
    color: '#4a4a4a',
    fontSize: '11px',
    fontFamily: 'Montserrat',
  },
  line:{
    background:'#aaa',
    height:'50px',
    width:'1.5px',
    marginTop:'10px',
    ['@media (min-width:0)']: { // eslint-disable-line no-useless-computed-key
      height:'0',
    },
    ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
      height:'50px',
    },
    ['@media (min-width:1513px)']: { // eslint-disable-line no-useless-computed-key
      height:'125px',
    }
  },
  active:{
    transform: "scale3d(1.05, 1.05, 0.8)" ,
    boxShadow: '0 10px 20px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1)',
  },
  icons:{
    fontSize: '20px',
    ['@media (min-width:0)']: { // eslint-disable-line no-useless-computed-key
      fontSize: '16px',
    },
    ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: '20px',
    },
    ['@media (min-width:1513px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: '32px',
    }

  },
  iconAlign:{
    marginLeft: '15px'
  },
  activeICons:{
    opacity:1,
    transition: "all 0.4s ease-in-out",
    marginLeft: '-15px',
  },
  inActive:{
    opacity:0,
    transition: "all 0.4s ease-in-out",
  }

});

export const DirectorCard = (props:any)=>{
    // let img = `https://picsum.photos/id/${props.project.id}/240/240`
    const classes = useStyles() 
    const directorName = props.data.name
    const active = props.active
    const clickHandler = (e:any)=>{
        props.onCardSelect(props.data)
       
    }

    return (
        <Grid container classes={{root: classes.rootGrid}} className={ active ? classes.active : ''}>
        <Grid 
          xs={12} 
          sm={9} 
          md={10} 
          item data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <Card 
            classes={{root: classes.root}}
            onMouseOver={clickHandler} 
            
          >
            <CardMedia
                classes={{root:classes.media}}
                image={`${props.data.image}.png`}
                title={directorName}
                // className={ active ? classes.active : ''}
            />
            <CardContent>
                <Typography variant='body1' className={classes.cardtitle} align="left">
                    {directorName}
                </Typography>
                <Typography variant='body1' className={classes.cardtext} align="left">
                    {props.data.designation}
                </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={3} md={2} item className={ active ? classes.activeICons : classes.inActive}> 
            <IconButton >
                <FacebookIcon className={classes.icons} onClick={() => { window.open(`${props.data.facebook}`,'_blank')}}/>
            </IconButton>
            <IconButton >
                <TwitterIcon className={classes.icons} onClick={() => { window.open(`${props.data.twitter}`,'_blank')}}/>
            </IconButton>
            <IconButton >
                <InstagramIcon className={classes.icons} onClick={() => { window.open(`${props.data.instagram}`,'_blank')}}/>
            </IconButton>
            <IconButton >
                <LinkedInIcon className={classes.icons} onClick={() => { window.open(`${props.data.linkedin}`,'_blank')}}/>
            </IconButton>
          <div className={classes.line}>

          </div>
        </Grid>
        </Grid>
    )
}