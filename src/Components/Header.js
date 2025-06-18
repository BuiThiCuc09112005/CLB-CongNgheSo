// src/components/header/Header.js
import React from 'react';
import './Header.css'; // Import tệp CSS

const Header = ({ activeMenu, onMenuClick }) => {
  return (
    <header className="header">
      <div className="logoColumn">
        {/* Replace image with text "CNS" */}
        <span className="logoText">CNS</span>
      </div>
      <div className="menuColumn">
        {/* Các mục Menu */}
        {['Home', 'About', 'Activities', 'Contact'].map((menu) => (
          <span
            key={menu}
            className={menu.toLowerCase() === activeMenu.toLowerCase() ? 'activeMenuItem' : 'menuItem'}
            onClick={() => onMenuClick(menu)}
          >
            {menu}
          </span>
        ))}
      </div>
      <div className="iconColumn">
        {/* Các biểu tượng */}
        <img src="./anh/tk.png" alt="Icon 1" className="icon" />
        <img src="./anh/user.png" alt="Icon 2" className="icon" />
      </div>
    </header>
  );
};

export default Header;
