import { Projects } from "./Projects";
import { Journey } from "./Journey";
import { Testimonials } from "./Testimonials";
import { Introduction } from "./Introduction";
import { IntroVideo } from './IntroVideo';
import { Quote } from './../AboutPage/Quote';


export const HomePage = ()=>{
    return (
        <div>
            {/* <Introduction/> */}
            <IntroVideo/>
            <Projects/>
            <Journey/>
            <Testimonials/>
            <Quote/>
        </div>
        
    )
}