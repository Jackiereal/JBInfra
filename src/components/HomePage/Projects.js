import {
    Container,
    Typography,
    Grid,
    Button,

} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ProjectCard } from "./ProjectCard";
import { 
    Link,
    NavLink,
    useLocation
  } from 'react-router-dom';
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
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation
  
  });

const useStyles = makeStyles({
    containerRoot:{
        backgroundImage:  'url("ourprime.png")',
        // backgroundPosition: 'left',
        backgroundSize:'100% auto',
        backgroundRepeat: 'no-repeat',
        // height:'400px',
        width:'100%',
        maxWidth:'100%',
        marginTop:'-200px',
        paddingTop:'100px',
        position:'relative',
        height:'1000px',
        ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'-60px',
            paddingTop:'40px',
            height:'1400px',
          },
          ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'-125px',
            paddingTop:'125px',
            height:'800px'
          },
          ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'-150px',
            paddingTop:'150px',
            height:'500px'
          },
          ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'-200px',
            paddingTop:'175px',
            height:'550px'
          },
          ['@media (min-width:1513px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'-300px',
            paddingTop:'225px',
            height:'650px'
          },
    },
  root: {
    width: '100%',
    color: '#f78320',
    fontSize: '24px',
    fontFamily: 'Montserrat',
    backgroundColor: 'transparent',
    marginTop:'25px',
    marginBottom:'20px'
  },
  cardbutton:{
    fontSize: '13px',
    fontFamily: 'Montserrat',
    backgroundColor: '#f78320',
    color:'#fff',
    margin:'-10px 30px 0px 30px',
    paddingLeft: '30px',
    paddingRight:'30px',
    "&:hover": {
        backgroundColor: '#fff',
        color:'#f78320',
        border:'1px solid #f78320',
    },
  },
  menuLink: {
    textDecoration: 'none ',
    color: '#fff',
    "&:hover": {
        color:'#f78320',
    },
  },
  image:{
      width:'100%',
      height:'auto'
      
  },
  readmoreContainer:{
    opacity:0,
    transition: "opacity 0.3s ease-in-out",
  },
  cardContainer:{
    "&:hover $readmoreContainer": {
      opacity:1,
  },
  }
  
});


export const Projects = ()=>{
    const classes = useStyles();
    const projectList = [
        {
            id: 1043,
            title : 'NATURE VALLEY',
            img: '1.jpg',
            name: 'serenenaturevalley',
            description : " JB's Serene Resort is Resort style living plotting project offering modern clubhouse"
        },
        {
            id: 1040,
            title : 'SERENE VILLAS',
            img: '3.jpg',
            name: 'serenevillas',
            description : " Serene Villas is HMDA approved 42 Acre Villa Project at Adibatla"
        },
        {
            id: 1029,
            title : 'SERENE CITY',
            img: '4.jpg',
            name: 'serenecity',
            description : " JB's Serene city is a 540 acre layout with Residential Plotting"
        },
        {
            id: 1048,
            title : 'SERENE RESORT',
            img: '8.jpg',
            name: 'sereneresorts',
            description : " JB's Serene Resort is Resort style living plotting project offering modern clubhouse"
        },
       
    ]
    return (
        <Container fixed classes={{root: classes.containerRoot}}>
            {/* <img classes={{root: classes.image}} src="design1.png"></img> */}
            <Typography  classes={{ root : classes.root}}>OUR PRIME PROJECTS</Typography>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={4}>
                {projectList.map((value,index) => (
                    <Grid key={value.id} item data-aos="fade-up" className={classes.cardContainer}>
                        <ProjectCard project={value}/>
                        <div className={classes.readmoreContainer}>
                          <Button className={classes.cardbutton}>
                              <Link className={classes.menuLink} to={`/${value.name}`}>Read More</Link>
                          </Button>
                        </div>
                    </Grid>
                ))}
                </Grid>
            </Grid>
        </Container>
    )
}