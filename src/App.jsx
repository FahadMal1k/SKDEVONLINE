import React from 'react'
import './App.css'
import Navbar from './component/Navbar.jsx'
import Hero from './component/Hero.jsx'
import About from './component/About.jsx'
// import Project from './component/Project.jsx'
import Projects from './component/Projects.jsx'
import Skill from './component/Skill.jsx'
import Resume from './component/Resume.jsx'
import ContactMe from './component/Contact.jsx'


export default function App() {
  return (
<div>
  <Navbar />
  <Hero />
  <About />
  {/* <Project /> */}
  <Projects />
  <Skill />
  <Resume />
  <ContactMe />
</div>
  )
}