import {
    Container,
    Typography,
    Grid,
    Button,
    ButtonGroup,
    ImageList,
    ImageListItem

} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getProjectImages } from '../../services/services';
import { useState, useEffect } from 'react';

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
  rootImage: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#fff',
    height:'540px',
    marginBottom:'30px',
    marginTop:'50px',
  },
  imageList: {
    width: '90%',
    height: 480,
    margin:'auto',
   
  },
  rootButtonGroup:{
    color: '#f78320',
    fontFamily: 'Avenir next',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: '10px',
    },
  },
  buttons:{
    color: '#4a4a4a',
    fontFamily: 'Avenir next',
    fontSize: '16px'
  },
  active:{
    color: '#f78320',
  }
});

const itemData = [
      {
         img :`https://picsum.photos/id/100/360/360`,
         title: 'Image',
        author: 'author',
         cols: 1,
       },
       {
        img :`https://picsum.photos/id/200/360/360`,
        title: 'Image',
       author: 'author',
        cols: 1,
      },
      {
        img :`https://picsum.photos/id/300/360/360`,
        title: 'Image',
       author: 'author',
        cols: 1,
      },
      {
        img :`https://picsum.photos/id/400/360/360`,
        title: 'Image',
       author: 'author',
        cols: 1,
      },
      {
       img :`https://picsum.photos/id/500/360/360`,
       title: 'Image',
      author: 'author',
       cols: 1,
     },
     {
       img :`https://picsum.photos/id/600/360/360`,
       title: 'Image',
      author: 'author',
       cols: 1,
     },
     {
        img :`https://picsum.photos/id/700/360/360`,
        title: 'Image',
       author: 'author',
        cols: 1,
      },
      {
       img :`https://picsum.photos/id/800/360/360`,
       title: 'Image',
      author: 'author',
       cols: 1,
     },
     {
       img :`https://picsum.photos/id/900/360/360`,
       title: 'Image',
      author: 'author',
       cols: 1,
     }
    ]



export const GalleryComponent = ()=>{
    // let { gallery } = useParams();
    const [gallery,setGallery] = useState([]);
    const [project,setProject] = useState(0);
    const [isError,setIsError] = useState(false);
    

    useEffect(()=>{
        async function fetchProjectImages(project: number){
        const response = await getProjectImages(project);
        setGallery(response.data);
        }
        fetchProjectImages(project);
    },[project])
    const classes = useStyles();

    const handleButtonClick=(id: number)=>{
         setProject(id)
         
    }

    return (
        <Container fixed>
            <Typography  classes={{ root : classes.root}}>Photo Gallery</Typography>
            <div className={classes.rootButtonGroup}>
                <ButtonGroup size="large" variant="text" >
                    <Button onClick={()=>handleButtonClick(0)} classes={{root:classes.buttons}} className={project === 0 ? classes.active : ""}>All</Button>
                    <Button onClick={()=>handleButtonClick(1)} classes={{root:classes.buttons}} className={project === 1 ? classes.active : ""}>JB - 1</Button>
                    <Button onClick={()=>handleButtonClick(2)} classes={{root:classes.buttons}} className={project === 2 ? classes.active : ""}>JB - 2</Button>
                    <Button onClick={()=>handleButtonClick(3)} classes={{root:classes.buttons}} className={project === 3 ? classes.active : ""}>JB - 3</Button>
                </ButtonGroup>
            </div>
            <div className={classes.rootImage}>
                <ImageList rowHeight={240} className={classes.imageList} cols={3}>
                    {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1}>
                        <img src={item.img} alt={item.title} />
                    </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </Container>
    )
}