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
import ImageViewer from "react-simple-image-viewer";
import ReactImageVideoLightbox from "react-image-video-lightbox";
import { DataSaverOffRounded } from '@mui/icons-material';

// import "./../../styles/scss/image-gallery.scss"
// import ImageGallery from 'react-image-gallery';



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

const itemData = [
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jbnews24.jpg',
        title: 'Image',
      author: 'author',
        cols: 1,
        project : 1,
      },
      {
        //  img :`https://picsum.photos/id/100/360/360`,
        img:'jbnews2.jpg',
         title: 'Image',
        author: 'author',
         cols: 1,
         project : 1,
       },
       {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jbnews1.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jbnews3.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jbnews6.jpeg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jbnews7.jpeg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jbnews8.jpeg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jbnews9.jpeg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        //  img :`https://picsum.photos/id/100/360/360`,
        img:'jbnews16.jpg',
         title: 'Image',
        author: 'author',
         cols: 1,
         project : 1,
       },
       {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jbnews17.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jbnews18.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jbnews19.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jbnews20.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jbnews21.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jbnews22.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
      {
        // img :`https://picsum.photos/id/200/360/360`,
        img:'jbnews23.jpg',
        title: 'Image',
       author: 'author',
        cols: 1,
        project : 1,
      },
    ]

    

    const data = [
      
      {
        url: "https://www.youtube.com/embed/ScMzIvxBSi4",
        type: "video",
        altTag: "some video"
      },
    ];



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



export const JBNewsComponent = ()=>{
    // let { gallery } = useParams();
    const [gallery,setGallery] = useState([]);
    const [project,setProject] = useState(0);
    const [columns,setColumns] = useState(4);
    const [currentImage, setCurrentImage] = useState(0);
    const [currentVideo, setCurrentVideo] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [isYoutubeViewerOpen, setIsYoutubeViewerOpen] = useState(false);
    const [images, setImages] = useState(itemData)
    let imageList = images.map(item=>{
      return item.img;
    });

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

    const handleButtonClick=(id)=>{
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
  
    const openYoutubeImageViewer = useCallback((index) => {
      //  return <a style={{display: "table-cell"}} href="'https://www.youtube.com/embed/nfk6sCzRTbM?autoplay=1'" target="_blank">text</a>
    }, []);

    const closeImageViewer = () => {
      setCurrentImage(0);
      setIsViewerOpen(false);
    };

    const closeVideoViewer = () => {
      setCurrentVideo(0);
      setIsYoutubeViewerOpen(false);
    };

    const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }

    const handleToggle = () => setIsYoutubeViewerOpen(!isYoutubeViewerOpen);

    return (
        <Container fixed classes={{root : classes.containerRoot}}>
         &nbsp;
            <Typography  classes={{ root : classes.root}}>JB in News</Typography>
            <Typography  classes={{ root : classes.descroot}}>Your Happiness begins here...</Typography>
            {/* <div className={classes.rootButtonGroup}>
                <ButtonGroup size="small" variant="text" >
                    <Button onClick={()=>handleButtonClick(0)} classes={{root:classes.buttons}} className={project === 0 ? classes.active : ""}>All</Button>
                    <Button onClick={()=>handleButtonClick(1)} classes={{root:classes.buttons}} className={project === 1 ? classes.active : ""}>Nature Valley</Button>
                    <Button onClick={()=>handleButtonClick(2)} classes={{root:classes.buttons}} className={project === 2 ? classes.active : ""}>Serene City</Button>
                    <Button onClick={()=>handleButtonClick(3)} classes={{root:classes.buttons}} className={project === 3 ? classes.active : ""}>Serene Villas</Button>
                    <Button onClick={()=>handleButtonClick(4)} classes={{root:classes.buttons}} className={project === 4 ? classes.active : ""}>Serene Resort</Button>
                </ButtonGroup>
            </div> */}
            <div className={classes.rootImage}>
              {/* <ImageGallery items={images} infinite={true} autoPlay={true} showPlayButton={false}/>; */}
                <ImageList rowHeight={240} className={classes.imageList} cols={columns}>
                    {images.map((item,index) => (
                    <ImageListItem key={item.img} cols={item.cols || 1}>
                        <img src={item.img} alt={item.title} onClick={()=>openImageViewer(index)}/>
                    </ImageListItem>
                    ))}
                    <ImageListItem>
                      <img src={'jbnews15.jpg'} onClick={() => openInNewTab('https://www.youtube.com/watch?v=u3KH7wuqYSE&t=6s')}/>
                    </ImageListItem>
                    <ImageListItem>
                      <img src={'jbnews4.jpg'} onClick={() => openInNewTab('https://www.youtube.com/watch?v=GuKQrolWWY8&t=197s')}/>
                    </ImageListItem>
                    <ImageListItem>
                      <img src={'jbnews5.jpg'} onClick={() => openInNewTab('https://www.youtube.com/watch?v=6klt1ev5Gxs&t=21s')}/>
                    </ImageListItem>
                    <ImageListItem>
                      <img src={'jbnews10.jpg'} onClick={() => openInNewTab('https://www.youtube.com/watch?v=x2Qs3n1gJas')}/>
                    </ImageListItem>
                    <ImageListItem>
                      <img src={'jbnews11.jpg'} onClick={() => openInNewTab('https://www.youtube.com/watch?v=6CUPAbvtaQ0&t=185s')}/>
                    </ImageListItem>
                    <ImageListItem>
                      <img src={'jbnews12.jpg'} onClick={() => openInNewTab('https://www.youtube.com/watch?v=aGeqHklNCx4')}/>
                    </ImageListItem>
                    <ImageListItem>
                      <img src={'jbnews13.jpg'} onClick={() => openInNewTab('https://www.youtube.com/watch?v=LeAq-LpanGA')}/>
                    </ImageListItem> 
                    <ImageListItem>
                      <img src={'jbnews14.jpg'} onClick={() => openInNewTab('https://www.youtube.com/watch?v=jUyh1D-dIM4')}/>
                    </ImageListItem>
                </ImageList>
                {isViewerOpen && (
                  <ImageViewer
                    src={imageList}
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                    disableScroll={false}
                    backgroundStyle={{
                      backgroundColor: "rgba(0,0,0,0.9)"
                    }}
                    closeOnClickOutside={true}
                  />
                )}
                {/* {isYoutubeViewerOpen && (
                  <a style={{display: "table-cell"}} href="'https://www.youtube.com/embed/nfk6sCzRTbM?autoplay=1'" target="_blank">text</a>
                //   <ReactImageVideoLightbox
                //   data='https://www.youtube.com/embed/nfk6sCzRTbM?autoplay=1' 
                //   startIndex={0}
                //   showResourceCount={true}
                //   onCloseCallback={() => handleToggle()}
                // />
                )} */}
            </div>
        </Container>
    )
}