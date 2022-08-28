import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./StylePortofolio.css"
import { Card } from 'react-bootstrap';

const Portofolio = () => {
  const portofolioInfo  = [
    {image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Universitas_Jenderal_Achmad_Yani_Yogyakarta.png", 
     title: "Univ Jenderal Achmad Yani - Yogyakarta", 
     text:  "Mengambil Jurusan informatika masuk pada tahun 2016 dan lulus pada tahun 2020 ",
    },

    {image: "https://biroka.unjaya.ac.id/organization/2vbC8iHV-20210906-organization.png", 
     title: "Taekwondo", 
     text: "Menjabat sebagai ketua UKM selama 2 periode dari tahun 2018 - 2020"
    },

    {image: "https://biroka.unjaya.ac.id/organization/Vmkerouy-20210714-organization.png", 
     title: "BEM Universitas", 
     text: "Ketua Koordinator Public Relation Menjabat sebagai ketua selama 1 Periode, melakukan koordinasi kegiatan baik dalam universitas maupun luar universitas",
    },
    {image: "https://biroka.unjaya.ac.id/organization/RS92NFpU-20210906-organization.png", 
     title: "Photografi", 
     text: "Bendahara, Ketua Devisi Perlengkapan Mengatur keuangan UKM, untuk periode selanjutnya menjadi ketua devisi bertugas mempersiapan perlengkapan ketika acara universitas maupun acara UKM.",
    },

    {image: "https://kmedia.co.id/wp-content/uploads/2017/09/kmedia_logo_main.png", 
    title: "Penerbit K-Media Yogyakarta", 
    text: "Bekerja Part time dengan job melakukan maintenace website dan membantu mendesain cover buku menggunakan Corel Drow"
   },

   {image: "https://www.cendananews.com/wp-content/uploads/2017/08/BMKG.jpg", 
    title: "BMKG Stasiun Geofisik Yogyakarta", 
    text: "Bekerja bersama tim untuk mengerjakan sebuah Sistem Monitoring Alat dan Sinyal yang dapat membantu memonitoring kondisi alat – alat observasi yang ada di BMKG Stasiun Geofisika Kelas 1 Yogyakarta"
   },

   {image: "https://goa-jereweh.desa.id/wp-content/uploads/2022/01/g.jpg", 
    title: "Membangun Website Desa", 
    text: "Membangun website desa goa menggunakan PHP CI yang terhubung langsung dengan database MySql"
   },
   {image: "https://yt3.ggpht.com/ytc/AMLnZu8buWTuB9R2l6PvBjtG_7Ncpm4Cl_AmtgAgKbcd=s900-c-k-c0x00ffffff-no-rj", 
    title: "AMMAN Coding BootCamp", 
    text: "Amman Coding Bootcamp Bacth 3 untuk menjadi developer Front End."
   },
    
  ];

  const renderInfo = (card, index) => {
    return(
      <Card style={{ width: '18rem' }} key={index}>
              <div className='imgContainer'>
                <Card.Img variant="top" src={card.image} />
              </div>
              <div className="content">
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
              </div>
        </Card>           
    )
  }
  return (
  <>
    <Navbar />
    <div className='portofolio'>
        <h1>Protofolio</h1>
        <p>Project | Organisasi</p>
    </div>

   <div className='container'>
        {portofolioInfo.map(renderInfo)}
   </div>
  </>
  )
}

export default Portofolio