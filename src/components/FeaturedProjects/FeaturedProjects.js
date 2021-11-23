import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
// import { getProjects, getFeaturedProjects } from '../../services/services';
import { ProjectHome } from './ProjectHome';
import { ProjectHomeAlternative } from './ProjectHomeAlternative'
import { ProjVideo } from './ProjVideo';
import { FeatureVideo } from './../HomePage/FeatureVideo';
import {
  Container,
  Card,
  CardMedia
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SERENECITY from '../../jsons/serenecity.json';
import SERENENATUREVALLEY from '../../jsons/serenenaturevalley.json';
import SERENERESORTS from '../../jsons/sereneresorts.json';
import SERENEVILLAS from '../../jsons/serenevillas.json';
import GREENMEADOWS from '../../jsons/greenmeadows.json'
import JASMINECITY from '../../jsons/jasminecity.json'
import JASMINECITYII from '../../jsons/jasminecityll.json'
import JBRESORTS from '../../jsons/jbresorts.json'
import HILLSIDECOUNTY from '../../jsons/hillsidecounty.json'
import { useThemeProps } from '@mui/material';
import GoToTop from './../GoToTop'


const projectPage = (props)=>{
  switch (props) {
        case 'serenecity':
          return <ProjectHomeAlternative project={SERENECITY} projectName={props}/> 
        
        case 'serenevillas': 
          return  <ProjectHome project={SERENEVILLAS} projectName={props}/> 

        case 'sereneresorts':
          return <ProjectHome project={SERENERESORTS} projectName={props}/>   
    
        case 'serenenaturevalley': 
          return  <ProjectHomeAlternative project={SERENENATUREVALLEY} projectName={props}/>
        
        case 'hillsidecounty': 
          return  <ProjectHome project={HILLSIDECOUNTY} projectName={props}/>

        case 'greenmeadows':
          return <ProjectHome project={GREENMEADOWS} projectName={props}/> 
        
        case 'jbresorts': 
          return  <ProjectHome project={JBRESORTS} projectName={props}/> 

        case 'jasminecity':
          return <ProjectHome project={JASMINECITY} projectName={props}/>   
    
        case 'jasminecity2': 
          return  <ProjectHome project={JASMINECITYII} projectName={props}/>
           
        default:
          return null
}
}


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
      height:'auto',
     
      ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
        height:'200px'
      },
      ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
        height:'400px'
      },
      ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
        height:'600px'
      },
      ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
        height:'750px'
      },
      ['@media (min-width:1513px)']: { // eslint-disable-line no-useless-computed-key
        height:'1100px'
      },

      // paddingTop:'200px',
      // paddingLeft:'100px'
  },
  imageAlign:{
    marginTop: '300px'
  }
 
})

export const FeaturedProjects = () => {
  const classes = useStyles()
  let { project } = useParams();
  const [projects,setProjects] = useState({});
  if(!window.location.hash){
    window.location = window.location + '#'
    window.location.reload()
  }
  setTimeout(() => {window.scrollTo(0, 0); }, 2000);
  setTimeout(() => {window.scrollTo(0, 0); }, 1000);
  //window.scrollTo(0, 0);

  return (
  
    
    <div>
        {/* <div>{projects.titlelocation}</div> */}
        <ProjVideo video={`${project}.mp4`}/>
        
        <div>
          {projectPage(project)}
        </div>
            
    </div>
  );
}
