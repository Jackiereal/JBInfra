import { Introduction } from "./../AboutPage/Introduction";
import { Banner } from "./../AboutPage/Banner"
// import { Introduction } from "./../HomePage/Introduction";
import { Quote } from './../AboutPage/Quote'
import { Footer } from './../../components/Footer'
import { GalleryComponent } from './GalleryComponent'
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GoToTop from './../GoToTop';
const useStyles = makeStyles({
    
    containerRoot:{
        marginTop:'100px',
        marginBottom:'30px',
    }, 
    rootImageAlign:{
        left: '50px'
    },
    entire:{
        ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
          marginTop:'50px',
        },
        ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
          marginTop:'1px',
        },
        ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
          marginTop:'1px',
        },
        ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
          marginTop:'1px',
        },
        ['@media (min-width:1513px)']: { // eslint-disable-line no-useless-computed-key
          marginTop:'1px',
        },

      },
})

export const Gallery = ()=>{
    const classes = useStyles();
    const [projects,setProjects] = useState([]);

  if(!window.location.hash){
    window.location = window.location + '#'
    window.location.reload()
  }
  setTimeout(() => {window.scrollTo(0, 0); }, 1000);
  setTimeout(() => {window.scrollTo(0, 0); }, 1000);
  setTimeout(() => {window.scrollTo(0, 0); }, 1000);
    return (
        <div className={classes.entire}>
        <div>
            <Banner image={'galleryintro.png'}/>
        </div>
        <div className={classes.rootImageAlign}>
            <GalleryComponent/>
        </div>
        <div className={classes.containerRoot}>
             <Quote/>
             <Footer></Footer>
        </div>
        <GoToTop/>
        </div>

    )
}