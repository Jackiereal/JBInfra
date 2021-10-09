import {
    Container,
    Typography,
    Grid,
    Card,
    CardMedia
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ContactForm } from "./ContactForm";
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
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation
  
  });

const useStyles = makeStyles({
  rootGrid:{
    marginBottom:'50px',
    background:'#eee',
  },
  root: {
    width: '100%',
    color: '#f78320',
    fontSize: '24px',
    fontFamily: 'Montserrat',
    backgroundColor: '#fff',
    marginTop:'25px',
    marginBottom:'20px'
  },
  imageroot:{
    height: '360px',
    outline: 'none',
    border:'none',
    width: '4%',
    float:'left',
},
media: {
    height: '0',
    paddingTop: '56.25%', // 16:9,
    boxShadow:'none',
    border:'none',
    verticalAlign:'middle',
    backgroundColor: '#eee'

  },
description: {
    fontFamily: 'Montserrat',
   textAlign:'justify',

},
cardMedia:{
    boxShadow:'none',
    width:'90%',
    margin:'auto',
    height:'auto',
    marginTop:'20px',
    marginBottom:'20px', 
},
containerRoot:{
    marginTop: '50px',
}

})

export const Contact = ()=>{
    const classes = useStyles();
    return (
        <Container fixed  classes={{root : classes.containerRoot}}>
            <Typography  classes={{ root : classes.root}}>Contact Us</Typography>
            <Grid container justifyContent="center" spacing={2} className={classes.rootGrid} >
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.cardMedia} >
                            <CardMedia
                                    className={classes.media}
                                    // image="https://picsum.photos/id/1029/2048/2048"
                                    image="contact.png"
                                    title="contactus"
                                    data-aos="fade-left"
                                    data-aos-anchor-placement="bottom-bottom"
                                />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ContactForm/>
                    </Grid>
                </Grid>
        </Container>
    )
}