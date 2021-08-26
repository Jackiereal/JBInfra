import React from 'react';
import { makeStyles } from  '@material-ui/core/styles';
import { 
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    rgbToHex,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import{ useEffect, useState } from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      // backgroundColor:'#f78320',
      backgroundColor: 'transparent',
      boxShadow:'none',
    },
    rootScroll: {
      flexGrow: 1,
      backgroundColor:'#f78320',
      opacity: '0.9',
    },
    logoContainer:{
      
    },
    logo:{
      height:'50px',
      width:'auto',
      marginRight:'20px',
      marginLeft:'20px',
      marginTop: '5px',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      fontSize: '13px',
      fontFamily: 'Avenir next'
    },
    menuButtonHighlighted: {
      backgroundColor: '#f78320',
      color: '#fff',
      marginRight: theme.spacing(2),
      fontSize: '13px',
      '&:hover': {
        backgroundColor: '#fff',
        color: '#f78320',
      }
    },
    menuButtonHighlightedScroll: {
      backgroundColor: '#fff',
      color: '#f78320',
      marginRight: theme.spacing(2),
      fontSize: '13px',
      '&:hover': {
        backgroundColor: '#f78320',
        color: '#fff',
      }
    },
    menuItemIcon:{
      fontSize : '16px',
      marginLeft: '3px',
    },
    title: {
      flexGrow: 1,
    },
  }));

export const Header = ()=>{
    const classes = useStyles();
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 200);
      });
    }, []); 
    return (
        <div className={classes.root}>
            <AppBar 
              position="fixed" 
              classes={{
                root:scroll ? classes.rootScroll : classes.root,
              }}
            >
            <Toolbar >
                <div className={classes.logoContainer}>
                  <img src={"logoWhite.png"} className={classes.logo} alt="logo" />
                </div>
                <Button color="inherit" classes={{ root : classes.menuButton}}>HOME</Button>
                <Button color="inherit" classes={{ root : classes.menuButton}}>ABOUT US</Button>
                <Button color="inherit" classes={{ root : classes.menuButton}}>
                  FEATURED PROJECT
                  <KeyboardArrowDownIcon classes={{root: classes.menuItemIcon}}></KeyboardArrowDownIcon>
                </Button>
                <Button color="inherit" classes={{ root : classes.menuButton}}>
                  COMPLETED PROJECTS
                  <KeyboardArrowDownIcon classes={{root: classes.menuItemIcon}}></KeyboardArrowDownIcon>
                </Button>
                <Button color="inherit" classes={{ root : classes.menuButton}}>GALLERY</Button>
                <Button color="inherit" classes={{ root : classes.menuButton}}>
                  BROCHURE
                  <KeyboardArrowDownIcon classes={{root: classes.menuItemIcon}}></KeyboardArrowDownIcon>
                </Button>
                <Button color="inherit" classes={{ root : classes.menuButton}}>CONTACT US</Button>
                <Button color="inherit" classes={{ root : scroll? classes.menuButtonHighlightedScroll : classes.menuButtonHighlighted}}>
                  PLOT AVAILABILITY
                  <KeyboardArrowDownIcon classes={{root: classes.menuItemIcon}}></KeyboardArrowDownIcon>
                </Button>
            </Toolbar>
            </AppBar>
        </div>
  
    )
}

