import {
    Container,
    Typography,
    Grid,
    Button

} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DirectorCard } from "./DirectorCard";
import { useState } from 'react';

const useStyles = makeStyles({
  root: {
    width: '100%',
    color: '#f78320',
    fontSize: '24px',
    fontFamily: 'Avenir next',
    backgroundColor: '#fff',
    marginTop:'75px',
    marginBottom:'10px'
  },
  cardbutton:{
    fontSize: '13px',
    fontFamily: 'Avenir next',
    backgroundColor: '#f78320',
    color:'#fff',
    margin:'-10px 30px 0px 30px',
    paddingLeft: '30px',
    paddingRight:'30px',
    "&:hover": {
        backgroundColor: '#fff',
        color:'#f78320',
        border:'1px solid #f78320',
    },
    description: {
        fontFamily: 'Avenir next',
    },
    directorDescription:{
        marginBottom:'30px',
    },
    active:{
        transform: "scale3d(1.05, 1.05, 1)",
        transition: "transform 0.15s ease-in-out",
    }

  }

});


export const Directors = (props)=>{
    const classes = useStyles();
    const directors = props.directors
    const [directorDesc,setDirectorDesc] = useState('');
    const [directorName,setDirectorName] = useState('')
    const selectDirector = (e)=>{
        setDirectorDesc(e.description)
        setDirectorName(e.name)
    }

    return (
        <Container fixed>
            <Typography  classes={{ root : classes.root}}>OUR DIRECTORS</Typography>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={2}>
                    {directors.map((value) => (
                        // <div>{Object.keys(value)[0]}</div>
                        <Grid item xs={12} sm={3} className={ directorName === value.name  ? classes.active : ""}>
                            <DirectorCard onCardSelect={selectDirector} data={value}/>
                        </Grid>
                    ))}
                </Grid>
                <Grid classes={{ root : classes.directorDescription}} container justifyContent="center">
                    <Typography  classes={{ root : classes.description}}> {directorDesc}</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}