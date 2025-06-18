import React from "react";
import "./ClubActivities.css";

const ClubActivities = () => {
  const activities = [
    {
      title: "WORKSHOP",
      content: "Giới thiệu ngôn ngữ lập trình mới, công nghệ mới (AI, IoT, Web, App,...)",
      color: "bg-blue",
    },
    {
      title: "HỌC NHÓM",
      content: `Chia nhóm học theo trình độ, hỗ trợ, học hỏi lẫn nhau\nHọc theo chủ đề mỗi tuần: HTML/CSS, JavaScript, Python, GitHub,...`,
      color: "bg-green",
    },
    {
      title: "CHIA SẺ TÀI LIỆU VÀ DỰ ÁN",
      content: "Tạo kho tài liệu chung (drive, GitHub,...) Cùng xây dựng và triển khai dự án thực tế nhỏ",
      color: "bg-green",
    },
    {
      title: "GIAO LƯU – KẾT NỐI",
      content: "Tổ chức hoạt động ngoại khoá, gặp gỡ các CLB khác\nTạo cộng đồng công nghệ trong và ngoài trường",
      color: "bg-blue",
    },
    {
      title: "CUỘC THI CODING",
      content: `Các cuộc thi lập trình nhỏ\nGiúp rèn luyện kỹ năng giải quyết vấn đề, làm việc nhóm\nCó giải thưởng nhỏ để khích lệ tinh thần học hỏi`,
      color: "bg-lime",
    },
  ];

  return (
    <div className="club-container">
      <h2 className="club-title">HOẠT ĐỘNG CỦA CLB</h2>
      <div className="club-wrapper">
        <div className="club-row">
          {activities.slice(0, 2).map((act, idx) => (
            <ActivityBox key={idx} {...act} />
          ))}
        </div>
        <div className="club-row">
          {activities.slice(2, 4).map((act, idx) => (
            <ActivityBox key={idx + 2} {...act} />
          ))}
        </div>
        <div className="club-row single">
          <ActivityBox {...activities[4]} />
        </div>
      </div>
    </div>
  );
};

const ActivityBox = ({ title, content, color }) => (
  <div className={`club-box ${color}`}>
    <h3 className="club-box-title">{title}</h3>
    <p className="club-box-content">{content}</p>
  </div>
);

export default ClubActivities;
