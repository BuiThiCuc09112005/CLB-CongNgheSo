// src/Components/Activities/CollaborativeLearning.js
import React from 'react';
import './CollaborativeLearning.css'; // Import the CSS file for styling

const CollaborativeLearning = () => {
  return (
    <div className="collaborative-learning-container">
      <h2 className="collaborative-learning-title">CÙNG HỌC – CÙNG TIẾN BỘ</h2>
      <img
        src="./anh/zoom.jpeg" // Replace with the actual path to your image
        alt="Collaborative Learning"
        className="collaborative-learning-image"
      />
      <p className="collaborative-learning-description">
        <em>Không chỉ học một mình, các bạn thành viên thường tổ chức:</em>
      </p>
      <ul className="collaborative-learning-list">
        <li>• Học nhóm qua Zoom</li>
        <li>• Cùng giải đề Leetcode</li>
        <li>• Thực hành làm dự án nhỏ theo nhóm, có người hướng dẫn</li>
      </ul>
      <hr className="collaborative-learning-divider" />
    </div>
  );
};

export default CollaborativeLearning;
