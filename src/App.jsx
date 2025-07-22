import Home from "./mySections/Home";
import About from "./mySections/About";
import Contact from "./mySections/Contact";
import Skills from "./mySections/Skills";
import Project from "./mySections/Project";
import Resume from "./mySections/Resume";
import Blog from "./mySections/Blog";
import Header from "./myComponents/Header"
import { useRef } from "react";
import Footer from "./mySections/Footer";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Certifications from "./mySections/Certifications";
import FloatingButton from "./myComponents/MyFloatingButton";


function App() {

  // Fonction appelée quand une section entre/sort du viewport
  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        var navItem = document.getElementById('nav-' + entry.target.id);
        const otherNavItem = document.getElementsByClassName('nav-link');
        Array.from(otherNavItem).forEach((item) => item.classList.remove('active'));
        navItem.classList.add('active');
      }


    });
  };

  // Options pour l'observer (seuil de visibilité)
  const observerOptions = {
    root: null, // null signifie que l'observation se fait dans la fenêtre d'affichage
    threshold: 0.6, // 50% de la div doit être visible pour déclencher
  };

  // Créer l'observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Sélectionner les sections à observer
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));
  })





  return (
    <>
      <ToastContainer />
      <Header />
      <section className="md:my-12" id='home' data-aos="fade-up" data-aos-duration="1500">
        <Home />
      </section>
      <section className="md:my-12" id='resume'>
        <Resume />
      </section>
      <section className="md:my-12 my-24" id='project'>
        <Project />
      </section>

      <section className="md:my-12" id='skills' data-aos="fade-up" data-aos-duration="1500">
        <Skills />
      </section>
      <section className="md:my-24" id='certificates'>
        <Certifications />
      </section>

      <section className="md:my-12" id='about' data-aos="fade-up" data-aos-duration="1500">
        <About />
      </section>



      {/* <section className="md:my-12" id='blog'>
        <Blog />
      </section> */}

      <section className="md:my-12" id='blog'>
        <Blog />
      </section>
      <section className="md:my-12" id='contact'>
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
      <section>
        <FloatingButton></FloatingButton>
      </section>
    </>
  )
}

export default App;