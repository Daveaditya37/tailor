"use client";

import { useState } from "react";
import "./globals.css";
import Link from 'next/link';


export default function AnotherNavPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (



    
   
    <div className="nav-page">
      <nav className="nav">
        <ul className="nav3">
          <li>Tailor.</li>
        </ul>
        <div className="burger1">
        <div className="burger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        </div>
        <ul className={`nav1 ${isMenuOpen ? "active" : ""}`}>
        <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/Service">Services</Link></li>
          <li
            id="nnav" className={`dropdown ${isDropdownOpen ? "open" : ""}`}
            onClick={toggleDropdown}
          >
            <a href="#">Blog</a>
            <ul className="dropdown-content">
              <li><Link href="/Blog">Blog</Link></li>
              <li><Link href="/Blog/1">Blog Details</Link></li>
              <li><a href="#">Element</a></li>
            </ul>
          </li>
          <li><Link href="/Contact">Contact</Link></li>
        </ul>
        <button className="visit-us-btn">Visit Us</button>
      </nav>

      
       
    </div>
  );
}
