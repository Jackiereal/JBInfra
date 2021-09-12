import { Introduction } from "./Introduction";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getAboutUs } from '../../services/services';
import { AboutUs } from '../AboutPage/AboutUs';
import { Directors } from '../AboutPage/Directors';
import { Quote } from './Quote'

export default function About(){
  let { project } = useParams();
  const [projects,setProjects] = useState([]);
  const [isError,setIsError] = useState(false);

  useEffect(()=>{
    async function fetchProjects(){
      const response = await getAboutUs();
      setProjects(response.data);
    }
    fetchProjects();
  },[])

  // const aboutus = projects?.Aboutus
  // console.log(projects.Aboutus)
  // console.log(projects.Aboutus.description)
  console.log(projects)
  const directors = [
    {
      "name": "Govardhan",
        "Googleplus": "googleplus.com", 
        "LinkedIn": "linkedin.com", 
        "Twitter": "twitter.com", 
        "description": "Mr. Govardhan Reddy managing partner of JB Infra heads Developments and Accounts of the company.He had started off his career as Pharmaceutical executive in Vivimef Laboratories Ltd. and after excelling in the field for more than 10 years he always knew he had the enterpreneurial instincts in him and enterned into business by starting off trading in steel and cement for the state of Telangana in the name if Vinathi Steel and Cement Traders. Then later in the year 2001 JB Builders was started which was a huge success leading to the start of JB Infrastructure and JB Infra in the year 2005.As a founding partner of JB Infra Mr. Goverdhan has been successful in building sales teams which are strong and commited, developing open plots, penetrating new territories, identifying and capturing new business. He always ensured the company has strong Customer relationship Management with all its investors and ensured value to customers creating a reputation for JB Infra of tenaciously protecting its clients interest by creating and ensuring value and appreciation for all its customers and ensures the company fulfills its promise to build an everlasting relationship with their customers.", 
        "facebook": "facebook.com", 
        "id": "27"
    },
    {
      "name": "Jagan",
        "Googleplus": "googleplus.com", 
        "LinkedIn": "linkedin.com", 
        "Twitter": "twitter.com", 
        "description": "Mr. Jagan Reddy, managing Partner of JB Infra, is a proud second generation entrepreneur who leads JB infra as a Marketing Head. A graduate, hailing from a humble background from small village in Telangana, he entered in the real estate business as Marketing Executive and rise to be the Managing Partner of JB Infra with sheer hard work and integrity.With nearly two decades of experience, he has always guaranteed customer satisfaction, quality of service, hands on income creation in all Infra's projects, His dynamic leadership and lead from the front attitude has continuosly steered the organization towards as special place in the Hyderabad real estate market. His dedication, thrive for buyers satsfaction ensures the justfication of JB Infra's motto Honesty and Appreciation to Customer", 
        "facebook": "facebook.com",
        "id": "271"
    },
    {
      "name": "Manohar",
        "Googleplus": "googleplus.com", 
        "LinkedIn": "linkedin.com", 
        "Twitter": "twitter.com", 
        "description": "Mr. Buyyani Manohar Reddy, Managing Partner of JB Infra Projects and a proud owner of Hyderabad's largest Convetions,BMR Sartha Convenstions . Mr. BMR, has an immense experience in Politics, Real Estate and Civil Contracts. Mr.BMR, had created jobs for several hundreds in various fields since 1990 as Government Civil Contractor(Class-1), served the public as ZPTC member (2006-20011).By entering Real Estate in the year 2002, Mr.BMR had showcased the actual meaning of trust to customers, since then. He joined JB Infra in 2012 and stood as a major support strength by making it the fastest growing Real Estate compant in less than 5 years.", 
        "facebook": "facebook.com",
        "id": "274"
    },
    {
    "name": "Pratap",
      "Googleplus": "googleplus.com", 
      "LinkedIn": "linkedin.com", 
      "Twitter": "twitter.com", 
      "description": "Mr. Prathap Reddy, Managing Partner of JB Infra, started his journey in the year 1983 as marketing executive in Swedish company called Minimax. He had grown to become a Regional Head and then further on to become the Divisional Manager for entire South India, His vast experience in Marketing and Distribution and the ambition to serve people with the intention of providing affordable real estate to customers, lead to the start of JB. The first project of JB Infra was initiated on the Sagar Road in year 2001. From then on, as a founder of company he has worked in multiple facets to take the company to new heights. The proudest moment for Mr. JB Prathap Reddy and his managing partners was when they took over a 570 acres project at Ibrahimpatnam and executed it meticulously with in a record time of 3 years. With 18 years of experience in marketing and nearly 2 decades of experties in real-estate, he is key driving force and important pillar in building up JB.", 
      "facebook": "facebook.com",
      "id": "276"
    },
]
  const description = 'JB Infra Projects is a 19 year old real estate firm which has built its reputation for developing wide range of affordable real estate ventures in and around Ibrahimpatnam  Adibatla areas in Hyderabad. The promoters have vast experience with deep domain knowledge in identifying, developing, marketing and delivering real estate projects they undertake. All the ventures are planned and executed with custom-made features keeping targeted customers needs in mind.JB Infra Projects offers wide range of plots, customized housing options, residential investments in fast developing locations in and around ORR in Hyderabad. JB Infra Projects primary focus is on building ever lasting relationships with its customers.'
    return (
    <div>
            <Introduction/>
            {/* <AboutUs aboutus={projects.Aboutus.description}/> */}
            <AboutUs aboutus={description}/> 
            <Directors directors={directors}/>
            <Quote></Quote>
        </div>
        
    )
}