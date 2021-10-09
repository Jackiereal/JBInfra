import {
    Container,
    Typography,


} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import { TestimonialCard } from "./TestimonialCard";

const useStyles = makeStyles({
    root:{
        width: '100%',
        color: '#f78320',
        fontSize: '24px',
        fontFamily: 'Montserrat',
        backgroundColor: '#fff',
        marginTop:'20px',
        
        
    },
    caption:{
        width: '100%',
        color: '#4a4a4a',
        fontSize: '13px',
        fontFamily: 'Montserrat',
        backgroundColor: '#fff',

    },
    containerRoot:{
        marginTop:'50px',
        marginBottom:'50px',
    },
    containerContent:{
        display:'flex',
        marginBottom:'50px',
        justifyContent:'center',
        paddingBottom: '50px',
    }
})

const testimonialList = [
    {
        id: 1029,
        name : 'Anonymous',
        description : " Had felt good experience with JB with their service and good potential compa. As all my investments in this company were worthy and in-return hiked my asset value and living style.You made and changed my life meaningful, we are always with you!",
        image: 'jc.jpg',
    },
    {
        id: 1040,
        name : 'Landbloom9290',
        description : "This is my second time buying plot with JB Infra.Both experiences have been great.On this offer, we got number of consequences due to covid but the company management went above and beyond to close the deal but got delayed a bit.",
        image: 'jc2.jpg'
    },
    {
        id: 1030,
        name : 'Teja',
        description : " Had felt good experience with JB with their service and good potential compa. As all my investments in this company were worthy and in-return hiked my asset value and living style.You made and changed my life meaningful, we are always with you!",
        image: 'jbr.jpg',
    },
    {
        id: 1050,
        name : 'Raja',
        description : "This is my second time buying plot with JB Infra.Both experiences have been great.On this offer, we got number of consequences due to covid but the company management went above and beyond to close the deal but got delayed a bit.",
        image: 'jbgm.jpg'
    },
    {
        id: 1060,
        name : 'Rahul',
        description : "This is my second time buying plot with JB Infra.Both experiences have been great.On this offer, we got number of consequences due to covid but the company management went above and beyond to close the deal but got delayed a bit.",
        image: 'logo192.png'
    },
    
]

export const Testimonials = ()=>{
    const classes = useStyles();

    return (
        <>
        <Container fixed classes={{root : classes.containerRoot}}>
            <Typography  classes={{ root : classes.root}}>TESTIMONIALS</Typography>
            <Typography  classes={{ root : classes.caption}}>from our customers</Typography>
        </Container>
        <Container fixed classes={{ root : classes.containerContent}}>
            <TestimonialCard list={testimonialList}></TestimonialCard>
        </Container>
        </>
    )
}