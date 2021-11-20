import React from 'react';
import { makeStyles } from  '@material-ui/core/styles';
import { 
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
} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      // backgroundColor:'#f78320',
      // backgroundColor: 'rgba(255,255,255,0.9)',
      backgroundColor:'#fff',
      boxShadow:'none',
      // opacity:'0.9',
      
    },
    rootScroll: {
      flexGrow: 1,
      backgroundColor:'#fff',
      opacity: '1',
    },
    logoContainer:{
      ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
       width:'100%',
      },
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
      fontSize: '12px',
      fontFamily: 'MontserratSemiBold',
      textDecoration:'none',
      color:'#f78320',
      ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
        marginRight:0,
      },
    },
    menuLink: {
      textDecoration: 'none ',
      // color: '#fff',
      color:'#f78320',
    },
   
    menuButtonHighlightedScroll: {
      border:'1px solid #f78320',
      // backgroundColor: '#f78320',
      color: '#f78320',
      
      fontFamily: 'MontserratSemiBold',
      // marginRight: theme.spacing(1),
      fontSize: '12px',
      '&:hover': {
        border:'1px solid #f78320',
        // backgroundColor: '#f78320',
        color: '#f78320',
      }
    },
    menuButtonHighlighted: {
      border:'1px solid #f78320',
      // backgroundColor: '#f78320',
      color: '#f78320',
      fontFamily: 'MontserratSemiBold',
      // marginRight: theme.spacing(1),
      fontSize: '12px',
      '&:hover': {
        border:'1px solid #f78320',
        // backgroundColor: '#fff',
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
      background:'#f78320',
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
      color:'#fff',
      
    },
    activeLinkScroll:{
      textDecoration:'none',
      color:'#fff',
    },
    menuItems:{
      display:'block',
      ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
        display:'none',
      },
    },
    toolbar:{
      backgroundColor: '#fff',
    },
    iconDrawer:{
      color: '#f78320',
    }

  }));


const drawerWidth = 240;

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

