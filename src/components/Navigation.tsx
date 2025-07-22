import { NavLink, useLocation } from "react-router";
import "../styles/index.css";
import "../styles/navigation.css";
import { useState } from "react";

export function Navigation() {

  const [language, setLanguage] = useState('en');
  const { pathname } = useLocation();
  

  function transformUrl() {
    const oldLanguage = language;
    const newLanguage = language === 'en' ? 'cz' : 'en';
    return pathname.replace(oldLanguage, newLanguage);
  }
  

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'cz' : 'en'));
  };

  return (
    <nav className="navbar">
      <div className="logo">SPA Store</div>
      <ul className="nav-links">
        <li><NavLink className="nav-link" to={`/${language}/`}>{language === 'en' ? 'Home' : 'Domů'}</NavLink></li>
        <li><NavLink className="nav-link" to={`/${language}/about`}>{language === 'en' ? 'About' : 'O nás'}</NavLink></li>
        <li><NavLink className="nav-link" to={`/${language}/services`}>{language === 'en' ? 'Services' : 'Služby'}</NavLink></li>
        <li><NavLink className="nav-link" to={`/${language}/contact`}>{language === 'en' ? 'Contact' : 'Kontakt'}</NavLink></li>
      </ul>
      <NavLink className="language-switch" to={transformUrl()} onClick={toggleLanguage}>
        {language === 'en' ? 'CZ' : 'EN'}
      </NavLink>
    </nav>
  );
}