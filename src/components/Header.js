import React from 'react';
import { makeStyles } from  '@material-ui/core/styles';
import { 
    AppBar,
    Toolbar,
    Button,
    Menu,
    MenuItem,
    Fade
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import{ useEffect, useState } from 'react'
import { 
  Link,
  NavLink,
  useLocation
} from 'react-router-dom'

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
      fontFamily: 'Avenir next',
      textDecoration:'none'
    },
    menuLink: {
      textDecoration: 'none ',
      color: '#fff',

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
    active:{
      background:'#f78320',
      textDecoration:'none',
    },
    activeLink:{
      textDecoration:'none',
      color:'#fff',
    },
    link:{
      textDecoration:'none',
      color:'#fff',
    }
  }));

export const Header = ()=>{
    const classes = useStyles();
    const [scroll, setScroll] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorBrochure, setAnchorBrochure] = React.useState(null);
    const open = Boolean(anchorEl);
    const openBrochure = Boolean(anchorBrochure);

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    console.log(location)
    console.log(splitLocation)
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleClickBrochure = (event) => {
      setAnchorBrochure(event.currentTarget);
    };
  
    const handleCloseBrochure = () => {
      setAnchorBrochure(null);
    };

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
               
                  <Button color="inherit" classes={{ root : classes.menuButton}} className={splitLocation[1] === "" ? classes.active : ""} ><Link  classes={classes.menuLink} className={splitLocation[1] === "" ? classes.activeLink : classes.menuLink} to="/">HOME </Link></Button>
                  <Button color="inherit" classes={{ root : classes.menuButton}} className={splitLocation[1] === "about" ? classes.active : ""}><Link classes={classes.menuLink} className={splitLocation[1] === "about" ? classes.activeLink : classes.menuLink}  to="/about">ABOUT US </Link></Button>
               
                {/* <Link to="/featured-projects">
                  <Button color="inherit" classes={{ root : classes.menuButton}}>
                    FEATURED PROJECT
                  <KeyboardArrowDownIcon classes={{root: classes.menuItemIcon}}></KeyboardArrowDownIcon>
                  </Button>
                </Link> */}

                <Button color="inherit" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} className={splitLocation[1] === "1" ? classes.active : ""}>
                  FEATURED PROJECTS
                  <KeyboardArrowDownIcon classes={{root: classes.menuItemIcon}}></KeyboardArrowDownIcon>
                </Button>
                <Menu
                
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                PaperProps={{
                  style: {
                    background: "#f78320",
                    marginTop:'30px',
                    marginLeft:'10px'
                  }
                }}
                >
                  <MenuItem onClick={handleClose} ><Link className={splitLocation[1] === "1" ? classes.activeLink : classes.menuLink} to="/1">Serene City</Link></MenuItem>
                  <MenuItem onClick={handleClose} ><Link className={splitLocation[1] === "2" ? classes.activeLink : classes.menuLink} to="/2">Serene Villas</Link></MenuItem>
                  <MenuItem onClick={handleClose} ><Link className={splitLocation[1] === "3" ? classes.activeLink : classes.menuLink} to="/3">Serene Resorts</Link></MenuItem>
                </Menu>



                <Button color="inherit" classes={{ root : classes.menuButton}}>
                  COMPLETED PROJECTS
                  <KeyboardArrowDownIcon classes={{root: classes.menuItemIcon}}></KeyboardArrowDownIcon>
                </Button>
                {/* <Button color="inherit" classes={{ root : classes.menuButton}}>GALLERY</Button> */}
                <Button color="inherit" classes={{ root : classes.menuButton}} className={splitLocation[1] === "gallery" ? classes.active : ""}><Link classes={classes.menuLink} className={splitLocation[1] === "gallery" ? classes.activeLink : classes.menuLink}  to="/gallery">Gallery </Link></Button>
                {/* <Button color="inherit" classes={{ root : classes.menuButton}} className={splitLocation[1] === "brochure" ? classes.active : ""}><Link classes={classes.menuLink} className={splitLocation[1] === "brochure" ? classes.activeLink : classes.menuLink}  to="/home">BROCHURES </Link></Button> */}
                {/* <Button color="inherit" classes={{ root : classes.menuButton}} ><a classes={classes.menuLink} href="sample.pdf" target = "_blank"  to="/home">BROCHURES </a></Button> */}
                <Button color="inherit" aria-controls="fade-brochure" aria-haspopup="true" onClick={handleClickBrochure} classes={{ root : classes.menuButton}} className={splitLocation[1] === "1" ? classes.active : ""}>
                  BROCHURE
                  <KeyboardArrowDownIcon classes={{root: classes.menuItemIcon}}></KeyboardArrowDownIcon>
                </Button>
                <Menu
                
                id="fade-brochure"
                anchorEl={anchorBrochure}
                keepMounted
                open={openBrochure}
                onClose={handleCloseBrochure}
                TransitionComponent={Fade}
                PaperProps={{
                  style: {
                    background: "#f78320",
                    marginTop:'30px',
                    marginLeft:'10px'
                  }
                }}
                >
                  <MenuItem className={classes.menuLink} onClick={handleCloseBrochure} ><a className={classes.link} href="sample.pdf" target = "_blank">Serene City</a></MenuItem>
                  <MenuItem onClick={handleCloseBrochure} ><a className={classes.link} href="sample.pdf" target = "_blank">Serene Villas</a></MenuItem>
                  <MenuItem onClick={handleCloseBrochure} ><a className={classes.link}href="sample.pdf" target = "_blank">Serene Resorts</a></MenuItem>
                </Menu>
                <Button color="inherit" classes={{ root : classes.menuButton}} className={splitLocation[1] === "contactus" ? classes.active : ""}><Link classes={classes.menuLink} className={splitLocation[1] === "contactus" ? classes.activeLink : classes.menuLink}  to="/contactus">CONTACT US </Link></Button>
                <Button color="inherit" classes={{ root : scroll? classes.menuButtonHighlightedScroll : classes.menuButtonHighlighted}}>
                  PLOT AVAILABILITY
                  <KeyboardArrowDownIcon classes={{root: classes.menuItemIcon}}></KeyboardArrowDownIcon>
                </Button>
            </Toolbar>
            </AppBar>
        </div>
  
    )
}

