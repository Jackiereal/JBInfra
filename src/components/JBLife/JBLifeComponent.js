import {
    Container,
    Typography,
    Grid,
    Button,
    ButtonGroup,
    ImageList,
    ImageListItem,
    CardMedia,
    Card

} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { getProjectImages } from '../../services/services';
import { useState, useEffect, useCallback } from 'react';
import ImageViewer from "react-simple-image-viewer";
import ReactImageVideoLightbox from "react-image-video-lightbox";
import { DataSaverOffRounded } from '@mui/icons-material';

// import "./../../styles/scss/image-gallery.scss"
// import ImageGallery from 'react-image-gallery';



const useStyles = makeStyles({
  root: {
    width: '100%',
    color: '#f78320',
    fontSize: '24px',
    fontFamily: 'Montserrat',
    //backgroundColor: '#fff',
    marginTop:'50px',
    marginBottom:'0px'
  },
  descroot: {
    width: '100%',
    color: 'grey',
    fontSize: '12px',
    fontFamily: 'Montserrat',
    //backgroundColor: '#fff',
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
  rootImage: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#fff',
    height:'540px',
    marginBottom:'30px',
    marginTop:'50px',
  },
  imageList: {
    width: '90%',
    height: 480,
    margin:'auto',
    cursor:'pointer',
   
  },
  rootButtonGroup:{
    color: '#f78320',
    fontFamily: 'Montserrat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: '20px',
    },
  },
  buttons:{
    color: '#4a4a4a',
    fontFamily: 'Montserrat',
    fontSize: '14px',
    padding:'10px',
    background:'#fff',
    ['@media (max-width:360px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: '10px',
      
    },
  },
  active:{
    color: '#fff',
    background:'#f78320'
  },
  containerRoot:{
    marginTop:'30px',
    background:'#fff',
    backgroundPosition: 'left',
    backgroundSize:'100% auto',
    backgroundRepeat: 'no-repeat',
    height:'auto',
    width:'100%',
    maxWidth:'100%',
},
cardMedia:{
  boxShadow:'none',
  marginTop:'20px',
  width: '25%',
  marginLeft: 'auto',
  marginRight:'auto',
  ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
    width: '60%',
  },
  ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
    width: '40%',
  },
  ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
    width: '35%',
  },
  ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
    width: '30%',
  },
  ['@media (min-width:1513px)']: { // eslint-disable-line no-useless-computed-key
    width: '25%',
  },
},
media: {
  height: '0',
  paddingTop: '73%', // 16:9,
  boxShadow:'none',
  border:'none',
  width:"82%",
  margin:'auto'
},
});

