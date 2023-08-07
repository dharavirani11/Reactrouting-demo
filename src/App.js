import { Routes, Route} from "react-router-dom";
import Home from "./Home";
import './App.css';
import About from './About';
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";



function App() {
  return (
    <div className="App">
  <Routes>
   
<Route path="/"element={<Home/>}/>
<Route path='/about'element={<About/>}/>
<Route path='/resume'element={<Resume/>}/>
<Route path='/portfolio'element={<Portfolio/>}/>
<Route path='/blog'element={<Blog/>}/>
<Route path='/contact'element={<Contact/>}/>



    </Routes>        
    </div>
  )
}

export default App