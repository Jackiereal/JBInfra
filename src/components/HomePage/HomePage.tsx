import { Projects } from "./Projects";
import { Journey } from "./Journey";
import { Testimonials } from "./Testimonials";
import { Introduction } from "./Introduction";
import { IntroVideo } from './IntroVideo'


export const HomePage = ()=>{
    return (
        <div>
            {/* <Introduction/> */}
            <IntroVideo/>
            <Projects/>
            <Journey/>
            <Testimonials/>
        </div>
        
    )
}