// src/Components/Activities/RegularActivities.js
import React from 'react';
import './RegularActivities.css'; // Import the CSS file for styling

const RegularActivities = () => {
  return (
    <div className="regular-activities-container">
      <h2 className="regular-activities-title">SINH HOẠT ĐỊNH KỲ</h2>
      <img
        src="./anh/sinhhoat.png" // Replace with the actual path to your image
        alt="Regular Activities"
        className="regular-activities-image"
      />
      <p className="regular-activities-description">
        <em>CLB Công nghệ Số tổ chức các buổi dinh hoạt để các bạn sinh viên cùng nhau trao đổi kiến thức về:</em>
      </p>
      <ul className="regular-activities-list">
        <li>• Lập trình Python, Web, C++</li>
        <li>• Trí tuệ nhân tạo (AI)</li>
        <li>• An ninh mạng (Cybersecurity)</li>
        <li>• Thiết kế giao diện người dùng (UI/UX)</li>
      </ul>
      <hr className="regular-activities-divider" />
    </div>
  );
};

export default RegularActivities;
