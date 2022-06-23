import './App.css';
import Header from './component/Header/Header';
import Nav from './component/Nav/Nav'
import About from './component/About/About'
import Skills from './component/Skills/Skills';
import Projects from './component/Projects/Projects';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer'
import Toggle from './component/dark mode/Toggle';
import { BrowserRouter as Router, } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { ThemeContext } from './context';


function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? '#CEE5D0' : 'var(--main-bg-color)'
      }}>
      <Router>
        <Toggle />
        <Header />
        <Nav />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Toaster />
      </Router>
    </div>
  );
}

export default App;
