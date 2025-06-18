// src/Components/Main/Main.js
import React from 'react';
import Home from '../pages/Home'; // Đảm bảo đường dẫn đến Home là chính xác
import About from '../pages/About'; // Import component About
import Activities from '../pages/Activities'; // Import component Activities
import Contact from '../pages/Contact'; // Import component Contact

const Main = ({ activeMenu }) => {
  return (
    <div>
      {activeMenu === 'Home' && <Home />}
      {activeMenu === 'About' && <About />} {/* Render component About khi activeMenu là 'About' */}
      {activeMenu === 'Activities' && <Activities />} {/* Render component Activities khi activeMenu là 'Activities' */}
      {activeMenu === 'Contact' && <Contact />} {/* Render component Contact khi activeMenu là 'Contact' */}
      {/* Thêm các component khác dựa trên activeMenu nếu cần */}
    </div>
  );
};

export default Main;
