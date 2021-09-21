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
    containerRoot:{
        backgroundImage:  'url("design1.png")',
        backgroundPosition: 'left',
        backgroundSize:'100% auto',
        backgroundRepeat: 'no-repeat',
        // height:'400px',
        width:'100%',
    },
  root: {
    width: '100%',
    color: '#f78320',
    fontSize: '24px',
    fontFamily: 'Avenir next',
    backgroundColor: 'transparent',
    marginTop:'25px',
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
  image:{
      width:'100%',
      height:'auto'
      
  }

});


export const Projects = ()=>{
    const classes = useStyles();
    const projectList = [
        {
            id: 1029,
            title : 'SERENE CITY',
            img: '1.jpg',
            name: 'serenecity',
            description : " JB's Serene city is a 540 acre layout with Residential Plotting"
        },
        {
            id: 1040,
            title : 'SERENE VILLAS',
            img: '2.jpg',
            name: 'serenvillas',
            description : " Serene Villas is HMDA approved 42 Acre Villa Project at Adibatla"
        },
        {
            id: 1048,
            title : 'SERENE RESORT',
            img: '3.jpg',
            name: 'sereneresort',
            description : " JB's Serene Resort is Resort style living plotting project offering modern clubhouse"
        },
        {
            id: 1043,
            title : 'NATURE VALLEY',
            img: '4.jpg',
            name: 'serenenaturevalley',
            description : " JB's Serene Resort is Resort style living plotting project offering modern clubhouse"
        },
    ]
    return (
        <Container fixed classes={{root: classes.containerRoot}}>
            {/* <img classes={{root: classes.image}} src="design1.png"></img> */}
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