export function Header(props) {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
    const classes = useStyles();
    const [scroll, setScroll] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const [anchorBrochure, setAnchorBrochure] = React.useState(null);
    const [anchorPlot, setAnchorPlot] = React.useState(null);

    const open = Boolean(anchorEl);
    const opencomp = Boolean(anchorEl1);
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
      handleDrawerToggle()
    };

    const handleClickcomp = (event) => {
      setAnchorEl1(event.currentTarget);
      handleDrawerToggle()
    };
  
    const handleClosecomp = () => {
      setAnchorEl1(null);
    };

    const handleClickBrochure = (event) => {
      setAnchorBrochure(event.currentTarget);
      handleDrawerToggle()
    };
  
    const handleCloseBrochure = () => {
      setAnchorBrochure(null);
    };

    const handleClickPlot = (event) => {
      setAnchorPlot(event.currentTarget);
      handleDrawerToggle()
    };
  
    const handleClosePlot = () => {
      setAnchorPlot(null);
    };

    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 200);
      });
    }, []); 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (

      <div className={classes.root}>
      <AppBar
        position="fixed"
        classes={{
          root:scroll ? classes.rootScroll : classes.root,
        }}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            className={classes.iconDrawer}
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.logoContainer}>
                 <Link  classes={classes.menuLink} className={splitLocation[1] === "" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/"><img src={"logoWhite.png"} className={classes.logo} alt="logo" /></Link>
          </div>
          <div className={classes.menuItems}>
               
                   <Button color="inherit" classes={{ root : classes.menuButton}} className={splitLocation[1] === "" ? (scroll ? classes.activeScrolled: classes.active ) : ""} ><Link  classes={classes.menuLink} className={splitLocation[1] === "" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/">HOME </Link></Button>
                   <Button color="inherit" classes={{ root : classes.menuButton}} className={splitLocation[1] === "about" ? (scroll ? classes.activeScrolled: classes.active ) : ""}><Link classes={classes.menuLink} className={splitLocation[1] === "about" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink}  to="/about">ABOUT US </Link></Button>
              

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
                    marginLeft:'10px',
                  }
                }}
                >
                  <MenuItem onClick={handleClose} className={splitLocation[1] === "serenenaturevalley" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "serenenaturevalley" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/serenenaturevalley">Nature Valley</Link></MenuItem>
                  <MenuItem onClick={handleClose} className={splitLocation[1] === "hillsidecounty" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "hillsidecounty" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/hillsidecounty">JB Hillside County</Link></MenuItem>
                  <MenuItem onClick={handleClose} className={splitLocation[1] === "serenecity" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "serenecity" ? (scroll? classes.activeLinkScroll : classes.activeLink): classes.menuLink} to="/serenecity">Serene City</Link></MenuItem>
                  <MenuItem onClick={handleClose} className={splitLocation[1] === "serenevillas" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "serenevillas" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/serenevillas">Serene Villas</Link></MenuItem>
                  <MenuItem onClick={handleClose} className={splitLocation[1] === "sereneresorts" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "sereneresorts" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/sereneresorts">Serene Resorts</Link></MenuItem>
                </Menu>


                <Button color="inherit" classes={{ root : classes.menuButton}} className={splitLocation[1] === "ourjourney" ? (scroll ? classes.activeScrolled: classes.active ) : ""}><Link classes={classes.menuLink} className={splitLocation[1] === "ourjourney" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink}  to="/ourjourney">COMPLETED PROJECTS </Link></Button>
                 {/* <Button color="inherit"  aria-controls="fade-menu-completed" aria-haspopup="true" onClick={handleClickcomp} classes={{root: classes.menuButton}} className={splitLocation[1] === "1" ? (scroll ? classes.activeScrolled: classes.active ) : ""}>
                   COMPLETED PROJECTS
                   <KeyboardArrowDownIcon classes={{root: classes.menuItemIcon}}></KeyboardArrowDownIcon>
                 </Button>
                 <Menu
                
                id="fade-menu-completed"
                anchorEl={anchorEl1}
                keepMounted
                open={opencomp}
                onClose={handleClosecomp}
                TransitionComponent={Fade}
                PaperProps={{
                  style: {
                    background: "#fff",
                    marginTop:'30px',
                    marginLeft:'10px'
                  }
                }}
                >
                  <MenuItem onClick={handleClosecomp}  className={splitLocation[1] === "greenmeadows" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "greenmeadows" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/greenmeadows">JB's Green Meadows</Link></MenuItem>
                  <MenuItem onClick={handleClosecomp} className={splitLocation[1] === "jbresorts" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "jbresorts" ? (scroll? classes.activeLinkScroll : classes.activeLink): classes.menuLink} to="/jbresorts">JB Resort</Link></MenuItem>
                  <MenuItem onClick={handleClosecomp} className={splitLocation[1] === "jasminecity" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "jasminecity" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/jasminecity">Jasmine City</Link></MenuItem>
                  <MenuItem onClick={handleClosecomp} className={splitLocation[1] === "jasminecity2" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "jasminecity2" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/jasminecity2">Jasmine City II</Link></MenuItem>
                </Menu> */}
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
                {/* <MenuItem className={classes.menuLink} onClick={handleClosePlot} ><a className={classes.menuLink} href="http://43.240.65.20/NextoraMaps/home/project/JB00040" target = "_blank">JB Nature Valley Phase-1</a></MenuItem>
                <MenuItem onClick={handleClosePlot} ><a className={classes.menuLink} href="http://43.240.65.20/NextoraMaps/home/project/JBI00050" target = "_blank">JB Nature Valley Phase-2</a></MenuItem>
                <MenuItem onClick={handleClosePlot} ><a className={classes.menuLink}href="http://43.240.65.20/NextoraMaps/home/project/JBI00052" target = "_blank">JB Nature Valley Phase-3</a></MenuItem>
                <MenuItem onClick={handleClosePlot} ><a className={classes.menuLink}href="http://43.240.65.20/NextoraMaps/home/project/JBI00054" target = "_blank">JB Nature Valley Phase-4</a></MenuItem>
                <MenuItem onClick={handleClosePlot} ><a className={classes.menuLink} href="http://43.240.65.20/NextoraMaps/home/project/12345" target = "_blank">JB SERENECITY</a></MenuItem>
                <MenuItem onClick={handleClosePlot} ><a className={classes.menuLink} href="http://43.240.65.20/NextoraMaps/home/project/12354" target = "_blank">JB SERENECITY Phase-2</a></MenuItem>
                <MenuItem onClick={handleClosePlot} ><a className={classes.menuLink}href="http://43.240.65.20/NextoraMaps/home/project/JB003" target = "_blank">JB SERENECITY Phase-3</a></MenuItem>
                <MenuItem onClick={handleClosePlot} ><a className={classes.menuLink}href="http://43.240.65.20/NextoraMaps/home/project/JB004" target = "_blank">JB SERENECITY Phase-4</a></MenuItem> */}
                <MenuItem onClick={handleClosePlot} className={splitLocation[1] === "plotavailability/JB00040" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "plotavailability/JB00040" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/plotavailability/JB00040">JB Nature Valley Phase-1</Link></MenuItem>
                <MenuItem onClick={handleClosePlot} className={splitLocation[1] === "plotavailability/JBI00050" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "plotavailability/JBI00050" ? (scroll? classes.activeLinkScroll : classes.activeLink): classes.menuLink} to="/plotavailability/JBI00050">JB Resort</Link></MenuItem>
                <MenuItem onClick={handleClosePlot} className={splitLocation[1] === "plotavailability/JBI00052" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "plotavailability/JBI00052" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/plotavailability/JBI00052">Jasmine City</Link></MenuItem>
                <MenuItem onClick={handleClosePlot} className={splitLocation[1] === "plotavailability/JBI00054" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "plotavailability/JBI00054" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/plotavailability/JBI00054">Jasmine City II</Link></MenuItem>
              </Menu>
              </div>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
           <Button onClick={handleDrawerToggle} color="inherit" classes={{ root : classes.menuButton}} className={splitLocation[1] === "" ? (scroll ? classes.activeScrolled: classes.active ) : ""} ><Link  classes={classes.menuLink} className={splitLocation[1] === "" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/">HOME </Link></Button>
                   <Button onClick={handleDrawerToggle} color="inherit" classes={{ root : classes.menuButton}} className={splitLocation[1] === "about" ? (scroll ? classes.activeScrolled: classes.active ) : ""}><Link classes={classes.menuLink} className={splitLocation[1] === "about" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink}  to="/about">ABOUT US </Link></Button>
              

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
                    marginLeft:'10px',
                  }
                }}
                >
                  <MenuItem onClick={handleClose}  className={splitLocation[1] === "serenenaturevalley" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "serenenaturevalley" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/serenenaturevalley">Nature Valley</Link></MenuItem>
                  <MenuItem onClick={handleClose} className={splitLocation[1] === "hillsidecounty" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "hillsidecounty" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/hillsidecounty">JB Hillside County</Link></MenuItem>
                  <MenuItem onClick={handleClose} className={splitLocation[1] === "serenecity" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "serenecity" ? (scroll? classes.activeLinkScroll : classes.activeLink): classes.menuLink} to="/serenecity">Serene City</Link></MenuItem>
                  <MenuItem onClick={handleClose} className={splitLocation[1] === "serenevillas" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "serenevillas" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/serenevillas">Serene Villas</Link></MenuItem>
                  <MenuItem onClick={handleClose} className={splitLocation[1] === "sereneresorts" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "sereneresorts" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/sereneresorts">Serene Resorts</Link></MenuItem>
                  
                </Menu>


                <Button onClick={handleDrawerToggle} color="inherit" classes={{ root : classes.menuButton}} className={splitLocation[1] === "ourjourney" ? (scroll ? classes.activeScrolled: classes.active ) : ""}><Link classes={classes.menuLink} className={splitLocation[1] === "about" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink}  to="/ourjourney">COMPLETED PROJECTS </Link></Button>
                 {/* <Button color="inherit"  aria-controls="fade-menu-completed" aria-haspopup="true" onClick={handleClickcomp} classes={{root: classes.menuButton}} className={splitLocation[1] === "1" ? (scroll ? classes.activeScrolled: classes.active ) : ""}>
                   COMPLETED PROJECTS
                   <KeyboardArrowDownIcon classes={{root: classes.menuItemIcon}}></KeyboardArrowDownIcon>
                 </Button>
                 <Menu
                
                id="fade-menu-completed"
                anchorEl={anchorEl1}
                keepMounted
                open={opencomp}
                onClose={handleClosecomp}
                TransitionComponent={Fade}
                PaperProps={{
                  style: {
                    background: "#fff",
                    marginTop:'30px',
                    marginLeft:'10px'
                  }
                }}
                >
                  <MenuItem onClick={handleClosecomp}  className={splitLocation[1] === "greenmeadows" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "greenmeadows" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/greenmeadows">JB's Green Meadows</Link></MenuItem>
                  <MenuItem onClick={handleClosecomp} className={splitLocation[1] === "jbresorts" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "jbresorts" ? (scroll? classes.activeLinkScroll : classes.activeLink): classes.menuLink} to="/jbresorts">JB Resort</Link></MenuItem>
                  <MenuItem onClick={handleClosecomp} className={splitLocation[1] === "jasminecity" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "jasminecity" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/jasminecity">Jasmine City</Link></MenuItem>
                  <MenuItem onClick={handleClosecomp} className={splitLocation[1] === "jasminecity2" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "jasminecity2" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/jasminecity2">Jasmine City II</Link></MenuItem>
                </Menu> */}
                {/* <Button color="inherit" classes={{ root : classes.menuButton}}>GALLERY</Button> */}
                <Button onClick={handleDrawerToggle} color="inherit" classes={{ root : classes.menuButton}} className={splitLocation[1] === "gallery" ? (scroll ? classes.activeScrolled: classes.active ) : ""}><Link classes={classes.menuLink} className={splitLocation[1] === "gallery" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink}  to="/gallery">Gallery </Link></Button>
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
                <Button onClick={handleDrawerToggle} color="inherit" classes={{ root : classes.menuButton}} className={splitLocation[1] === "contactus" ? (scroll ? classes.activeScrolled: classes.active ): ""}><Link classes={classes.menuLink} className={splitLocation[1] === "contactus" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink}  to="/contactus">CONTACT US </Link></Button>
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
                {/* <MenuItem className={classes.menuLink} onClick={handleClosePlot} ><a className={classes.menuLink} href="http://43.240.65.20/NextoraMaps/home/project/JB00040" target = "_blank">JB Nature Valley Phase-1</a></MenuItem>
                <MenuItem onClick={handleClosePlot} ><a className={classes.menuLink} href="http://43.240.65.20/NextoraMaps/home/project/JBI00050" target = "_blank">JB Nature Valley Phase-2</a></MenuItem>
                <MenuItem onClick={handleClosePlot} ><a className={classes.menuLink}href="http://43.240.65.20/NextoraMaps/home/project/JBI00052" target = "_blank">JB Nature Valley Phase-3</a></MenuItem>
                <MenuItem onClick={handleClosePlot} ><a className={classes.menuLink}href="http://43.240.65.20/NextoraMaps/home/project/JBI00054" target = "_blank">JB Nature Valley Phase-4</a></MenuItem>
                <MenuItem onClick={handleClosePlot} ><a className={classes.menuLink} href="http://43.240.65.20/NextoraMaps/home/project/12345" target = "_blank">JB SERENECITY</a></MenuItem>
                <MenuItem onClick={handleClosePlot} ><a className={classes.menuLink} href="http://43.240.65.20/NextoraMaps/home/project/12354" target = "_blank">JB SERENECITY Phase-2</a></MenuItem>
                <MenuItem onClick={handleClosePlot} ><a className={classes.menuLink}href="http://43.240.65.20/NextoraMaps/home/project/JB003" target = "_blank">JB SERENECITY Phase-3</a></MenuItem>
                <MenuItem onClick={handleClosePlot} ><a className={classes.menuLink}href="http://43.240.65.20/NextoraMaps/home/project/JB004" target = "_blank">JB SERENECITY Phase-4</a></MenuItem> */}
                <MenuItem onClick={handleClosePlot}  className={splitLocation[1] === "plotavailability/JB00040" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "plotavailability/JB00040" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/plotavailability/JB00040">JB Nature Valley Phase-1</Link></MenuItem>
                <MenuItem onClick={handleClosePlot} className={splitLocation[1] === "plotavailability/JBI00050" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "plotavailability/JBI00050" ? (scroll? classes.activeLinkScroll : classes.activeLink): classes.menuLink} to="/plotavailability/JBI00050">JB Nature Valley Phase-2</Link></MenuItem>
                <MenuItem onClick={handleClosePlot} className={splitLocation[1] === "plotavailability/JBI00052" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "plotavailability/JBI00052" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/plotavailability/JBI00052">JB Nature Valley Phase-3</Link></MenuItem>
                <MenuItem onClick={handleClosePlot} className={splitLocation[1] === "plotavailability/JBI00054" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "plotavailability/JBI00054" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/plotavailability/JBI00054">JB Nature Valley Phase-4</Link></MenuItem>
                <MenuItem onClick={handleClosePlot}  className={splitLocation[1] === "plotavailability/12345" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "plotavailability/12345" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/plotavailability/12345">JB SERENECITY</Link></MenuItem>
                <MenuItem onClick={handleClosePlot} className={splitLocation[1] === "plotavailability/12354" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "plotavailability/12354" ? (scroll? classes.activeLinkScroll : classes.activeLink): classes.menuLink} to="/plotavailability/12354">JB SERENECITY Phase-2</Link></MenuItem>
                <MenuItem onClick={handleClosePlot} className={splitLocation[1] === "plotavailability/JB003" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "plotavailability/JB003" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/plotavailability/JB003">JB SERENECITY Phase-3</Link></MenuItem>
                <MenuItem onClick={handleClosePlot} className={splitLocation[1] === "plotavailability/JB004" ?  (scroll ? classes.activeScrolled: classes.active ) : ""}><Link className={splitLocation[1] === "plotavailability/JB004" ? (scroll? classes.activeLinkScroll : classes.activeLink) : classes.menuLink} to="/plotavailability/JB004">JB SERENECITY Phase-4</Link></MenuItem>

              </Menu>
        </Drawer>
      </Box>
      </div>
  );
}
