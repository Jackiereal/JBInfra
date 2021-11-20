import './App.scss';
import { Header } from './components/Header'
import About  from './components/AboutPage/AboutPage'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery/Gallery'
import { ContactUs } from './components/ContactUs/ContactUs'
import { HomePage } from './components/HomePage/HomePage'
import { Brochures } from './components/Brochures/Brochures'
// import { OurJourney } from './components/CompletedProjects/OurJourney';
// import { Introduction } from "./components/HomePage/Introduction";
// import { FeaturedProjects } from './components/FeaturedProjects/FeaturedProjects'
import { FeaturedProjects } from './components/FeaturedProjects/FeaturedProjects'

import { BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'




function App() {
  
  return (
    <Router>
    <div className="App">
        <Header/>
        <Switch>
            <Route path="/about" component={About}></Route>
            <Route path="/brochure" component={Brochures} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/:project" component={FeaturedProjects} />
            {/* <Route path="/ourjourney" component={OurJourney} /> */}
            <Route path="/" component={HomePage}></Route>
          </Switch>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
