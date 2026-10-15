import { useState, useEffect } from "react"
import "./Navbar.css"

function Navbar(){

  const [activeLink, setActiveLink] = useState("home");
  const [prevActiveLink, setPrevActiveLink] = useState("home");

  // Use Observer to see distance in the brouser (change threshold and the values after intersactionRatio to change be from 0 -> 100)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {

        if(entry.isIntersecting && entry.intersectionRatio >= 0.65) {
          setActiveLink(entry.target.id);
        }
      });
    }, { threshold: 0.65 });

    const sections = document.querySelectorAll("main section[id]");
    
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);



  return(
    <header className="site-header">

      <a href="#home" className="logo"> Logo </a>

      <nav className="navigation" aria-label="Main navigation" >

      {/* Home */}
        <a 
          href="#home"
          onMouseEnter = {() => {
            setPrevActiveLink(activeLink);
            setActiveLink("home")
          }}
          onMouseLeave = {() => {
            setActiveLink(prevActiveLink);
          } }
          onClick={() => {
            setPrevActiveLink("home");
            setActiveLink("home");
          }}
          className={activeLink === "home" ? "nav-link nav-link-active" : "nav-link"}
        >
        <span className="nav-label">Home</span>
        <span className="nav-label nav-label-active" aria-hidden="true">Home</span>
        </a>

      {/* About */}
        <a 
          href="#about"
          onMouseEnter = {() => {
            setPrevActiveLink(activeLink);
            setActiveLink("about")
          }} 
          onMouseLeave = {() => {
            setActiveLink(prevActiveLink);
          } }
          onClick={() => {
            setPrevActiveLink("about");
            setActiveLink("about");
          }}
          className={activeLink === "about" ? "nav-link nav-link-active" : "nav-link"}
        >
          <span className="nav-label">About</span>
          <span className="nav-label nav-label-active" aria-hidden="true">About</span>
        </a>

      {/* Projects */}
        <a 
          href="#projects"
          onMouseEnter = {() => {
            setPrevActiveLink(activeLink);
            setActiveLink("projects")
          }} 
          onMouseLeave = {() => {
            setActiveLink(prevActiveLink);
          } }
          onClick={() => {
            setPrevActiveLink("projects");
            setActiveLink("projects");
          }}
          className={activeLink === "projects" ? "nav-link nav-link-active" : "nav-link"}
        >
          <span className="nav-label">Projects</span>
          <span className="nav-label nav-label-active" aria-hidden="true">Projects</span>
        </a>

      {/* Work */}
        <a 
          href="#work"
          onMouseEnter = {() => {
            setPrevActiveLink(activeLink);
            setActiveLink("work")
          }} 
          onMouseLeave = {() => {
            setActiveLink(prevActiveLink);
          } }
          onClick={() => {
            setPrevActiveLink("work");
            setActiveLink("work");
          }}
          className={activeLink === "work" ? "nav-link nav-link-active" : "nav-link"}
        >
          <span className="nav-label">Work</span>
          <span className="nav-label nav-label-active" aria-hidden="true">Work</span>
        </a>

      {/* Contact */}
        <a
          href="#contact"
          onMouseEnter = {() => {
            setPrevActiveLink(activeLink);
            setActiveLink("contact")
          }} 
          onMouseLeave = {() => {
            setActiveLink(prevActiveLink);
          }}
          onClick={() => {
            setPrevActiveLink("contact");
            setActiveLink("contact");
          }}
          className={activeLink === "contact" ? "nav-link nav-link-active" : "nav-link"}
          
        >
          <span className="nav-label">Contact</span>
          <span className="nav-label nav-label-active" aria-hidden="true">Contact</span>
        </a>
      </nav>

      <a href="#contact" className="contact-button"> Let's talk ↗</a>

    </header>
  )
}

export default Navbar