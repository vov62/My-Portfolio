import './App.css';
import Header from './component/Header/Header';
import Nav from './component/Nav/Nav'
import About from './component/About/About'
import Skills from './component/Skills/Skills';
import Projects from './component/Projects/Projects';
import Contact from './component/contact/Contact';
import { BrowserRouter as Router, } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Router>
  );
}

export default App;
