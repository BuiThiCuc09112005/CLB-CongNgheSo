// src/Components/Main/Home/Message.js
import React from 'react';
import './Message.css';

const Message = () => {
  return (
    <div className="message-container">
      <h2>____________________THÔNG ĐIỆP ____________________</h2>
      <div className="message-paragraphs">
        <div className="paragraph-group">
          <p className="left-align">"Lập trình không chỉ là viết mã</p>
          <p className="left-align">mà là xây dựng tương lai."</p>
        </div>
        <div className="paragraph-group">
          <p className="right-align">"Công nghệ giúp ta chạm tới những</p>
          <p className="right-align">điều tưởng chừng không thể."</p>
        </div>
        <div className="paragraph-group">
          <p className="center-align">"Công nghệ là công cụ, nhưng chính con</p>
          <p className="center-align">người mới là người tạo ra thay đổi."</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
