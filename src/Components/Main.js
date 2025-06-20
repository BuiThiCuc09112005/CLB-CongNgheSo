// src/Components/Main/Main.js
import React from 'react';
import Home from '../pages/Home'; // Đảm bảo đường dẫn đến Home là chính xác
import About from '../pages/About'; // Import component About
import Activities from '../pages/Activities'; // Import component Activities
import Contact from '../pages/Contact'; // Import component Contact

const Main = ({ activeMenu, setActiveMenu }) => {
  return (
    <div>
      {activeMenu === 'Home' && <Home setActiveMenu={setActiveMenu} />}
      {activeMenu === 'About' && <About />}
      {activeMenu === 'Activities' && <Activities />}
      {activeMenu === 'Contact' && <Contact />}
      {/* Thêm các component khác dựa trên activeMenu nếu cần */}
    </div>
  );
};

export default Main;
