import React from "react";
import "./ExecutiveBoard.css";

const teachers = [
  {
    name: "THẦY TẠ MINH QUANG",
    image: "/anh/thayquang.jpg",
  },
  {
    name: "THẦY NGUYỄN HUY HÒA",
    image: "/anh/thayhoa.jpg",
  },
  {
    name: "THẦY ĐẶNG XUÂN MẠNH",
    image: "/anh/thaymanh.jpg",
  },
  {
    name: "THẦY NGUYỄN XUÂN BÁCH",
    image: "/anh/thaybach.jpg",
  },
];

const ExecutiveBoard = () => {
  return (
    <div className="board-container">
      <div className="board-header">
        <h2>
          CLB Công nghệ Số – Nơi khơi nguồn sáng tạo công nghệ
        </h2>
        <p>
          Chúng tôi kết nối những bạn trẻ yêu thích lập trình, AI, IoT và các xu hướng số hiện đại để cùng nhau học hỏi, phát triển và tạo nên giá trị.
        </p>
        <h3>Cùng gặp gỡ đội ngũ Ban Chủ nhiệm đầy nhiệt huyết!</h3>
      </div>

      <div className="section-title">
        <span>BAN CHỦ NHIỆM</span>
      </div>

      <div className="teachers-list">
        {teachers.map((teacher, idx) => (
          <div className="teacher-card" key={idx}>
            <img src={teacher.image} alt={teacher.name} />
            <p className="teacher-name">{teacher.name}</p>
          </div>
        ))}
      </div>

      <p className="board-quote">
        "Các thầy là những người đã đồng hành và dẫn dắt CLB trong suốt hành trình phát triển, góp phần quan trọng vào sự trưởng thành của tập thể."
      </p>
    </div>
  );
};

export default ExecutiveBoard;
