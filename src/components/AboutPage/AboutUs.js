import {
    Container,
    Typography,
    Card,
    Grid,
    CardMedia

} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GoToTop from './../GoToTop'
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
    root: {
      width: '100%',
      color: '#f78320',
      fontSize: '24px',
      fontFamily: 'Montserrat',
    //   backgroundColor: '#fff',
      marginTop:'25px',
      marginBottom:'20px'
    },
    container:{
        maxWidth:'100%',
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
    // imageroot:{
    //     height: '360px',
    //     outline: 'none',
    //     border:'none',
    //    width: '4%',
    //    float:'left',
    // },
    media: {
        height: '0',
        paddingTop: '75%', // 16:9,
        boxShadow:'none',
        border:'none',
      },
    description: {
        fontFamily: 'Montserrat',
       textAlign:'justify',
       fontSize: '16px',
       lineHeight:'32px',
       ['@media (min-width:360px)']: { // eslint-disable-line no-useless-computed-key
        fontSize: '12px',
        lineHeight:'24px',
        padding: '10px',
       },
       ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
        fontSize: '12px',
        lineHeight:'24px',
        padding: '10px',
       },
       ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
        fontSize: '14px',
        lineHeight:'28px',
        padding: '10px',
       },
       ['@media (min-width:1513px)']: { // eslint-disable-line no-useless-computed-key
        fontSize: '16px',
        lineHeight:'40px',
        padding: '10px',
       },
    },
    cardMedia:{
        boxShadow:'none',
        margin:'auto'
    },
    containerRoot:{
        marginTop: '10px',
    }
  
  });


export const AboutUs = (props)=>{
    const classes = useStyles();
    return (
        <div>
            <Container fixed className={classes.container}>
                <Typography  classes={{ root : classes.root}}>ABOUT US</Typography>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={12} sm={4} md={4}>
                        <Card className={classes.cardMedia} >
                            <CardMedia
                                    className={classes.media}
                                    // image="https://picsum.photos/id/1029/2048/2048"
                                    image="aboutus.png"
                                    title="Aboutus"
                                    data-aos="fade-left"
                                    data-aos-anchor-placement="bottom-bottom"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={8} md={8}>
                        <Typography  classes={{ root : classes.description}}>{props.aboutus !== undefined? props.aboutus : 'No description'}</Typography>
                    </Grid>
                </Grid>
            </Container>
            <GoToTop />
        </div>
       
    )
}