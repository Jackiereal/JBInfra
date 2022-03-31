import { Introduction } from "../AboutPage/Introduction";
import { Banner } from "../AboutPage/Banner"
// import { Introduction } from "./../HomePage/Introduction";
import { Quote } from '../AboutPage/Quote';
import { Contact } from "./Contact";
import { Address  } from "./Address";
import { Maphead } from "./Map"
import { Mapbranch } from "./Map"
import {
    Grid
} from '@material-ui/core';
import GoToTop from '../GoToTop';
import { Footer } from './../../components/Footer'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
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
    branchdown:{
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
    }

})
export const ContactUs = ()=>{
    const classes = useStyles()
    if(!window.location.hash){
        window.location = window.location + '#'
        window.location.reload()
      }
      window.scrollTo(0, 0);

    const addresses = [
        {
         type : 'HEAD OFFICE',
         lines : [
            'Plot No :1,2nd & 3rd Floor, Adj. B.D Reddy',
            'Gardens,Chaitanya Nagar,B.N.Reddy Nagar,',
            'Hyderabad -500 070',
            'sales@jbinfraprojects.in',
            '040 2955 4577', 
         ],
         map:'map1.png',
        },
        {
            type : 'BRANCH OFFICE',
            lines : [
                '7-1B,Sai Nagar Colony,Peddamberpet,Hayatnagar Mandal,',
                'Hyderabad,',
                'Telangana 501505',
                'anilsuskandla@gmail.com',
                '040 2955 4577'
            ],
            map:'map2.png',
           }
    ]


    return (
        <div className={classes.entire}>

           <Banner image={'contactusintro.png'}/>
            <Contact/>
            <Grid container xs={12} style={{ 'marginBottom' : '40px'}}>
                <Grid item xs={12} sm={6}>
                    <Address address={addresses[0]}/>
                </Grid>
                <Grid item  className={classes.branchdown} xs={12} sm={6}>
                    <Address address={addresses[1]}/>
                </Grid>
            </Grid>
            <Grid container xs={12} style={{ 'marginBottom' : '100px'}}>
                <Grid item xs={12} sm={6}>
                   <Maphead address={addresses[0]}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                   <Mapbranch address={addresses[1]}/>
                </Grid>
            </Grid>
            <Quote/>
            <Footer></Footer>
        <GoToTop />
        </div>
    )
}