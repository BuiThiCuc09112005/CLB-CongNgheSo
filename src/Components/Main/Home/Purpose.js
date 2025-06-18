// src/Components/Main/Home/Purpose.js
import React from 'react';
import './Purpose.css';

const Purpose = () => {
  return (
    <div className="purpose-container">
      <h2>____________________MỤC ĐÍCH THÀNH LẬP CLB CÔNG NGHỆ SỐ____________________</h2>
      <div className="purpose-content">
        <div className="purpose-item">
          <span className="icon">➤</span>
          <p>Là nơi sinh viên đam mê công nghệ cùng nhau học tập, sáng tạo và phát triển kỹ năng IT thông qua dự án, workshop và cuộc thi thực tế.</p>
        </div>
        <div className="purpose-item indent">
          <span className="icon">➤</span>
          <p>Tạo sân chơi học thuật cho sinh viên yêu thích lĩnh vực công nghệ, đặc biệt là các mảng như:</p>
        </div>
        <div className="purpose-item sub-indent">
          <span className="icon">•</span>
          <p>Công nghệ thông tin (CNTT)</p>
        </div>
        <div className="purpose-item sub-indent">
          <span className="icon">•</span>
          <p>Lập trình (Web, App, Game,…)</p>
        </div>
        <div className="purpose-item sub-indent">
          <span className="icon">•</span>
          <p>Trí tuệ nhân tạo (AI), Học máy (Machine Learning)</p>
        </div>
        <div className="purpose-item sub-indent">
          <span className="icon">•</span>
          <p>Internet vạn vật (IoT), điện toán đám mây, và nhiều lĩnh vực số khác</p>
        </div>
        <div className="purpose-item">
          <span className="icon">➤</span>
          <p>Nâng cao kỹ năng thực hành, bổ sung kiến thức ngoài chương trình học chính khoá, chuẩn bị hành trang nghề nghiệp cho sinh viên</p>
        </div>
        <div className="purpose-item">
          <span className="icon">➤</span>
          <p>Kết nối cộng đồng sinh viên yêu công nghệ để cùng học hỏi, phát triển dự án, và chia sẻ kiến thức với nhau</p>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
