import  axios from 'axios'

export const getProjects = async ()=>{
    const projects = await axios
        .get('http://127.0.0.1:8080/api/projects')
        .then( response =>{
            return response;
        })
        .catch( error =>{
            console.log(error);
            return error;
        })
    console.log(projects)
    return projects;
} 

export const getAboutUs = async () =>{
    const aboutus = await axios
        .get('http://127.0.0.1:8080/aboutus_json')
        .then( response =>{
            return response;
        })
        .catch( error =>{
            console.log(error);
            return error;
        })
    console.log(aboutus)
    return aboutus;
}

export const getProjectImages = async (id: number) =>{
    const images = await axios
        .get(`http://127.0.0.1:8080/gallery/${id}`)
        .then( response =>{
            return response;
        })
        .catch( error =>{
            console.log(error);
            return error;
        })
    console.log(images)
    return images;
}

export const getFeaturedProjects = async (projectName:String)=>{
    console.log(projectName)
    const project = await axios
        .get('./serenecity.json')
        .then(response =>{
            return response;
        })
    console.log(project)
    return project
}