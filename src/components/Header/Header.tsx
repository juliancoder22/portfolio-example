import React, { useState, useEffect } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Menu, MenuItem } from "@mui/material";
import ArrowRight from "../../assets/svg/lila-arrow-right.svg";
import Logo from "../../assets/LogoA_celestemedio.png";
import "./Header.scss";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(!menuOpen); // Cambia el estado de apertura del menú
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
    setMenuOpen(false); // Cierra el menú
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    handleLanguageClose();
  };

  useEffect(() => {
    const handleScroll = () => {
      // Cierra el menú cuando se detecta un desplazamiento
      handleLanguageClose();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <div className="header">
      <img src={Logo} alt="Julian Aquino Logo" />

      <ul className="header__nav">
        <li>
          <span className="header__bar">/ </span>Home
        </li>
        <li>
          <span className="header__bar">/ </span>Skills
        </li>
        <li>
          <span className="header__bar">/ </span>Experience
        </li>
        <li>
          <span className="header__bar">/ </span>About
        </li>
        <li onClick={handleLanguageClick}>
          <LanguageIcon /> {language}{" "}
          {menuOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </li>
        <li>
          Contact <img src={ArrowRight} alt="arrow right" />
        </li>
      </ul>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleLanguageClose}
        className="header__language-menu"
      >
        <MenuItem onClick={() => handleLanguageChange("EN")}>English</MenuItem>
        <MenuItem onClick={() => handleLanguageChange("ES")}>Español</MenuItem>
      </Menu>
    </div>
  );
};
