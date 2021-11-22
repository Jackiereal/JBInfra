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

  if(!window.location.hash){
    window.location = window.location + '#'
    window.location.reload()
  }
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
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
            {/* <Introduction/> */}
            <IntroVideo/>
            <Projects/>
            <Banner image={'curve_1.png'}/>
            <Journey/>
            <Banner image={'curve_2.png'}/>
            <Testimonials/>
            <Quote/>
            <GoToTop/>
        </div>
// }
//         </div>

        
    )
}