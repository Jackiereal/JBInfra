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
// import { getProjectImages } from '../../services/services';
import { useState, useEffect, useCallback } from 'react';
// import ImageViewer from "react-simple-image-viewer";
import "./../../styles/scss/image-gallery.scss"
import ImageGallery from 'react-image-gallery';
import ReactPlayer from 'react-player'



const useStyles = makeStyles({
  root: {
    width: '100%',
    color: '#f78320',
    fontSize: '24px',
    fontFamily: 'Montserrat',
    //backgroundColor: '#fff',
    marginTop:'50px',
    marginBottom:'0px'
  },
  descroot: {
    width: '100%',
    color: 'grey',
    fontSize: '12px',
    fontFamily: 'Montserrat',
    //backgroundColor: '#fff',
    marginBottom:'20px'
  },
  cardbutton:{
    fontSize: '13px',
    fontFamily: 'Montserrat',
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
    justifyContent: 'center',
    alignItems:'center',
    overflow: 'hidden',
    backgroundColor: '#fff',
    // height:'540px',
    width:'100%',
    height:'auto',
    marginBottom:'30px',
    marginTop:'50px',
  },
  imageList: {
    width: '90%',
    height: 'auto',
    margin:'auto',
    cursor:'pointer',
   
  },
  rootButtonGroup:{
    color: '#f78320',
    fontFamily: 'Montserrat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: '20px',
    },
  },
  buttons:{
    color: '#4a4a4a',
    fontFamily: 'Montserrat',
    fontSize: '14px',
    padding:'10px',
    background:'#fff',
    ['@media (max-width:360px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: '10px',
      
    },
  },
  active:{
    color: '#fff',
    background:'#f78320'
  },
  containerRoot:{
    marginTop:'30px',
    background:'#fff',
    backgroundPosition: 'left',
    backgroundSize:'100% auto',
    backgroundRepeat: 'no-repeat',
    height:'auto',
    width:'100%',
    maxWidth:'100%',
},
});

const renderVideo = (item) =>{
  return (
      <div class="image-gallery-image" onClick={handleClick}>
        <ReactPlayer url={item.embedUrl} width='100%' height='100%' />
      </div>
  )
}

const linkObject = {
   'nvvideo1.jpg' : 'https://www.youtube.com/watch?v=tN2JD3inVbg',
   'hscountyvideo.jpg':'https://www.youtube.com/watch?v=3LIkJioiano',
   'hscountyvideo1.jpg':'https://www.youtube.com/watch?v=B8jO3Yod_90',
   'scvideo.jpg':'https://www.youtube.com/watch?v=3SDkcl_gDh4',
   'svvideo.jpg':'https://www.youtube.com/watch?v=-dDeECgUz-s',
}

const handleClick = (event) => {
  const src = event.target.src
  const key = src.split('/')
  console.log(key)
  console.log(linkObject[key[key.length-1]])
  if(linkObject[key[key.length-1]])
    window.open(linkObject[key[key.length-1]], '_blank').focus();
}

