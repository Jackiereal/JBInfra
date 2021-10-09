import { Introduction } from "./../AboutPage/Introduction";
import { Banner } from "./../AboutPage/Banner"
// import { Introduction } from "./../HomePage/Introduction";
import { Quote } from './../AboutPage/Quote'
import { GalleryComponent } from './GalleryComponent'
import { makeStyles } from '@material-ui/core/styles';
import GoToTop from './../GoToTop';
const useStyles = makeStyles({
    
    containerRoot:{
        marginTop:'100px',
        marginBottom:'30px',
    },
})

export const Gallery = ()=>{
    const classes = useStyles();
    return (
        <div>
        <div>
            <Banner image={'galleryintro.png'}/>
            <GalleryComponent/>
        </div>
        <div className={classes.containerRoot}>
             <Quote/>
        </div>
        <GoToTop/>
        </div>

    )
}