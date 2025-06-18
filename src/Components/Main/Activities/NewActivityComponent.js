// src/Components/Activities/NewActivityComponent.js
import React from 'react';
import './NewActivityComponent.css'; // Ensure the CSS file is correctly imported

const NewActivityComponent = () => {
  return (
    <div className="new-activity-container">
      <div className="new-activity-header">
        <h3>“Không chỉ học, mà còn sống cùng đam mê công nghệ”</h3>
      </div>
      <div className="new-activity-content">
        <p>Tại đây, mỗi buổi sinh hoạt không chỉ là lúc để học lập trình, mà còn là dịp để kết nối, chia sẻ kinh</p>
        <p>nghiệm thực tế, cùng nhau vượt qua thử thách và phát triển kỹ năng toàn diện.</p>
      </div>
      <div className="new-activity-footer">
        <p>Hãy cùng khám phá những hoạt động tiêu biểu đã và đang tạo nên một cộng đồng sinh viên công</p>
        <p>nghệ năng động, sáng tạo và đầy cảm hứng!</p>
      </div>
    </div>
  );
};

export default NewActivityComponent;
