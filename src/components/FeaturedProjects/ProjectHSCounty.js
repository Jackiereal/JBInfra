import {
    Container, Grid, Typography, Card, CardMedia
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import "./../../styles/scss/image-gallery.scss"
import App1 from './carousel.js';
import App2 from './ViewImage.js';
import "react-image-lightbox/style.css";

const useStyles = makeStyles({
    container:{
        backgroundImage:  'url("hillsidecountycurve.png")',
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
            marginTop:'-130px',
            paddingTop:'50px',
            height:'1700px',
          },
          ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'-150px',
            paddingTop:'125px',
            height:'1100px'
          },
          ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'-250px',
            paddingTop:'150px',
            height:'800px'
          },
          ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'-300px',
            paddingTop:'220px',
            height:'850px'
          },
          ['@media (min-width:1513px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'-400px',
            paddingTop:'280px',
            height:'650px'
          },
    },
    grid:{
        marginTop:'50px',
    },
    gridInner:{
        marginTop:'30px'
    },
    gridItems:{
        marginLeft:'0px',
        marginRight:'20px',
        height:220
    },
    title:{
        fontFamily: 'Montserrat',
        fontSize: '14px',
        textAlign: 'center',
        lineHeight: '36px',
        marginBottom:'10px',
        color:'#f78320',
    },
    description:{
        fontFamily: 'Montserrat',
        fontSize: '13px',
        textAlign: 'left',
        lineHeight: '26px',
        color:'#4a4a4a',
        marginBottom:'20px',
        ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '11px',
            lineHeight: '22px',
          },
          ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '12px',
            lineHeight: '24px',
          },
          ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '14px',
            lineHeight: '28px',
          },
          ['@media (min-width:1513px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '16px',
            lineHeight: '32px',
          },
    },
    listItem:{
        fontFamily: 'Montserrat',
        fontSize: '13px',
        textAlign: 'left',
        lineHeight: '26px',
        color:'#4a4a4a',
    },
    cardRoot:{
        // position:'relative',
        maxWidth: '100%',
        height:'100%',
        boxShadow: 'none',
        marginTop:'20px',
        position: 'relative'    
    },
    media:{
        width: '100%',
        height:'100%',
        backgroundSize:'contain',
        backgroundPosition:'top',
       
    },
    title:{
        fontFamily: 'Montserrat',
        fontSize: '18px',
        textAlign: 'center',
        lineHeight: '36px',
        color:'#f78320',
        ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'20px',
          },
          ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'20px',
          },
          ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'20px',
          },
          ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'20px',
          },
          ['@media (min-width:1513px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'20px',
          },
    },
    containerRoot:{
        // marginTop:'50px',
        // backgroundImage:  'url("intro.gif")',
        margin:0,
        padding:0,
        maxWidth: '100%',
        height:'auto',
        marginTop:"-20px",
       
        ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
          height:'200px'
        },
        ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
          height:'400px'
        },
        ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
          height:'600px'
        },
        ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
          height:'750px'
        },
        ['@media (min-width:1513px)']: { // eslint-disable-line no-useless-computed-key
          height:'800px'
        },
  
        // paddingTop:'200px',
        // paddingLeft:'100px'
    },
    listItem:{
        fontFamily: 'Montserrat',
        fontSize: '13px',
        textAlign: 'left',
        lineHeight: '26px',
        color:'#4a4a4a',
    },
})

// const images = [
//     {
//         original: 'serenenaturevalley.jpg',
//         thumbnail: 'serenenaturevalley.jpg',
//       },
//       {
//         original: 'sereneresorts.jpg',
//         thumbnail: 'sereneresorts.jpg',
//       },
//       {
//         original: 'serenevillas.jpg',
//         thumbnail: 'serenevillas.jpg',
//       },
// ]

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

export const ProjectHSCounty = (props)=>{
    const classes = useStyles();
    const projectName = props.projectName;
    console.log(projectName)
    console.log(props.project)
    const projectHighlights = props.project.valuesproject;
    const locationHighlights = props.project.valueslocation;
    const images = ['hc1.jpg', 'hc2.jpg','hc3.jpg','hc4.jpg','hc5.jpg','hc6.jpg','hc7.jpg','hc8.jpg','hc9.jpg','hc10.jpg','hc11.jpg','hc12.jpg','hc13.jpg','hc14.jpg'];
    
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container className={classes.container}>
            <Grid className={classes.grid} container xs={12}>
                <Grid item xs={12}>
                    <Typography className={classes.title}>OVERVIEW</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.description}>{props.project.overview}</Typography>
                </Grid>
                <Grid className={classes.gridItems} item xs={12}>
                    <div>
                        <link
                        rel="stylesheet"
                        type="text/css"
                        charset="UTF-8"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                        />
                        <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                        />

                        <div>
                        <App1 autoPlay={true} images={images}/>
                        </div>
                    </div>
                    {/* <ImageGallery items={images} infinite={true} autoPlay={true} showPlayButton={false}/>; */}
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Typography className={classes.title}>PROJECT IMAGE</Typography>
                    <Container fixed classes={{root : classes.containerRoot}}>
                    <Card classes={{root: classes.cardRoot}}>
                    
                    <CardMedia
                        
                        className={classes.media}
                        image={`${projectName}.jpg`}
                        controls
                    />
                   
                </Card> 
             
            </Container>
                  
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography className={classes.title}>{props.project.titleproject}</Typography>
                    <ul>
                    {
                        projectHighlights.map( (value)=>{
                            return (
                                <li className={classes.listItem}>{value}</li>
                            )
                        })
                    }
                    </ul>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                    <Typography className={classes.title}>{props.project.titlelocation}</Typography>
                    <ul>
                    {
                        locationHighlights.map( (value)=>{
                            return (
                                <li className={classes.listItem}>{value}</li>
                            )
                        })
                    }
                    </ul>
                </Grid>
            </Grid>   
        </Container> 
    )
}