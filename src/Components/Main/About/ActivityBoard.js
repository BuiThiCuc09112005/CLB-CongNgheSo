import React from 'react';
import './ActivityBoard.css';

const classes = [
  {
    name: 'LỚP 04UDPM',
    image: '/anh/anh04.jpg', // 👉 sửa đường dẫn ảnh lớp 04 tại đây
  },
  {
    name: 'LỚP 05UDPM',
    image: '/anh/anh05.jpg', // 👉 sửa đường dẫn ảnh lớp 05 tại đây
  },
];
const ActivityBoard = () => {
  return (
    <div className="activity-board">
      <div className="activity-header">
        <h2>BAN HOẠT ĐỘNG</h2>
        <p>(chuyên môn, truyền thông, sự kiện)</p>
      </div>

      <div className="class-cards">
        {classes.map((item, index) => (
          <div key={index} className="class-card">
            <div className="card-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="class-name">{item.name}</div>
          </div>
        ))}
      </div>

      <p className="activity-description">
        Lực lượng nòng cốt hỗ trợ tổ chức các hoạt động chuyên môn, truyền thông và sự kiện cho CLB. Các thành viên là những sinh viên năng động, sáng tạo, có trách nhiệm, đóng vai trò quan trọng trong việc kết nối giữa CLB với sinh viên và tạo nên môi trường học tập – rèn luyện sôi nổi, hiệu quả.
      </p>
    </div>
  );
};

export default ActivityBoard;
