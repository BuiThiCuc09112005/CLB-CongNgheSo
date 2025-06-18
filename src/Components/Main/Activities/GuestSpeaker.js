// src/Components/Activities/GuestSpeaker.js
import React from 'react';
import './GuestSpeaker.css'; // Import the CSS file for styling

const GuestSpeaker = () => {
  return (
    <div className="guest-speaker-container">
      <h2 className="guest-speaker-title">KHÁCH MỜI CHIA SẺ - TRUYỀN CẢM HỨNG TỪ THỰC TẾ</h2>
      <img
        src="./anh/my.jpg" // Replace with the actual path to your image
        alt="Guest Speaker"
        className="guest-speaker-image"
      />
      <p className="guest-speaker-description">
        <em>CLB từng mời chị Trịnh Hà My về lập trình đến chia sẻ hành trình học CNTT, vượt qua khó khăn ban đầu, và cách xây dựng thương hiệu cá nhân trên mạng xã hội.</em>
      </p>
      <ul className="guest-speaker-list">
        <li>• Học Kinh nghiệm thực tập</li>
        <li>• Phỏng vấn vị trí lập trình viên</li>
        <li>• Những điều sinh viên CNTT nên chuẩn bị từ sớm</li>
      </ul>
      <hr className="guest-speaker-divider" />
    </div>
  );
};

export default GuestSpeaker;
