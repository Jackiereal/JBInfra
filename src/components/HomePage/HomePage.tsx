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
})


export const HomePage = ()=>{
    const classes = useStyles()
    const [projects,setProjects] = useState([]);
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    

  if(!window.location.hash){
    window.location = window.location + '#'
    window.location.reload()
    // let initialValidSlug = '';
    //setTimeout(() => {  console.log("World!"); }, 2000);
    // window.addEventListener('load', () => {
    //   window.location.hash = '';
    //   window.location.hash = (initialValidSlug ? initialValidSlug : '');
    //   window.scrollBy(0, -document.getElementsByClassName("heading")[0].clientHeight);
    // });

  }

  setTimeout(() => {window.scrollTo(0, 0); }, 1000);
  setTimeout(() => {window.scrollTo(0, 0); }, 1000);
  setTimeout(() => {window.scrollTo(0, 0); }, 1000);
  
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    // setLoading(true);
    // setTimeout(()=>{setLoading(false)},8000);

    // }, [])
    
    return (
        // <div>
        //     {
        //         loading ?
        // <div className={classes.loaderContainer}>
        
                
        //         <RingLoader color={"#f78320"} loading={loading} size={100} />
               
        // </div>
        //  :
        <div>
        <div>
            
            {/* <Introduction/> */}
            { splitLocation[1] === "" ? <Disclaimer/>: null}
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
// }
//         </div>

        
    )
}
