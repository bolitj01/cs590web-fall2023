import React from 'react'
import { Link } from 'react-router-dom'
import "../css/home.css"
function Home() {
  return (
    <>
     <link  rel="stylesheet"  href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"/>
    <img id="logo" src="mainlogo.png" />
    <header className="header">
      
      <a href="#" className="logo"><span id="logospan">Welcome Mastadons</span></a>
 
      
 
  </header>
  <section className="homepage" id="homepage">
             <div className="info">
                 <h3>Its time to celebrate! <span> The complete event schedule</span></h3>
                 <h2>Sign up with us to receive timely updates on our vibrant campus events, including fun games and snacks, 
                     making it easier for you to keep track and attend them, with all events listed on our events page.</h2>
                 <a href="/login"><span className="button">Get Started</span> </a>
             </div>
 
             <div className="swiper image-slider">
                 <div className="swiper-wrapper">
                     <div className="swiper-slide"><img src="images/slide1.jpg" alt="slide1" /></div>
                     <div className="swiper-slide"><img src="images/slide2.jpg" alt="slide2" /></div>
                     <div className="swiper-slide"><img src="images/slide3.jpg" alt="slide3" /></div>
                     <div className="swiper-slide"><img src="images/slide4.jpg" alt="slide4" /></div>
                     <div className="swiper-slide"><img src="images/slide5.jpg" alt="slide5" /></div>
                     <div className="swiper-slide"><img src="images/slide6.jpg" alt="slide6" /></div>
                     <div className="swiper-slide"><img src="images/slide7.jpg" alt="slide7" /></div>
                     <div className="swiper-slide"><img src="images/slide8.jpg" alt="slide8" /></div>
                     <div className="swiper-slide"><img src="images/slide9.jpg" alt="slide7" /></div>
                     <div className="swiper-slide"><img src="images/slide10.jpg" alt="slide7" /></div>
                     <div className="swiper-slide"><img src="images/slide11.png" alt="slide7" /></div>
                     <div className="swiper-slide"><img src="images/slide12.jpg" alt="slide7" /></div>
                 </div>
             </div>
 
         </section>
         <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
    </>
  )
}

export default Home
