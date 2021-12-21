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

export const JBNews = ()=>{
    const classes = useStyles();
    const [projects,setProjects] = useState([]);

    if(!window.location.hash){
      window.location = window.location + '#'
      window.location.reload()
    }

    window.scrollTo(0, 0);

    return (
        <div className={classes.entire}>
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