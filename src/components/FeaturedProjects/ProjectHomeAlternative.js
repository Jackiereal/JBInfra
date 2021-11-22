import {
    Container, Grid, Typography, Card, CardMedia
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import "./../../styles/scss/image-gallery.scss"
import ImageGallery from 'react-image-gallery';

const useStyles = makeStyles({
    container:{
        maxWidth:'100%',
    },
    grid:{
        marginTop:'50px',
    },
    title:{
        fontFamily: 'Montserrat',
        fontSize: '18px',
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
        
    },
    media:{
        width: '100%',
        height:'100%',
        backgroundSize:'contain',
        backgroundPosition:'top',
       
    },
    containerRoot:{
        // marginTop:'50px',
        // backgroundImage:  'url("intro.gif")',
        margin:0,
        padding:0,
        maxWidth: '100%',
        height:'auto',
       
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
          height:'1100px'
        },
  
        // paddingTop:'200px',
        // paddingLeft:'100px'
    },
})

const images = [
    {
        original: 'serenenaturevalley.jpg',
        thumbnail: 'serenenaturevalley.jpg',
      },
      {
        original: 'sereneresorts.jpg',
        thumbnail: 'sereneresorts.jpg',
      },
      {
        original: 'serenevillas.jpg',
        thumbnail: 'serenevillas.jpg',
      },
]

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

export const ProjectHomeAlternative = (props)=>{
    const classes = useStyles();
    const projectName = props.projectName;
    console.log(projectName)
    console.log(props.project)

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
                <Grid item xs={12}>
                    <ImageGallery items={images} infinite={true} autoPlay={true} showPlayButton={false}/>;
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="Phase I" />
                        <Tab label="Phase II" />
                        <Tab label="Phase III" />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <Container fixed classes={{root : classes.containerRoot}}>
                            <Card classes={{root: classes.cardRoot}}>
                                <CardMedia
                                    
                                    className={classes.media}
                                    image={`${projectName}.jpg`}
                                    controls
                                />
                            
                            </Card> 
                        </Container>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Container fixed classes={{root : classes.containerRoot}}>
                            <Card classes={{root: classes.cardRoot}}>
                                <CardMedia
                                    
                                    className={classes.media}
                                    image={`${projectName}.jpg`}
                                    controls
                                />
                            
                            </Card> 
                        </Container>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Container fixed classes={{root : classes.containerRoot}}>
                            <Card classes={{root: classes.cardRoot}}>
                                <CardMedia
                                    
                                    className={classes.media}
                                    image={`${projectName}.jpg`}
                                    controls
                                />
                            
                            </Card> 
                        </Container>
                    </TabPanel>
                </Grid>
            </Grid>
        </Container> 
    )
}