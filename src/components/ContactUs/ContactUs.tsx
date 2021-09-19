import { Introduction } from "./../AboutPage/Introduction";
import { Quote } from './../AboutPage/Quote';
import { Contact } from "./Contact";
import { Address  } from "./Address";
import { Map } from "./Map"
import {
    Grid
} from '@material-ui/core';

export const ContactUs = ()=>{

    const addresses = [
        {
         type : 'HEAD OFFICE',
         lines : [
            `Plot No :1,2nd & 3rd Floor, Adj. B.D Reddy`,
            `Gradens,Chaitanya Nagar,B.N.Reddy Nagar,`,
            `Hyderabad -500 070`,
            `sales@jbinfraprojects.in`,
            `040 2409 0939`, 
         ],
         map:'aboutus.png',
        },
        {
            type : 'BRANCH OFFICE',
            lines : [
                `7-1B,Sai Nagar Colony,Peddamberpet,`,
                `Hayatnagar Mandal, Hyderabad`,
                `Telangana 501505`,
                `customercare@jbinfraprojects.com`,
                `040 2955 4577` 
            ],
            map:'aboutus.png',
           }
    ]


    return (
        <div>
            <Introduction/>
            <Contact/>
            <Grid container xs={12} style={{ 'marginBottom' : '40px'}}>
                <Grid item xs ={6}>
                    <Address address={addresses[0]}/>
                </Grid>
                <Grid item xs ={6}>
                    <Address address={addresses[1]}/>
                </Grid>
            </Grid>
            <Grid container xs={12} style={{ 'marginBottom' : '100px'}}>
                <Grid item xs ={6}>
                   <Map map={addresses[0].map}/>
                </Grid>
                <Grid item xs ={6}>
                   <Map map={addresses[1].map}/>
                </Grid>
            </Grid>
            <Quote/>
        </div>
    )
}