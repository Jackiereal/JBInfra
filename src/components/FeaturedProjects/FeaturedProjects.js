import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
// import { getProjects, getFeaturedProjects } from '../../services/services';
import { ProjectHome } from './ProjectHome';
import {
  Container,
  Card,
  CardMedia,

} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SERENECITY from '../../serenecity.json';
import SERENENATUREVALLEY from '../../serenenaturevalley.json';
import SERENERESORTS from '../../sereneresorts.json';
import SERENEVILLAS from '../../serenevillas.json';


const useStyles = makeStyles({
  cardRoot:{
      // position:'relative',
      maxWidth: '100%',
      height:'100%',
      boxShadow: 'none',
      
  },
  media:{
      width: '100%',
      height:'100%',
      backgroundSize:'contain',
      backgroundPosition:'top',
     
  },
  containerRoot:{
      // marginTop:'50px',
      // backgroundImage:  'url("intro.gif")',
      margin:0,
      padding:0,
      maxWidth: '100%',
      height:'850px',

      // paddingTop:'200px',
      // paddingLeft:'100px'
  },
 
})


export default function FeaturedProjects() {
  const classes = useStyles()
  let { project } = useParams();
  const [projects,setProjects] = useState({});
  // const [isError,setIsError] = useState(false);
  useEffect(()=>{
    switch (project) {
      case 'serenecity':
        setProjects(SERENECITY) 
        break;
  
      case 'serenevillas':
        setProjects(SERENEVILLAS) 
        break;
  
      case 'sereneresorts':
        setProjects(SERENERESORTS) 
        break;
      
        case 'serenenaturevalley':
        setProjects(SERENENATUREVALLEY) 
        break;
    
      default:
        setProjects(SERENENATUREVALLEY) 
    }
  },[project])
  

  // useEffect(()=>{
  //   async function fetchProjects(p){
  //     const response = await getFeaturedProjects(p);
  //     console.log(response)
  //     setProjects(response.data);
  //   }
  //   fetchProjects(project);

  // },[project])


  return (
    <div>
        <Container fixed classes={{root : classes.containerRoot}}>

             <Card classes={{root: classes.cardRoot}}>
                <CardMedia
                    
                    className={classes.media}
                    image={`${project}.jpg`}
                    controls
                />
               
            </Card> 
            
        </Container>
         <ProjectHome project={projects} projectName={project}/>)
        
    </div>
  );
}
