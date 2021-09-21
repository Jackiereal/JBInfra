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
      // backgroundColor:'#fff',
      boxShadow:'none',
      
    },
    rootScroll: {
      flexGrow: 1,
      backgroundColor:'#fff',
      opacity: '1',
    },
    logoContainer:{
      
    },
    logo:{
      height:'auto',
      width:'160px',
      marginRight:'20px',
      marginLeft:'20px',
      marginTop: '5px',
    },
    menuButton: {
      marginRight: theme.spacing(1),
      fontSize: '13px',
      fontFamily: 'Avenir next',
      textDecoration:'none',
      color:'#f78320'
    },
    menuLink: {
      textDecoration: 'none ',
      // color: '#fff',
      color:'#f78320',
    },
   
    menuButtonHighlightedScroll: {
      backgroundColor: '#f78320',
      color: '#fff',
      marginRight: theme.spacing(2),
      fontSize: '13px',
      '&:hover': {
        backgroundColor: '#fff',
        color: '#f78320',
      }
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
    menuItemIcon:{
      fontSize : '16px',
      marginLeft: '3px',
    },
    title: {
      flexGrow: 1,
    },
    active:{
      // background:'#f78320',
      background:'#fff',
      textDecoration:'none',
    },
    activeScrolled:{
      // background:'#f78320',
      background:'#f78320',
      textDecoration:'none',
    },
    activeLink:{
      textDecoration:'none',
      // color:'#fff',
      color:'#f78320',
      
    },
    activeLinkScroll:{
      textDecoration:'none',
      color:'#fff',
    }
  }));

