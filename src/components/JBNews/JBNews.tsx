import { Introduction } from "../AboutPage/Introduction";
import { Banner } from "../AboutPage/Banner"
// import { Introduction } from "./../HomePage/Introduction";
import { Quote } from '../AboutPage/Quote'
import { JBNewsComponent } from './JBNewsComponent'
import { makeStyles } from '@material-ui/core/styles';
import GoToTop from '../GoToTop';
import { useState, useEffect } from 'react';
import { Footer } from './../../components/Footer'
const useStyles = makeStyles({
    
    containerRoot:{
        marginTop:'100px',
        marginBottom:'30px',
    },
})

export const JBNews = ()=>{
    const classes = useStyles();
    const [projects,setProjects] = useState([]);

    if(!window.location.hash){
      window.location = window.location + '#'
      window.location.reload()
    }

    window.scrollTo(0, 0);

    return (
        <div>
        <div>
            <Banner image={'jbinnews.jpg'}/>
            <JBNewsComponent/>
        </div>
        <div className={classes.containerRoot}>
             <Quote/>
        </div>
        <GoToTop/>
        <Footer></Footer>
        </div>

    )
}