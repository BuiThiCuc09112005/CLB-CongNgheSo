import React from 'react';
import './TechHeartbeat.css';

const TechHeartbeat = () => {
  return (
    <div className="tech-heartbeat">
      <div className="tech-heartbeat__line" />
      <p className="tech-heartbeat__text">
        DÙ LÀ HỌC, CHIA SẺ HAY THAM QUAN, MỖI HOẠT ĐỘNG ĐỀU GIÚP CLB NGÀY CÀNG TRƯỞNG THÀNH – LÀ NƠI KẾT NỐI ĐAM MÊ VÀ PHÁT TRIỂN TOÀN DIỆN CHO SINH VIÊN YÊU CÔNG NGHỆ.
      </p>
      <div className="tech-heartbeat__hearts">
        {'💙 '.repeat(30)}
      </div>
      <div className="tech-heartbeat__line" />
    </div>
  );
};

export default TechHeartbeat;
