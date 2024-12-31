import React, { useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Project from "./Components/Project";
import Resume from './Components/Resume'
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Euducation from "./Components/Education"
import ContactEmail from "./Components/ContactEmail";
const App = () => {
    
    return (
        <div> 
            <Header />
            <Hero />
            <About />
            <Project /> 
            <Resume />
            <Euducation />
            <Contact />
            <Footer />
            <ContactEmail />
        </div>
    );
};

export default App;