const itemData = [
      {
        //  img :`https://picsum.photos/id/100/360/360`,
        
        original :'nv1.jpeg',
        thumbnail : 'nv1.jpeg',
         title: 'Image',
        author: 'author',
         cols: 1,
         project : 1,
       },
       {
        // img :`https://picsum.photos/id/200/360/360`,
        original :'nv2.jpeg',
        thumbnail : 'nv2.jpeg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        original :'nv3.jpg',
        thumbnail : 'nv3.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        original :'nv4.jpg',
        thumbnail : 'nv4.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        original :'nv5.jpg',
        thumbnail : 'nv5.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        original :'nv6.jpg',
        thumbnail : 'nv6.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        original :'nv7.jpg',
        thumbnail : 'nv7.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        original :'nv8.jpg',
        thumbnail : 'nv8.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        original :'nv9.jpeg',
        thumbnail : 'nv9.jpeg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        original :'nv10.jpeg',
        thumbnail : 'nv10.jpeg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      // {
      //   // embedUrl :'https://www.youtube.com/watch?v=tN2JD3inVbg',
      //   // renderItem: renderVideo,
      //   original : 'nvvideo1.jpg',
      //   thumbnail : 'nvvideo1.jpg',
      //   title: 'Image',
      //  author: 'author',
      //   cols: 1,
      //   project : 1,
      // },
      {
        // embedUrl :'https://www.youtube.com/watch?v=tN2JD3inVbg',
        // renderItem: renderVideo,
        original : 'nvvideo1.jpg',
        thumbnail : 'nvvideo1.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sv1.jpg',
        thumbnail : 'sv1.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 4,
      },
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sv16.jpg',
        thumbnail : 'sv16.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 4,
      },
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sv2.jpg',
        thumbnail : 'sv2.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 4,
      },
  
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sv4.jpg',
        thumbnail : 'sv4.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 4,
      },
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sv7.jpg',
        thumbnail : 'sv7.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 4,
      },
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sv5.jpg',
        thumbnail : 'sv5.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 4,
      },
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sv11.jpg',
        thumbnail : 'sv11.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 4,
      },
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sv12.jpg',
        thumbnail : 'sv12.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 4,
      },
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sv8.jpg',
        thumbnail : 'sv8.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 4,
      },
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sv10.jpg',
        thumbnail : 'sv10.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 4,
      },
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sv6.jpg',
        thumbnail : 'sv6.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 4,
      },
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sv13.jpg',
        thumbnail : 'sv13.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 4,
      },
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sv14.jpg',
        thumbnail : 'sv14.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 4,
      },
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sv9.jpg',
        thumbnail : 'sv9.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 4,
      },
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sv10-1.jpg',
        thumbnail : 'sv10-1.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 4,
      },
     
      {
        //  img :`https://picsum.photos/id/500/360/360`,
        // embedUrl : 'https://www.youtube.com/watch?v=-dDeECgUz-s',
        original :'svvideo.jpg',
        thumbnail : 'svvideo.jpg',
        // renderItem: renderVideo,
         title: 'Image',
        author: 'author',
         cols: 1,
         project : 4,
       },
      //  {
      //   // img :`https://picsum.photos/id/300/360/360`,
      //   original :'serenecity.jpg',
      //   thumbnail : 'serenecity.jpg',
      //   title: 'Image',
      //  author: 'author',
      //   cols: 1,
      //   project : 3,
      // },
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sc1.jpg',
        thumbnail : 'sc1.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 3,
      },
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sc2.jpg',
        thumbnail : 'sc2.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 3,
      },
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sc3.jpg',
        thumbnail : 'sc3.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 3,
      },
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sc4.jpg',
        thumbnail : 'sc4.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 3,
      },
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sc5.jpg',
        thumbnail : 'sc5.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 3,
      },
      
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sc6.jpg',
        thumbnail : 'sc6.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 3,
      },
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sc7.jpg',
        thumbnail : 'sc7.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 3,
      },
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sc8.jpg',
        thumbnail : 'sc8.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 3,
      },
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sc9.jpg',
        thumbnail : 'sc9.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 3,
      },
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sc10.jpg',
        thumbnail : 'sc10.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 3,
      },
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sc11.jpg',
        thumbnail : 'sc11.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 3,
      },
      {
        // img :`https://picsum.photos/id/300/360/360`,
        original :'sc12.jpg',
        thumbnail : 'sc12.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 3,
      },
      {
        //  img :`https://picsum.photos/id/500/360/360`,
        // embedUrl : 'https://www.youtube.com/watch?v=3SDkcl_gDh4',
        original :'scvideo.jpg',
        thumbnail : 'scvideo.jpg',
        // renderItem: renderVideo,
         title: 'Image',
        author: 'author',
         cols: 1,
         project : 3,
       },
      // {
      //   // img :`https://picsum.photos/id/400/360/360`,
      //   // embedUrl :'https://youtu.be/KTMm5mbtFJM',
      //   original :'utd.jpg',
      //   thumbnail : 'utd.jpg',
      //   // renderItem: renderVideo,
      //   title: 'Image',
      //  author: 'author',
      //   cols: 1,
      //   project : 4,
      // },
      {
        // img :`https://picsum.photos/id/400/360/360`,
        // embedUrl :'https://www.youtube.com/watch?v=B8jO3Yod_90',
        original :'hc1.jpg',
        thumbnail : 'hc1.jpg',
        // renderItem: renderVideo,
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 2,
      },
      {
        // img :`https://picsum.photos/id/400/360/360`,
        // embedUrl :'https://www.youtube.com/watch?v=B8jO3Yod_90',
        original :'hc2.jpg',
        thumbnail : 'hc2.jpg',
        // renderItem: renderVideo,
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 2,
      },
      {
        // img :`https://picsum.photos/id/400/360/360`,
        // embedUrl :'https://www.youtube.com/watch?v=B8jO3Yod_90',
        original :'hc3.jpg',
        thumbnail : 'hc3.jpg',
        // renderItem: renderVideo,
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 2,
      },
      {
        // img :`https://picsum.photos/id/400/360/360`,
        // embedUrl :'https://www.youtube.com/watch?v=B8jO3Yod_90',
        original :'hc4.jpg',
        thumbnail : 'hc4.jpg',
        // renderItem: renderVideo,
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 2,
      },
      {
        // img :`https://picsum.photos/id/400/360/360`,
        // embedUrl :'https://www.youtube.com/watch?v=B8jO3Yod_90',
        original :'hc5.jpg',
        thumbnail : 'hc5.jpg',
        // renderItem: renderVideo,
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 2,
      },
      {
        // img :`https://picsum.photos/id/400/360/360`,
        // embedUrl :'https://www.youtube.com/watch?v=B8jO3Yod_90',
        original :'hc6.jpg',
        thumbnail : 'hc6.jpg',
        // renderItem: renderVideo,
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 2,
      },
      {
        // img :`https://picsum.photos/id/400/360/360`,
        // embedUrl :'https://www.youtube.com/watch?v=B8jO3Yod_90',
        original :'hc7.jpg',
        thumbnail : 'hc7.jpg',
        // renderItem: renderVideo,
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 2,
      },
      {
        // img :`https://picsum.photos/id/400/360/360`,
        // embedUrl :'https://www.youtube.com/watch?v=B8jO3Yod_90',
        original :'hc8.jpg',
        thumbnail : 'hc8.jpg',
        // renderItem: renderVideo,
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 2,
      },
      {
        // img :`https://picsum.photos/id/400/360/360`,
        // embedUrl :'https://www.youtube.com/watch?v=B8jO3Yod_90',
        original :'hc9.jpg',
        thumbnail : 'hc9.jpg',
        // renderItem: renderVideo,
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 2,
      },
      {
        // img :`https://picsum.photos/id/400/360/360`,
        // embedUrl :'https://www.youtube.com/watch?v=B8jO3Yod_90',
        original :'hc10.jpg',
        thumbnail : 'hc10.jpg',
        // renderItem: renderVideo,
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 2,
      },
      {
        // img :`https://picsum.photos/id/400/360/360`,
        // embedUrl :'https://www.youtube.com/watch?v=B8jO3Yod_90',
        original :'hc11.jpg',
        thumbnail : 'hc11.jpg',
        // renderItem: renderVideo,
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 2,
      },
      {
        // img :`https://picsum.photos/id/400/360/360`,
        // embedUrl :'https://www.youtube.com/watch?v=B8jO3Yod_90',
        original :'hc12.jpg',
        thumbnail : 'hc12.jpg',
        // renderItem: renderVideo,
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 2,
      },
      {
        // img :`https://picsum.photos/id/400/360/360`,
        // embedUrl :'https://www.youtube.com/watch?v=B8jO3Yod_90',
        original :'hc13.jpg',
        thumbnail : 'hc13.jpg',
        // renderItem: renderVideo,
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 2,
      },
      {
        // img :`https://picsum.photos/id/400/360/360`,
        // embedUrl :'https://www.youtube.com/watch?v=B8jO3Yod_90',
        original :'hc14.jpg',
        thumbnail : 'hc14.jpg',
        // renderItem: renderVideo,
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 2,
      },
      {
        // img :`https://picsum.photos/id/400/360/360`,
        // embedUrl :'https://www.youtube.com/watch?v=B8jO3Yod_90',
        original :'hscountyvideo1.jpg',
        thumbnail : 'hscountyvideo1.jpg',
        // renderItem: renderVideo,
        title: 'Teaser',
       author: 'author',
        cols: 1,
        project : 2,
      },
      {
        // img :`https://picsum.photos/id/400/360/360`,
        // embedUrl :'https://www.youtube.com/watch?v=B8jO3Yod_90',
        original :'hscountyvideo.jpg',
        thumbnail : 'hscountyvideo.jpg',
        // renderItem: renderVideo,
        title: 'Teaser',
       author: 'author',
        cols: 1,
        project : 2,
      },
           
      

     {
      // img :`https://picsum.photos/id/300/360/360`,
      original :'sr1.jpeg',
      thumbnail : 'sr1.jpeg',
      title: 'Image',
     author: 'author',
      cols: 1,
      project : 5,
    },
    {
      // img :`https://picsum.photos/id/300/360/360`,
      original :'sr2.jpg',
      thumbnail : 'sr2.jpg',
      title: 'Image',
     author: 'author',
      cols: 1,
      project : 5,
    },
    
     
    ]



    const getWidth = () => window.innerWidth 
    || document.documentElement.clientWidth 
    || document.body.clientWidth;
  
  function useCurrentWidth() {
    // save current window width in the state object
    let [width, setWidth] = useState(getWidth());
  
    // in this case useEffect will execute only once because
    // it does not have any dependencies.
    useEffect(() => {
      // timeoutId for debounce mechanism
      let timeoutId: NodeJS.Timeout;
      const resizeListener = () => {
        // prevent execution of previous setTimeout
        clearTimeout(timeoutId);
        // change width from the state object after 150 milliseconds
        timeoutId = setTimeout(() => setWidth(getWidth()), 150);
      };
      // set resize listener
      window.addEventListener('resize', resizeListener);
  
      // clean up function
      return () => {
        // remove resize listener
        window.removeEventListener('resize', resizeListener);
      }
    }, [])
  
    return width;
  }



