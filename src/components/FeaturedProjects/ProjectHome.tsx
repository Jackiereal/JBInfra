import {
    Container, Grid, Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';

const useStyles = makeStyles({
    container:{
        maxWidth:'100%',
    },
    grid:{
        marginTop:'50px',
    },
    title:{
        fontFamily: 'Montserrat',
        fontSize: '18px',
        textAlign: 'center',
        lineHeight: '36px',
        marginBottom:'10px',
        color:'#f78320',
    },
    description:{
        fontFamily: 'Montserrat',
        fontSize: '13px',
        textAlign: 'left',
        lineHeight: '26px',
        color:'#4a4a4a',
        marginBottom:'20px',
        ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '11px',
            lineHeight: '22px',
          },
          ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '12px',
            lineHeight: '24px',
          },
          ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '14px',
            lineHeight: '28px',
          },
          ['@media (min-width:1513px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '16px',
            lineHeight: '32px',
          },
    },
    listItem:{
        fontFamily: 'Montserrat',
        fontSize: '13px',
        textAlign: 'left',
        lineHeight: '26px',
        color:'#4a4a4a',
    }
})

export const ProjectHome = (props:any)=>{
    const classes = useStyles();
    const projectName = props.projectName;
    console.log(projectName)
    console.log(props.project)
    const projectHighlights = props.project.valuesproject;
    const locationHighlights = props.project.valueslocation;

    useEffect(()=>{
        
    },[])

    return (
        <Container className={classes.container}>
            <Grid className={classes.grid} container xs={12}>
                <Grid item xs={12}>
                    <Typography className={classes.title}>OVERVIEW</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.description}>{props.project.overview}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography className={classes.title}>{props.project.titleproject}</Typography>
                    <ul>
                    {
                        projectHighlights.map( (value:any)=>{
                            return (
                                <li className={classes.listItem}>{value}</li>
                            )
                        })
                    }
                    </ul>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography className={classes.title}>{props.project.titlelocation}</Typography>
                    <ul>
                    {
                        locationHighlights.map( (value:any)=>{
                            return (
                                <li className={classes.listItem}>{value}</li>
                            )
                        })
                    }
                    </ul>
                </Grid>
            </Grid>
        </Container> 
    )
}