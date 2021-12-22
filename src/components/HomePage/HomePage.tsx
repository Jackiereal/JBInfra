import { Projects } from "./Projects";
import { Journey } from "./Journey";
import { Testimonials } from "./Testimonials";
// import { Introduction } from "./Introduction";
import {  Introduction } from './../AboutPage/Introduction'
import { IntroVideo } from './IntroVideo';
import { Quote } from './../AboutPage/Quote';
import { Banner } from './../AboutPage/Banner';
import GoToTop from './../GoToTop';
import { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Footer } from './../../components/Footer';
import Disclaimer from './Disclaimer'
import { 
  useLocation
} from 'react-router-dom';

const useStyles = makeStyles({
    
    loaderContainer:{
        marginTop:"300px",
        marginBottom:"300px",
        textAlign: 'center',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:'100px'
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


export const HomePage = ()=>{
    const classes = useStyles()
    const [projects,setProjects] = useState([]);
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    
    
    // let isShowModal = localStorage.getItem('showModal')
    

  // if(!window.location.hash){
  //   window.location = window.location + '#'
  //   window.location.reload()
  // }

  // setTimeout(() => {window.scrollTo(0, 0); }, 1000);
  // setTimeout(() => {window.scrollTo(0, 0); }, 1000);
  // setTimeout(() => {window.scrollTo(0, 0); }, 1000);


  const [showModal, setShowModal] = useState(sessionStorage.getItem('showModal'))
    console.log(splitLocation)
    useEffect(()=>{
      if(showModal === null){
        sessionStorage.setItem('showModal','false')
      }
      // else if( showModal === 'true'){
      //   setShowModal('false')
      // }
    },[showModal])
    
    return (
        <div className={classes.entire}>
        <div>
            
            {/* <Introduction/> */}
            { showModal === null && splitLocation[1] === "" ? <Disclaimer/>: null}
            <IntroVideo/>
            <Projects/>
            <Banner image={'curve_1.png'}/>
            <Journey/>
            <Banner image={'curve_2.png'}/>
            <Testimonials/>
            <Quote/>
            <Footer></Footer>
            <GoToTop/>
        </div>
<GoToTop/>
         </div>
    )
}
