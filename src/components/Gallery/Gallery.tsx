import { Introduction } from "./../AboutPage/Introduction";
// import { Introduction } from "./../HomePage/Introduction";
import { Quote } from './../AboutPage/Quote'
import { GalleryComponent } from './GalleryComponent'

export const Gallery = ()=>{
    return (
        <div>
            <Introduction image={'galleryintro.png'}/>
            <GalleryComponent/>
            <Quote/>
        </div>

    )
}