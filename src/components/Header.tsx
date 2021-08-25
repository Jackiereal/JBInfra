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

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#f78320',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      fontSize: '13px',
      fontFamily: 'Avenir next'
    },
    menuButtonHighlighted: {
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
    return (
        <div className={classes.root}>
            <AppBar 
              position="fixed" 
              classes={{
                root:classes.root,
              }}
            >
            <Toolbar >
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
                <Button color="inherit" classes={{ root : classes.menuButtonHighlighted}}>
                  PLOT AVAILABILITY
                  <KeyboardArrowDownIcon classes={{root: classes.menuItemIcon}}></KeyboardArrowDownIcon>
                </Button>
            </Toolbar>
            </AppBar>
        </div>
  
    )
}

