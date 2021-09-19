import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getProjects } from '../../services/services';
import { ProjectHome } from './ProjectHome'

export default function FeaturedProjects() {
  let { project } = useParams();
  const [projects,setProjects] = useState([]);
  const [isError,setIsError] = useState(false);

  useEffect(()=>{
    async function fetchProjects(){
      const response = await getProjects();
      setProjects(response.data);
    }
    fetchProjects();
  },[])

  return (
    <div>
     {/* { 
        (projects === [] || projects === undefined)? 
        'No Projects' : 
        projects.map(project=>{
          return <ProjectHome project={'serenecity'}/>
        })} */}
        <ProjectHome project={project}/>
    </div>
  );
}


//google-site-verification=MEBcrodqjBgt4q4DV27mpvwJ92nOmTIUtYiBdJ6o5gQ