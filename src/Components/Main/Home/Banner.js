// src/Components/Main/Home/Banner.js
import React from 'react';
import './Banner.css';

const Banner = ({ setActiveMenu }) => {
  const handleButtonClick = () => {
    setActiveMenu('Contact'); // Thay đổi activeMenu thành 'Contact'
  };

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(./anh/13.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="banner-content">
        <h1>CLB CÔNG NGHỆ SỐ</h1>
        <h1>NƠI KẾT NỐI ĐAM MÊ CÔNG NGHỆ</h1>
        <button className="join-button" onClick={handleButtonClick}>
          THAM GIA NGAY
        </button>
      </div>
    </div>
  );
};

export default Banner;
