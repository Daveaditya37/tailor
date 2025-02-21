



import "../globals.css";
import Navbar from '../navbar';
import About from "../Aboutus";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Services from "../services";
import Carousel from "../carousel"
import { FaCirclePlay } from "react-icons/fa6";
import Social from "../social";



export default function About2() {

  
  return (
    <>
     
    <div>
        <Navbar/>
        </div>
        <div className="service5">
    <div className="circle">
        <img src="https://preview.colorlib.com/theme/tailor/assets/img/hero/hero-icon.png.webp"/>
    </div>
      <div className="home4">
        
      <img src="https://preview.colorlib.com/theme/tailor/assets/img/hero/h1_hero1.png" alt="Vehicle" />

      <div id="home5">
        
      <p>About Us</p>
      </div>
      
        
      </div>
      </div>
        <div>
        <About/>
        </div>
         <>
              <div className="service4">
                <h1>Why use our service?</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  varius enim in eros.
                </p>
              </div>
        <div className="icon">
              <div className="icon1">
                <img src="https://preview.colorlib.com/theme/tailor/assets/img/icon/services1.svg" alt="img7" />
                <h1>Tailor Sweing</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  varius enim in eros elementum tristique.
                </p>
              </div>
        
              <div className="icon1">
                <img src="https://preview.colorlib.com/theme/tailor/assets/img/icon/services2.svg" alt="img7" />
                <h1>Tailor Sweing</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  varius enim in eros elementum tristique.
                </p>
              </div>
        
              <div className="icon1">
                <img src="https://preview.colorlib.com/theme/tailor/assets/img/icon/services3.svg" alt="img7" />
                <h1>Tailor Sweing</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  varius enim in eros elementum tristique.
                </p>
              </div>
        
              <div className="icon1">
                <img src="	https://preview.colorlib.com/theme/tailor/assets/img/icon/services4.svg" alt="img7" />
                <h1>Tailor Sweing</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  varius enim in eros elementum tristique.
                </p>
              </div>
              
              
              
              
              
              </div>
              <div className="video5">
              <div className="video3"></div>
              <div>
              
              <a className="video" href="https://www.youtube.com/watch?v=up68UAfH0d0">
              <FaCirclePlay className="video4" id="video2"/>
              
              </a>
              </div>
              </div>
              
            </>
        <div>
           
            <Carousel/>
        </div>
        <div>
    <Social/>
    </div>

        <div>
         <footer className="footer3">
          <div className="footer-container">
            <div className="map-column">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093685!2d144.95565131565332!3d-37.81732774202137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5771d8c8d2d3f0b!2sFlinders+Street+Station!5e0!3m2!1sen!2sau!4v1615395813008!5m2!1sen!2sau" 
               ></iframe>
            </div>
            <div className="info-column">
              <div className="brand-info">
                <h3>Tailor.</h3>
                <p id="info1">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <p className="large-contact">(80) 783 367-3904</p>
                <p id="info2" className="small-contact">(80) 783 367-3904</p>
                <div className="social-icons">
                  <i className="fab "><FaTwitter id="fab2"/></i>
                  <i className="fab "><FaFacebookF id="fab3"/></i>
                  <i className="fab "><FaPinterestP id="fab4" /></i>
                </div>
              </div>
              <div className="solutions">
                <h3>Our Solutions</h3>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Services</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="info4">©2025 All rights reserved | This template is made with <FaHeart id="info5" />by <p id="info3"> Colorlib</p></div>
          </div>
          
        </footer>
 
    </div>
    
    </>
  );
}
