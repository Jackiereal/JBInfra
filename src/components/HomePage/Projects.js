import {
    Container,
    Typography,
    Grid,
    Button,

} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ProjectCard } from "./ProjectCard";
import { 
    Link,
    NavLink,
    useLocation
  } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    width: '100%',
    color: '#f78320',
    fontSize: '24px',
    fontFamily: 'Avenir next',
    backgroundColor: '#fff',
    marginTop:'75px',
    marginBottom:'20px'
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
  },
  menuLink: {
    textDecoration: 'none ',
    color: '#fff',
    "&:hover": {
        color:'#f78320',
    },
  },

});


export const Projects = ()=>{
    const classes = useStyles();
    const projectList = [
        {
            id: 1029,
            title : 'SERENE CITY',
            name: 'serenecity',
            description : " JB's Serene city is a 540 acre layout with Residential Plotting"
        },
        {
            id: 1040,
            title : 'SERENE VILLAS',
            name: 'serenvillas',
            description : " Serene Villas is HMDA approved 42 Acre Villa Project at Adibatla"
        },
        {
            id: 1048,
            title : 'SERENE RESORT',
            name: 'sereneresort',
            description : " JB's Serene Resort is Resort style living plotting project offering modern clubhouse"
        },
        {
            id: 1043,
            title : 'SERENE NATURE VALLEY',
            name: 'serenenaturevalley',
            description : " JB's Serene Resort is Resort style living plotting project offering modern clubhouse"
        },
    ]
    return (
        <Container fixed>
            <Typography  classes={{ root : classes.root}}>OUR PRIME PROJECTS</Typography>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={4}>
                {projectList.map((value,index) => (
                    <Grid key={value.id} item>
                        <ProjectCard project={value}/>
                        <Button className={classes.cardbutton}>
                            <Link className={classes.menuLink} to={`/${value.name}`}>Read More</Link>
                        </Button>
                    </Grid>
                ))}
                </Grid>
            </Grid>
        </Container>
    )
}