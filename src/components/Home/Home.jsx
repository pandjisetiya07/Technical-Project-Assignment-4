import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../style.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
  <>
    <Navbar />
    <div className="detel">
        <h1>I,M <span className='hover-underline-animation'>Pandji Setiya Budhi Artha</span></h1>
        <p>This is my official Portfolio website to showcase my 
           all works related to <br/> web development and ui design. </p>
        <Link to="">Downdload CV</Link>
    </div>

    <div className="social">
           <Link to=""><i className="fab fa-github"></i></Link>
           <Link to=""><i className="fab fa-instagram"></i></Link>
           <Link to=""><i className="fab fa-whatsapp"></i></Link>
        </div>
  </>
  
  )
}

export default Home

// https://github.com/pandjisetiya07
// https://www.instagram.com/pandjisba_/
// https://wa.me/qr/7MBLVG5HWWNYN1