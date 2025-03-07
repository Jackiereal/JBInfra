import { Introduction } from "./Introduction";
import { Banner } from "./Banner"
// import { Introduction } from "./../HomePage/Introduction";
import { useState, useEffect } from 'react';
// import { useParams } from "react-router-dom";
import { getAboutUs } from '../../services/services';
import { AboutUs } from '../AboutPage/AboutUs';
import { Directors } from '../AboutPage/Directors';
import { Quote } from './Quote'
import { Footer } from './../../components/Footer'

export default function About(){
  // let { project } = useParams();
  const [projects,setProjects] = useState([]);

  if(!window.location.hash){
    window.location = window.location + '#'
    window.location.reload()
  }
  window.scrollTo(0, 0);
  // const [isError,setIsError] = useState(false);

  // useEffect(()=>{
  //   async function fetchProjects(){
  //     const response = await getAboutUs();
  //     setProjects(response.data);
  //   }
  //   fetchProjects();
  // },[])

  // const aboutus = projects?.Aboutus
  // console.log(projects.Aboutus)
  // console.log(projects.Aboutus.description)
  const directors = [
    {
      "name": "Pratap Reddy",
      "designation": "Founder/Managing Partner",
        "instagram": "https://www.instagram.com/jbinfragroupofficial/", 
        "linkedin": "https://www.linkedin.com/company/jb-infraprojects/", 
        "twitter": "https://twitter.com/Jbinfraofficial", 
        "description": "Mr. Prathap Reddy, Managing Partner of JB Infra, started his journey in the year 1983 as marketing executive in Swedish company called Minimax. He had grown to become a Regional Head and then further on to become the Divisional Manager for entire South India, His vast experience in Marketing and Distribution and the ambition to serve people with the intention of providing affordable real estate to customers, lead to the start of JB. The first project of JB Infra was initiated on the Sagar Road in year 2001. From then on, as a founder of company he has worked in multiple facets to take the company to new heights. The proudest moment for Mr. JB Prathap Reddy and his managing partners was when they took over a 570 acres project at Ibrahimpatnam and executed it meticulously with in a record time of 3 years. With 18 years of experience in marketing and nearly 2 decades of experties in real-estate, he is key driving force and important pillar in building up JB.", 
        "facebook": "https://www.facebook.com/Jbinfraofficial/",
        "id": "276",
        "image" : "pratap"
      },
      {
        "name": "Manohar Reddy",
        "designation": "Managing Partner",
          "instagram": "https://www.instagram.com/jbinfragroupofficial/", 
          "linkedin": "https://www.linkedin.com/company/jb-infraprojects/", 
          "twitter": "https://twitter.com/Jbinfraofficial", 
          "description": "Mr. Buyyani Manohar Reddy, Managing Partner of JB Infra Projects and a proud owner of Hyderabad's largest Convetions,BMR Sartha Convenstions . Mr. BMR, has an immense experience in Politics, Real Estate and Civil Contracts. Mr.BMR, had created jobs for several hundreds in various fields since 1990 as Government Civil Contractor(Class-1), served the public as ZPTC member (2006-20011).By entering Real Estate in the year 2002, Mr.BMR had showcased the actual meaning of trust to customers, since then. He joined JB Infra in 2012 and stood as a major support strength by making it the fastest growing Real Estate compant in less than 5 years.", 
          "facebook": "https://www.facebook.com/Jbinfraofficial/",
          "id": "274",
          "image" : "manohar"
      },
    {
      "name": "Govardhan Reddy",
      "designation": "Managing Partner",
        "instagram": "https://www.instagram.com/jbinfragroupofficial/", 
        "linkedin": "https://www.linkedin.com/company/jb-infraprojects/", 
        "twitter": "https://twitter.com/Jbinfraofficial", 
        "description": "Mr. Govardhan Reddy, managing partner of JB Infra heads Developments and Accounts of the company.He had started off his career as Pharmaceutical executive in Vivimef Laboratories Ltd. and after excelling in the field for more than 10 years he always knew he had the enterpreneurial instincts in him and enterned into business by starting off trading in steel and cement for the state of Telangana in the name if Vinathi Steel and Cement Traders. Then later in the year 2001 JB Builders was started which was a huge success leading to the start of JB Infrastructure and JB Infra in the year 2005. He always ensured the company has strong Customer relationship Management with all its investors and ensured value to customers creating a reputation for JB Infra of tenaciously protecting its clients interest by creating and ensuring value and appreciation for all its customers and ensures the company fulfills its promise to build an everlasting relationship with their customers.", 
        "facebook": "https://www.facebook.com/Jbinfraofficial/", 
        "id": "27",
        "image" : "govardhan"
    },
    {
      "name": "Jagan Reddy",
      "designation": "Managing Partner",
        "instagram": "https://www.instagram.com/jbinfragroupofficial/", 
        "linkedin": "https://www.linkedin.com/company/jb-infraprojects/", 
        "twitter": "https://twitter.com/Jbinfraofficial", 
        "description": "Mr. Jagan Reddy, managing Partner of JB Infra, is a proud second generation entrepreneur who leads JB infra as a Marketing Head. A graduate, hailing from a humble background from small village in Telangana, he entered in the real estate business as Marketing Executive and rise to be the Managing Partner of JB Infra with sheer hard work and integrity.With nearly two decades of experience, he has always guaranteed customer satisfaction, quality of service, hands on income creation in all Infra's projects, His dynamic leadership and lead from the front attitude has continuosly steered the organization towards as special place in the Hyderabad real estate market. His dedication, thrive for buyers satsfaction ensures the justfication of JB Infra's motto Honesty and Appreciation to Customer", 
        "facebook": "https://www.facebook.com/Jbinfraofficial/",
        "id": "271",
        "image" : "jagan"
    },
   
   
]
  const description = 'JB Infra is a 20 year old Real estate firm which has built its reputation for developing wide range of affordable real estate ventures in and around Hyderabad. The promoters have vast experience with deep domain knowledge in identifying, developing, marketing and delivering real estate projects they undertake. All the ventures are planned and executed with custom-made features keeping targeted customers needs in mind. JB Infra offers wide range of plots, customised housing options, Villas and Residential investments in fast developing locations in and around ORR in Hyderabad. JB’s primary focus is building an ever lasting relationship with its customers. The pride and joy in seeing their dreams of thousands of happy families come to reality through our ventures is unparalleled and it is what we strive for day in and day out.'
    return (
    <div>
            <Banner image={'aboutusintro.png'}/>
            {/* <AboutUs aboutus={projects.Aboutus.description}/> */}
            <AboutUs aboutus={description}/> 
            <Directors directors={directors}/>
            <Quote></Quote>
            <Footer></Footer>
        </div>
        
    )
}