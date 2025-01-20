import './globals.css'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
export default function Footer(){
    return(
        <footer className="footer">
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

    )
}