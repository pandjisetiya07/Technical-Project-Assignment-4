import React from 'react'
import Navbar from '../Navbar/Navbar'
import './StyleAbout.css'
import { Card } from 'react-bootstrap';

function About() {
  return (
    <>
    <Navbar />  
      <div className='container cek'>
        <div className="col-lg-7  col-sm-6">
          <p className='about bg'>
            <span className='nama'>Pandji Setiya Budhi Artha</span>, berasal dari Taliwang Sumbawa barat.
            Saya menempuh pendidikan terkahir S1 disalah satu Universitas
            di Yogyakarta dan lulus pada tahun 2020. Saat ini saya sedang
            mengikuti  <span className='nama'> Amman Coding Bootcamp Bacth 3 </span>untuk menjadi developer Front End.
            Untuk Pengalaman Coding sudah pernah saya dapatkan di bangku kuliah
            dengan Bahasa pemograman PHP. dengan mengikuti Bootcamp ini berharap <span className='nama'>bisa
              mendapatkan ilmu dan pengalaman lebih.</span>
          </p>
        </div>

        <div className="col-lg-5  col-sm-6">
          <Card style={{ width: '18rem' }} >
            <div className='imgContainer'>
              <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Universitas_Jenderal_Achmad_Yani_Yogyakarta.png" />
            </div>
            <div className="content">
              <Card.Title><b>Universitas Jenderal Achmad Yani</b></Card.Title>
              <Card.Text>  <span className='nama'>LULUSAN </span><br/>Teknik Informatika 2016 - 2020</Card.Text>
            </div>
          </Card>
        </div>

      </div> 


    </>
  )
}

export default About