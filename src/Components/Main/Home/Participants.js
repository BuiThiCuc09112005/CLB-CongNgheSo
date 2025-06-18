// src/Components/Main/Home/Participants.js
import React from 'react';
import './Participants.css';

const Participants = () => {
  return (
    <div className="participants-container">
      <h2>__________                       ĐỐI TƯỢNG THAM GIA                        __________</h2>
      <div className="participants-content">
        <div className="participants-item">
          <span className="icon">❤️</span>
          <p>Sinh viên chuyên ngành CNTT, Khoa học máy tính, Điện – điện tử, Kỹ thuật số,…</p>
        </div>
        <div className="participants-item">
          <span className="icon">❤️</span>
          <p>Các bạn sinh viên ngoài ngành nhưng yêu thích công nghệ, thích tìm hiểu và học lập trình</p>
        </div>
        <div className="participants-item">
          <span className="icon">❤️</span>
          <p>Sinh viên ở mọi khoá, từ năm nhất đến năm cuối, đều có thể tham gia vì hoạt động được chia theo trình độ</p>
        </div>
      </div>
    </div>
  );
};

export default Participants;
