import React, { useState } from 'react';
import logo from "../assets/vetBD.png"

const Navbar = ({ currentPage, navigateTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navItems = [
    { id: 'home', label: 'Home', icon: 'fa-house' },
    { id: 'vaccine', label: 'Vaccine Info', icon: 'fa-syringe' },
    { id: 'calculator', label: 'Vaccine Calculator', icon: 'fa-vaccine-calculator'},
    { id: 'doctor', label: 'VAT Doctor', icon: 'fa-user-doctor' }
    // { id: 'calculator', label: 'Vaccine Calculator', icon: 'fa-vaccine-calculator'}
  ];

  return (
    <nav>
      <div className="nav-inner">
        <a className="logo" href="#" onClick={(e) => { e.preventDefault(); navigateTo('home'); }}>
          {/* <div className="logo-icon">🐾</div> */}
          <div className="logo-icon"><img src = {logo} alt = "Vet Info BD Logo"></img></div>
          <span className="logo-text">Vet Info <span>BD</span></span>
        </a>
        <ul className="nav-links">
          {navItems.map(item => (
            <li key={item.id}>
              <a
                onClick={() => navigateTo(item.id)}
                className={currentPage === item.id || (item.id === 'doctor' && currentPage.includes('doctor')) ? 'active' : ''}
              >
                <i className={`fa-solid ${item.icon}`}></i> {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="hamburger" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        {navItems.map(item => (
          <a
            key={item.id}
            onClick={() => { navigateTo(item.id); toggleMenu(); }}
          >
            <i className={`fa-solid ${item.icon}`}></i> {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;