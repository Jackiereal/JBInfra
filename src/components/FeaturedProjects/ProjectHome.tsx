import {
    Container, Grid, Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';

const useStyles = makeStyles({
    grid:{
        marginTop:'50px',
    },
    title:{
        fontFamily: 'Avenir Next',
        fontSize: '18px',
        textAlign: 'center',
        lineHeight: '36px',
        marginBottom:'10px',
        color:'#f78320',
    },
    description:{
        fontFamily: 'Avenir Next',
        fontSize: '16px',
        textAlign: 'left',
        lineHeight: '28px',
        color:'#4a4a4a',
        marginBottom:'20px',
    },
    listItem:{
        fontFamily: 'Avenir Next',
        fontSize: '16px',
        textAlign: 'left',
        lineHeight: '28px',
        color:'#4a4a4a',
    }
})

export const ProjectHome = (props:any)=>{
    const classes = useStyles();
    const projectName = props.projectName;
    console.log(projectName)
    const projectHighlights = props.project.valuesproject;
    const locationHighlights = props.project.valueslocation;

    useEffect(()=>{
        
    },[])

    return (
        <Container>
            <Grid className={classes.grid} container xs={12}>
                <Grid item xs={12}>
                    <Typography className={classes.title}>OVERVIEW</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.description}>{props.project.overview}</Typography>
                </Grid>
                <Grid item xs={6}>
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
                <Grid item xs={6}>
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