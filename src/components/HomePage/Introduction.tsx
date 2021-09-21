import {
    Container,
    Card,
    CardMedia,
    Typography

} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const useStyles = makeStyles({
    cardRoot:{
        position:'relative',
        width: '540px',
        height:'350px',
        backgroundColor: 'transparent',
        backgroundImage:  'url("laptop.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize:'100% auto',
        boxShadow: 'none',

    },
    media:{
        backgroundSize: 'contain',
        position: 'absolute',
        top: '0',
        left:'0',
        width: '100%',
        height: '100%',
        padding:'3% 14% ',
    },
    containerRoot:{
        // marginTop:'50px',
        // backgroundImage:  'url("intro.gif")',
        backgroundImage:  'url("intro2.png")',
        backgroundSize:'100% auto',
        height:'850px',
        width:'100%',
        backgroundRepeat: 'no-repeat',
        // paddingTop:'200px',
        // paddingLeft:'100px'
    },
    textFirst:{
        color:'#fff',
        fontSize:'28px',
        marginLeft:'100px',
        marginTop:'-250px',
        fontFamily: 'Avenir next',
        fontWeight:500,
    },
    textSecond:{
        color:'#fff',
        fontSize:'28px',
        marginLeft:'100px',
        fontFamily: 'Avenir next',
        fontWeight:500,
    },
    verticalBar:{
        width:'80%',
        height:'30px',
        backgroundColor:'#fff',
        marginLeft:'-160px',
        color:'#f78320',
        textAlign:'right',
        fontFamily:'Avenir next',
        paddingRight:'30px',
        paddingTop:'5px',
    }
})

export const Introduction = ()=>{
    const classes = useStyles();
    const images = [1,2,3,4,5,6,7]
    return (
        <Carousel stopOnHover={false} dynamicHeight={false} interval={7000} infiniteLoop={true} autoPlay={true} showThumbs={false} showIndicators={false} showArrows={false}>
                
                <div><img src="1.jpg" /></div>
                <div><img src="2.jpg" /></div>
                <div><img src="3.jpg" /></div>
                <div><img src="4.jpg" /></div>
                <div><img src="5.jpg" /></div>
                <div><img src="6.jpg" /></div>
                <div><img src="7.jpg" /></div>
                <div><img src="8.jpg" /></div>
            </Carousel>
        // <Container fixed classes={{root : classes.containerRoot}}>
        //     <div>
                
        //     </div>
             /* <Card classes={{root: classes.cardRoot}}>
                <CardMedia
                    component='video'
                    className={classes.media}
                    image={"gearth.mp4"}
                    controls
                />
               
            </Card> */
            /* <Typography className={classes.textFirst}>JB SERENE</Typography>
            <Typography className={classes.textSecond}>CLUBHOUSE</Typography>
            <div className={classes.verticalBar}>Your happiness begins here</div> */
        // </Container>
    )
}