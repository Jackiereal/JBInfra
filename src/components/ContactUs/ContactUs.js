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
export const ContactUs = ()=>{

    if(!window.location.hash){
        window.location = window.location + '#'
        window.location.reload()
        window.scrollTo(0, 0);
      }
      

    const addresses = [
        {
         type : 'HEAD OFFICE',
         lines : [
            'Plot No :1,2nd & 3rd Floor, Adj. B.D Reddy',
            'Gardens,Chaitanya Nagar,B.N.Reddy Nagar,',
            'Hyderabad -500 070',
            'sales@jbinfraprojects.in',
            '040 2409 0939', 
         ],
         map:'map1.png',
        },
        {
            type : 'BRANCH OFFICE',
            lines : [
                "JB'S NATURE VALLEY",
                '7-1B,Sai Nagar Colony,Peddamberpet,Hayatnagar Mandal,',
                'Hyderabad,',
                'Telangana 501505',
                'customercare@jbinfraprojects.com',
                '040 2955 4577'
            ],
            map:'map2.png',
           }
    ]


    return (
        <div>
           <Banner image={'contactusintro.png'}/>
            <Contact/>
            <Grid container xs={12} style={{ 'marginBottom' : '40px'}}>
                <Grid item xs={12} sm={6}>
                    <Address address={addresses[0]}/>
                </Grid>
                <Grid item xs={12} sm={6}>
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
        <GoToTop />
        </div>
    )
}