const itemData = [
      {
        //  img :`https://picsum.photos/id/100/360/360`,
        img:'jblife1.jpg',
         title: 'Image',
        author: 'author',
         cols: 1,
         project : 1,
       },
       {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife2.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife3.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife4.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife5.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife6.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife7.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        //  img :`https://picsum.photos/id/100/360/360`,
        img:'jblife8.jpg',
         title: 'Image',
        author: 'author',
         cols: 1,
         project : 1,
       },
       {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife9.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife10.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife11.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife12.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife13.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife14.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        //  img :`https://picsum.photos/id/100/360/360`,
        img:'jblife15.jpg',
         title: 'Image',
        author: 'author',
         cols: 1,
         project : 1,
       },
       {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife16.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife17.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife18.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife19.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife20.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        //  img :`https://picsum.photos/id/100/360/360`,
        img:'jblife21.jpg',
         title: 'Image',
        author: 'author',
         cols: 1,
         project : 1,
       },
       {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife22.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife23.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife24.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife25.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife26.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife27.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        //  img :`https://picsum.photos/id/100/360/360`,
        img:'jblife28.jpg',
         title: 'Image',
        author: 'author',
         cols: 1,
         project : 1,
       },
       {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife29.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife30.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife31.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife32.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife33.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife34.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        //  img :`https://picsum.photos/id/100/360/360`,
        img:'jblife35.jpg',
         title: 'Image',
        author: 'author',
         cols: 1,
         project : 1,
       },
       {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife36.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife37.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife38.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife39.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife40.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        //  img :`https://picsum.photos/id/100/360/360`,
        img:'jblife41.jpg',
         title: 'Image',
        author: 'author',
         cols: 1,
         project : 1,
       },
       {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife42.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife43.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife44.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife45.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife46.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife47.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        //  img :`https://picsum.photos/id/100/360/360`,
        img:'jblife48.jpg',
         title: 'Image',
        author: 'author',
         cols: 1,
         project : 1,
       },
       {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife49.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife50.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife51.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife52.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife53.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife54.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        //  img :`https://picsum.photos/id/100/360/360`,
        img:'jblife55.jpg',
         title: 'Image',
        author: 'author',
         cols: 1,
         project : 1,
       },
       {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife56.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife57.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife58.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife59.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife60.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        //  img :`https://picsum.photos/id/100/360/360`,
        img:'jblife61.jpg',
         title: 'Image',
        author: 'author',
         cols: 1,
         project : 1,
       },
       {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife62.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife63.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife64.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife65.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife66.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife67.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        //  img :`https://picsum.photos/id/100/360/360`,
        img:'jblife68.jpg',
         title: 'Image',
        author: 'author',
         cols: 1,
         project : 1,
       },
       {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife69.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife70.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife71.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife72.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife73.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife74.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        //  img :`https://picsum.photos/id/100/360/360`,
        img:'jblife75.jpg',
         title: 'Image',
        author: 'author',
         cols: 1,
         project : 1,
       },
       {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife76.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife77.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife78.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife79.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife80.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife81.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife82.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife83.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jblife84.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
// today
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-1.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        //  img :`https://picsum.photos/id/100/360/360`,
        img:'Marathon-2.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-3.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-4.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-5.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-7.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-6.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-8.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-9.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-10.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-11.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-12.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        //  img :`https://picsum.photos/id/100/360/360`,
        img:'Marathon-13.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-14.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-15.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-16.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-17.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-18.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-19.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-20.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-21.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-22.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-23.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        //  img :`https://picsum.photos/id/100/360/360`,
        img:'Marathon-24.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-25.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-26.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-27.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-28.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-29.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-30.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-31.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-32.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-33.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-34.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        //  img :`https://picsum.photos/id/100/360/360`,
        img:'Marathon-35.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-36.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-37.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-38.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-39.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-40.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-41.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-42.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'Marathon-43.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
    ]

    

    const data = [
      
      {
        url: "https://www.youtube.com/embed/ScMzIvxBSi4",
        type: "video",
        altTag: "some video"
      },
    ];



    const getWidth = () => window.innerWidth 
    || document.documentElement.clientWidth 
    || document.body.clientWidth;
  
  function useCurrentWidth() {
    // save current window width in the state object
    let [width, setWidth] = useState(getWidth());
  
    // in this case useEffect will execute only once because
    // it does not have any dependencies.
    useEffect(() => {
      // timeoutId for debounce mechanism
      let timeoutId: NodeJS.Timeout;
      const resizeListener = () => {
        // prevent execution of previous setTimeout
        clearTimeout(timeoutId);
        // change width from the state object after 150 milliseconds
        timeoutId = setTimeout(() => setWidth(getWidth()), 150);
      };
      // set resize listener
      window.addEventListener('resize', resizeListener);
  
      // clean up function
      return () => {
        // remove resize listener
        window.removeEventListener('resize', resizeListener);
      }
    }, [])
  
    return width;
  }



export const JBLifeComponent = ()=>{
    // let { gallery } = useParams();
    const [gallery,setGallery] = useState([]);
    const [project,setProject] = useState(0);
    const [columns,setColumns] = useState(4);
    const [currentImage, setCurrentImage] = useState(0);
    const [currentVideo, setCurrentVideo] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [isYoutubeViewerOpen, setIsYoutubeViewerOpen] = useState(false);
    const [images, setImages] = useState(itemData)
    let imageList = images.map(item=>{
      return item.img;
    });

    let width = useCurrentWidth()

    useEffect(()=>{
     
    if(width < 600){
      setColumns(1)
    } 
    else if(width > 600 && width < 900){
      setColumns(2)
    }
    else if(width > 900 && width < 1200){
      setColumns(3)
    }
    else if(width > 1200 && width){
      setColumns(4)
    }
        // async function fetchProjectImages(project: number){
        // const response = await getProjectImages(project);
        // setGallery(response.data);
        // }
        // fetchProjectImages(project);
    },[project])
    const classes = useStyles();

    const handleButtonClick=(id)=>{
         setProject(id)  
         const filtered = itemData.filter(item=>{
          return id === 0 ? true : item.project === id;
        })
         setImages(filtered) 

    }

    const openImageViewer = useCallback((index) => {
      setCurrentImage(index);
      setIsViewerOpen(true);
    }, []);
  
    const openYoutubeImageViewer = useCallback((index) => {
      //  return <a style={{display: "table-cell"}} href="'https://www.youtube.com/embed/nfk6sCzRTbM?autoplay=1'" target="_blank">text</a>
    }, []);

    const closeImageViewer = () => {
      setCurrentImage(0);
      setIsViewerOpen(false);
    };

    const closeVideoViewer = () => {
      setCurrentVideo(0);
      setIsYoutubeViewerOpen(false);
    };

    const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }

    const handleToggle = () => setIsYoutubeViewerOpen(!isYoutubeViewerOpen);

    return (
        <Container fixed classes={{root : classes.containerRoot}}>
        {/* <div>
            <Typography  classes={{ root : classes.root}}>Employee of the month</Typography>

                        <Card className={classes.cardMedia} >
                            <CardMedia
                                    className={classes.media}
                                    // image="https://picsum.photos/id/1029/2048/2048"
                                    image="pratap.png"
                                    title="Aboutus"
                                    data-aos="fade-down"
                                    data-aos-anchor-placement="bottom-bottom"
                            />
                        </Card>
        </div> */}
         &nbsp;
            <Typography  classes={{ root : classes.root}}>Life at JB</Typography>
            <Typography  classes={{ root : classes.descroot}}>Your Happiness begins here...</Typography>
            {/* <div className={classes.rootButtonGroup}>
                <ButtonGroup size="small" variant="text" >
                    <Button onClick={()=>handleButtonClick(0)} classes={{root:classes.buttons}} className={project === 0 ? classes.active : ""}>All</Button>
                    <Button onClick={()=>handleButtonClick(1)} classes={{root:classes.buttons}} className={project === 1 ? classes.active : ""}>Nature Valley</Button>
                    <Button onClick={()=>handleButtonClick(2)} classes={{root:classes.buttons}} className={project === 2 ? classes.active : ""}>Serene City</Button>
                    <Button onClick={()=>handleButtonClick(3)} classes={{root:classes.buttons}} className={project === 3 ? classes.active : ""}>Serene Villas</Button>
                    <Button onClick={()=>handleButtonClick(4)} classes={{root:classes.buttons}} className={project === 4 ? classes.active : ""}>Serene Resort</Button>
                </ButtonGroup>
            </div> */}
            <div className={classes.rootImage}>
              {/* <ImageGallery items={images} infinite={true} autoPlay={true} showPlayButton={false}/>; */}
                <ImageList rowHeight={240} className={classes.imageList} cols={columns}>
                    {images.map((item,index) => (
                    <ImageListItem key={item.img} cols={item.cols || 1}>
                        <img src={item.img} alt={item.title} onClick={()=>openImageViewer(index)}/>
                    </ImageListItem>
                    
                    ))}
                     <ImageListItem>
                      <img src={'jblife85.jpg'} onClick={() => openInNewTab('jblifevideo1.mp4')}/>
                    </ImageListItem>
                    <ImageListItem>
                      <img src={'jblife86.jpg'} onClick={() => openInNewTab('jblifevideo2.mp4')}/>
                    </ImageListItem>
                    <ImageListItem>
                      <img src={'jblife87.jpg'} onClick={() => openInNewTab('jblifevideo3.mp4')}/>
                    </ImageListItem>
                </ImageList>
                {isViewerOpen && (
                  <ImageViewer
                    src={imageList}
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                    disableScroll={false}
                    backgroundStyle={{
                      backgroundColor: "rgba(0,0,0,0.9)"
                    }}
                    closeOnClickOutside={true}
                  />
                )}
                {/* {isYoutubeViewerOpen && (
                  <a style={{display: "table-cell"}} href="'https://www.youtube.com/embed/nfk6sCzRTbM?autoplay=1'" target="_blank">text</a>
                //   <ReactImageVideoLightbox
                //   data='https://www.youtube.com/embed/nfk6sCzRTbM?autoplay=1' 
                //   startIndex={0}
                //   showResourceCount={true}
                //   onCloseCallback={() => handleToggle()}
                // />
                )} */}
            </div>
        </Container>
    )
}