export const GalleryComponent = ()=>{
    // let { gallery } = useParams();
    const [gallery,setGallery] = useState([]);
    const [project,setProject] = useState(0);
    const [columns,setColumns] = useState(4);
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [images, setImages] = useState(itemData)
    // let imageList = images.map(item=>{
    //   return item.img;
    // });

    let width = useCurrentWidth()

    useEffect(()=>{
     
    if(width < 600){
      setColumns(1)
    } 
    else if(width > 600 && width < 900){
      setColumns(2)
    }
    else if(width > 900 && width < 1200){
      setColumns(3)
    }
    else if(width > 1200 && width){
      setColumns(4)
    }
        // async function fetchProjectImages(project: number){
        // const response = await getProjectImages(project);
        // setGallery(response.data);
        // }
        // fetchProjectImages(project);
    },[project])
    const classes = useStyles();

    const handleButtonClick=(id: number)=>{
         setProject(id)  
         const filtered = itemData.filter(item=>{
          return id === 0 ? true : item.project === id;
        })
        setImages(filtered) 

    }

    const openImageViewer = useCallback((index) => {
      setCurrentImage(index);
      setIsViewerOpen(true);
    }, []);
  
    const closeImageViewer = () => {
      setCurrentImage(0);
      setIsViewerOpen(false);
    };

    

    return (
        <Container fixed classes={{root : classes.containerRoot}}>
         &nbsp;
            <Typography  classes={{ root : classes.root}}>GALLERY</Typography>
            <Typography  classes={{ root : classes.descroot}}>Your Happiness begins here...</Typography>
            <div className={classes.rootButtonGroup}>
                <ButtonGroup size="small" variant="text" >
                    <Button onClick={()=>handleButtonClick(0)} classes={{root:classes.buttons}} className={project === 0 ? classes.active : ""}>All</Button>
                    <Button onClick={()=>handleButtonClick(1)} classes={{root:classes.buttons}} className={project === 1 ? classes.active : ""}>Nature Valley</Button>
                    <Button onClick={()=>handleButtonClick(2)} classes={{root:classes.buttons}} className={project === 2 ? classes.active : ""}>Hill Side County</Button>
                    <Button onClick={()=>handleButtonClick(3)} classes={{root:classes.buttons}} className={project === 3 ? classes.active : ""}>Serene City</Button>
                    <Button onClick={()=>handleButtonClick(4)} classes={{root:classes.buttons}} className={project === 4 ? classes.active : ""}>Serene Villas</Button>
                    <Button onClick={()=>handleButtonClick(5)} classes={{root:classes.buttons}} className={project === 5 ? classes.active : ""}>Serene Resort</Button>
                </ButtonGroup>
            </div>
            <div className={classes.rootImage}>
              <ImageGallery items={images} infinite={true} autoPlay={true} showFullscreenButton={true} showVideo={true} showPlayButton={false} slideInterval={5000} onClick={handleClick} />
            </div>
        </Container>
    )
}