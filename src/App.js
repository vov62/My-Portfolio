import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import About from "./component/About/About";
import Skills from "./component/Skills/Skills";
import Projects from "./component/Projects/Projects";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import ChatCtrl from './component/Chat/ChatCtrl';
import Projects2 from "./component/Projects2/Projects2";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Nav />
        <About />
        <Skills />
        {/* <Projects /> */}
        <Projects2 />
        <Contact />
        {/* <ChatCtrl /> */}
        <Footer />
        <Toaster />
      </Router>
    </div>
  );
}

export default App;