export const Header = ()=>{
    const classes = useStyles();
    const [scroll, setScroll] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorBrochure, setAnchorBrochure] = React.useState(null);
    const [anchorPlot, setAnchorPlot] = React.useState(null);

    const open = Boolean(anchorEl);
    const openBrochure = Boolean(anchorBrochure);
    const openPlot = Boolean(anchorPlot);

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

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

    const handleClickPlot = (event) => {
      setAnchorPlot(event.currentTarget);
    };
  
    const handleClosePlot = () => {
      setAnchorPlot(null);
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
              // classes={{
              //     root:classes.root,
              //   }}
            >
            <Toolbar >
                <div className={classes.logoContainer}>
                  <img src={"logoWhite.png"} className={classes.logo} alt="logo" />
                </div>
               
                  <Button color="inherit" classes={{ root : classes.menuButton}} className={splitLocation[1] === "" ? (scroll ? classes.activeScrolled: classes.active ) : ""} ><Link  classes={classes.menuLink} className={splitLocation[1] === "" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/">HOME </Link></Button>
                  <Button color="inherit" classes={{ root : classes.menuButton}} className={splitLocation[1] === "about" ? (scroll ? classes.activeScrolled: classes.active ) : ""}><Link classes={classes.menuLink} className={splitLocation[1] === "about" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink}  to="/about">ABOUT US </Link></Button>
               
                {/* <Link to="/featured-projects">
                  <Button color="inherit" classes={{ root : classes.menuButton}}>
                    FEATURED PROJECT
                  <KeyboardArrowDownIcon classes={{root: classes.menuItemIcon}}></KeyboardArrowDownIcon>
                  </Button>
                </Link> */}

                <Button color="inherit" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} classes={{root: classes.menuButton}} className={splitLocation[1] === "1" ? (scroll ? classes.activeScrolled: classes.active ) : ""}>
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
                    background: "#fff",
                    marginTop:'30px',
                    marginLeft:'10px'
                  }
                }}
                >
                  <MenuItem onClick={handleClose}  className={splitLocation[1] === "serenenaturevalley" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "serenenaturevalley" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/serenenaturevalley">Nature Valley</Link></MenuItem>
                  <MenuItem onClick={handleClose} className={splitLocation[1] === "serenecity" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "serenecity" ? (scroll? classes.activeLinkScroll : classes.activeLink): classes.menuLink} to="/serenecity">Serene City</Link></MenuItem>
                  <MenuItem onClick={handleClose} className={splitLocation[1] === "serenevillas" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "serenevillas" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/serenevillas">Serene Villas</Link></MenuItem>
                  <MenuItem onClick={handleClose} className={splitLocation[1] === "sereneresorts" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "sereneresorts" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/sereneresorts">Serene Resorts</Link></MenuItem>
                </Menu>



                <Button color="inherit" classes={{ root : classes.menuButton}}>
                  COMPLETED PROJECTS
                  <KeyboardArrowDownIcon classes={{root: classes.menuItemIcon}}></KeyboardArrowDownIcon>
                </Button>
                {/* <Button color="inherit" classes={{ root : classes.menuButton}}>GALLERY</Button> */}
                <Button color="inherit" classes={{ root : classes.menuButton}} className={splitLocation[1] === "gallery" ? (scroll ? classes.activeScrolled: classes.active ) : ""}><Link classes={classes.menuLink} className={splitLocation[1] === "gallery" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink}  to="/gallery">Gallery </Link></Button>
                {/* <Button color="inherit" classes={{ root : classes.menuButton}} className={splitLocation[1] === "brochure" ? classes.active : ""}><Link classes={classes.menuLink} className={splitLocation[1] === "brochure" ? classes.activeLink : classes.menuLink}  to="/home">BROCHURES </Link></Button> */}
                {/* <Button color="inherit" classes={{ root : classes.menuButton}} ><a classes={classes.menuLink} href="sample.pdf" target = "_blank"  to="/home">BROCHURES </a></Button> */}
                <Button color="inherit" aria-controls="fade-brochure" aria-haspopup="true" onClick={handleClickBrochure} classes={{ root : classes.menuButton}} className={splitLocation[1] === "1" ?(scroll ? classes.activeScrolled: classes.active ) : ""}>
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
                    background: "#fff",
                    marginTop:'30px',
                    marginLeft:'10px'
                  }
                }}
                >
                  <MenuItem onClick={handleCloseBrochure} ><a className={classes.menuLink} href="jb-serene-city.pdf" target = "_blank">Serene City</a></MenuItem>
                  <MenuItem onClick={handleCloseBrochure} ><a className={classes.menuLink} href="jb-serene-villas.pdf" target = "_blank">Serene Villas</a></MenuItem>
                  <MenuItem onClick={handleCloseBrochure} ><a className={classes.menuLink}href="jb-serene-resort.pdf" target = "_blank">Serene Resorts</a></MenuItem>
                </Menu>
                <Button color="inherit" classes={{ root : classes.menuButton}} className={splitLocation[1] === "contactus" ? (scroll ? classes.activeScrolled: classes.active ): ""}><Link classes={classes.menuLink} className={splitLocation[1] === "contactus" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink}  to="/contactus">CONTACT US </Link></Button>
                <Button color="inherit" aria-controls="fade-plot" aria-haspopup="true" onClick={handleClickPlot}  classes={{ root : scroll? classes.menuButtonHighlightedScroll : classes.menuButtonHighlighted}}>
                  PLOT AVAILABILITY
                  <KeyboardArrowDownIcon classes={{root: classes.menuItemIcon}}></KeyboardArrowDownIcon>
                </Button>
                <Menu
                
                id="fade-plot"
                anchorEl={anchorPlot}
                keepMounted
                open={openPlot}
                onClose={handleClosePlot}
                TransitionComponent={Fade}
                PaperProps={{
                  style: {
                    background: "#fff",
                    marginTop:'30px',
                    marginLeft:'10px'
                  }
                }}
                >
                  <MenuItem className={classes.menuLink} onClick={handleClosePlot} ><a className={classes.menuLink} href="http://43.240.65.20/NextoraMaps/home/project/12345" target = "_blank">Serene City</a></MenuItem>
                <MenuItem onClick={handleClosePlot} ><a className={classes.menuLink} href="http://43.240.65.20/NextoraMaps/home/project/JBEC001" target = "_blank">Serene Villas</a></MenuItem>
                <MenuItem onClick={handleClosePlot} ><a className={classes.menuLink}href="http://43.240.65.20/NextoraMaps/home/project/JB00011" target = "_blank">Serene Resorts</a></MenuItem>
                <MenuItem onClick={handleClosePlot} ><a className={classes.menuLink}href="http://43.240.65.20/NextoraMaps/home/project/JB00040" target = "_blank">Serene Nature Valley</a></MenuItem>
              </Menu>
            </Toolbar>
            </AppBar>
        </div>
  
    )
}

