import { Projects } from "./Projects";
import { Journey } from "./Journey";
import { Testimonials } from "./Testimonials";
import { Introduction } from "./Introduction";

export const HomePage = ()=>{
    return (
        <div>
            <Introduction/>
            <Projects/>
            <Journey/>
            <Testimonials/>
        </div>
        
    )
}