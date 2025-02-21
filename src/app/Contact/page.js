import React from "react";
import '../globals.css';
import Navbar from '../navbar'
import Footer from '../footer'
export default function Contact() {
  return (
    <>
<div>
        <Navbar />
      </div>
      <div className="service5">
        <div className="circle">
          <img src="https://preview.colorlib.com/theme/tailor/assets/img/hero/hero-icon.png.webp" />
        </div>
        <div className="home4">
          <img
            src="https://preview.colorlib.com/theme/tailor/assets/img/hero/h1_hero1.png"
            alt="Vehicle"
          />

          <div id="home5">
            <p>Contact</p>
          </div>
        </div>
      </div>
      <div className="map1">
      <iframe id="map1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093685!2d144.95565131565332!3d-37.81732774202137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5771d8c8d2d3f0b!2sFlinders+Street+Station!5e0!3m2!1sen!2sau!4v1615395813008!5m2!1sen!2sau" 
       ></iframe>
       </div>

    <div className="container11">
      <div className="contact-form11">
        <h2>Get in Touch</h2>
        <form className="mybtn3">
          <textarea placeholder="Enter Message"></textarea>
          <div className="input-group11">
            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Email" />
          </div>
          <input type="text" placeholder="Enter Subject" />
          <button type="submit">SEND</button>
        </form>
      </div>
      <div className="contact-info11">
        <div className="info-item11">
          <span className="icon11">🏠</span>
          <div>
            <strong>Ahmedabad,Gujrat</strong>
            <br />
            Nikol, 382325
          </div>
        </div>
        <div className="info-item11">
          <span className="icon11">📱</span>
          <div>
            <strong>+91 7654876903</strong>
            <br />
            Mon to Fri 9am to 6pm
          </div>
        </div>
        <div className="info-item11">
          <span className="icon11">📧</span>
          <div>
            <strong>support@gmail.com</strong>
            <br />
            Send us your query anytime!
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};


