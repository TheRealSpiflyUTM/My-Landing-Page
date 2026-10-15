import { useState } from 'react'
import Navbar from "./Navbar";
import Home from "./Home";
import './App.css'
import Cursor from './Cursor'
function App() {

  return (
    <>

      <Cursor/>

      <Navbar/>

      <main>
        <section id='home'><Home/></section>
        <section id='about'>About you</section>
        <section id='projects'>Projects</section>
        <section id='work'>Your Work</section>
        <section id='contact'>Contact details</section>
      </main>
    </>
  )
}

export default App
