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
    }
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
        <div>
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