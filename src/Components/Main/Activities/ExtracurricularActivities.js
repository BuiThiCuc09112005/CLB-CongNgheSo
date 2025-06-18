// src/Components/Activities/ExtracurricularActivities.js
import React from 'react';
import './ExtracurricularActivities.css'; // Import the CSS file for styling

const ExtracurricularActivities = () => {
  return (
    <div className="extracurricular-activities-container">
      <h2 className="extracurricular-activities-title">HOẠT ĐỘNG NGOẠI KHÓA - GẮN KẾT VÀ KHÁM PHÁ</h2>
      <img
        src="./anh/ngoaikhoa.jpg" // Replace with the actual path to your image
        alt="Extracurricular Activities"
        className="extracurricular-activities-image"
      />
      <p className="extracurricular-activities-description">
        <em>Ngoài giờ học, CLB còn tổ chức các buổi hoạt động nhẹ nhàng, giúp các thành viên thư giãn, kết nối và khám phá thực tế như:</em>
      </p>
      <ul className="extracurricular-activities-list">
        <li>• Tham quan công ty công nghệ: CLB từng đến CMC Corporation và một số doanh nghiệp IT lớn, lắng nghe chia sẻ từ nhân sự kỹ thuật và phòng nhân sự.</li>
        <li>• Teambuilding – ăn uống – sinh nhật: Những khoảnh khắc gắn bó không thể thiếu sau mỗi đợt sinh hoạt.</li>
      </ul>
      
    </div>
  );
};

export default ExtracurricularActivities;
