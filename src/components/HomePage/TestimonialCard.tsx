import {
    Card,
    CardContent,
    Typography,
    Avatar,
    Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
    root: {
      width: '400px',
      height: '200px',
      borderRadius:'20px',
      backgroundColor: '#f78320',
      boxShadow: '0 10px 20px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1)',
      paddingTop:'30px',
    ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
        width: '240px',
        height: '160px',
    },
    ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
        width: '350px',
        height: '160px',
    },
    ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
        width: '400px',
        height: '200px',
    },
    ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
        width: '450px',
        height: '250px',
    },


    },
    cardtitle:{
        color: '#fff',
        fontSize: '14px',
        textAlign:'center',
        marginBottom:'10px',
        fontFamily: 'MontserratSemiBold',
        transition: "all 0.15s ease-in-out",
        ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '10px',
        },
        ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '12px',
        },
        ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '14px',
        },
        ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '16px',
        },
    },
    cardtext:{
        color: '#fff',
        fontSize: '12px',
        textAlign:'center',
        fontFamily: 'Montserrat',
        transition: "all 0.15s ease-in-out",
        ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '9px',
        },
        ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '11px',
        },
        ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '13px',
        },
        ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '15px',
        },
      },
    headerRoot:{
        display: 'flex',
        '& > *': {
          margin: '10px',
        },
        justifyContent:'center',
        marginBottom:'-35px',
    },
    testimonialicon:{
        marginLeft:'-150px',
        width:'50px',
        height:'50px',
    },
    avatarScatter1:{
        display: 'flex',
        '& > *': {
          marginRight: '100px',
          marginLeft:'100px',
        },
        justifyContent:'center',
        ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
            display: 'none',
        },
        ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
            display: 'block',
        }
    },
    avatarScatter2:{
        display: 'flex',
        '& > *': {
          marginRight: '50px',
          marginTop:'100px',
          marginLeft:'50px',
        },
        justifyContent:'center',
        ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
            display: 'none',
        },
        ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            display: 'block',
        }
    },
    avatar: {
        width: '80px',
        height: '80px',
        border: '5px solid #D3D3D3',
        borderRadius: '100%',
        transition: "transform 0.15s ease-in-out",
        "&:hover": {
            transform: "scale3d(1.1, 1.1, 1)" 
        },
    },
    avatarInactive: {
        width: '80px',
        height: '80px',
        border: '5px solid #D3D3D3',
        borderRadius: '100%',
        animationTimingFunction: 'ease',
        // transition: "transform 0.15s ease-in-out",
        // "&:hover": {
        //     transform: "scale3d(1.1, 1.1, 1)" 
        // },
    },
    avatar1:{
        animation:'bounce 3.5s infinite',
    },
    avatar2:{
        animation:'bounce 3s infinite',
    },
    avatar3:{
        animation:'bounce 3.75s infinite',
    },
    avatar4:{
        animation:'bounce 3.25s infinite',
    }

  });

const moveArray = ( list: Array<number>)=>{
    const length = list.length;
    let newList = new Array(length);
    let index = 0;
    let temp = list[0];
    while(index < length-1){
        newList[index] = list[index+1];
        index++;
    }
    newList[index] = temp;
    return newList;
}   

export const TestimonialCard = (props:any)=>{
    const [list,setList ]= useState(props.list);
    const classes = useStyles() 

    useEffect(() => {
        const interval = setInterval(() => {
            setList(moveArray(list))
        }, 3000);

        return () => clearInterval(interval);
    }, [list]);

    return (
        <>
         <div className={classes.avatarScatter2}>
            <Avatar alt="Avatar" src={`${list[0].image}`} className={classes.avatarInactive} classes={{root : classes.avatar1}}/>
        </div>
        <div className={classes.avatarScatter1}>
            <Avatar alt="Avatar" src={`${list[1].image}`} className={classes.avatarInactive} classes={{root : classes.avatar2}}/>
        </div>
        
       <div>
            <Grid 
                container 
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                className={classes.headerRoot}
            >
                <Grid item xs={12}>
                    <img className={classes.testimonialicon} src="testimonialicon.png" alt="quotes"></img>
                </Grid>
                <Grid item xs ={12}>
                    <Avatar alt="Avatar" src={`${list[2].image}`} className={classes.avatar}/>
                </Grid>
            </Grid>
            <Card classes={{root: classes.root}}>
                <CardContent>
                    <Typography variant='body1' className={classes.cardtitle} align="left">
                        {list[2].name}
                    </Typography>
                    <Typography variant='body1' className={classes.cardtext} align="left">
                        {list[2].description}
                    </Typography>
                </CardContent>
            </Card>
       </div>
        
        
        <div className={classes.avatarScatter2}>
            <Avatar alt="Avatar" src={`${list[3].image}`} classes={{root : classes.avatar3}} className={classes.avatarInactive}/>
        </div>
        <div className={classes.avatarScatter1}>
            <Avatar alt="Avatar" src={`${list[4].image}`} classes={{root : classes.avatar4}}  className={classes.avatarInactive}/>
        </div>
        </>
    )
}