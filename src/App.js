import './App.scss';
import { Header } from './components/Header'
import { About } from './components/AboutPage'
import { Footer } from './components/Footer'
import { HomePage } from './components/HomePage/HomePage'
// import { FeaturedProjects } from './components/FeaturedProjects/FeaturedProjects'
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects'
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
            <Route path="/:project" component={FeaturedProjects} >
            </Route>
            <Route path="/about" component={About}></Route>
            <Route exact path="/" component={HomePage}></Route>
          </Switch>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
