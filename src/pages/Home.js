// src/Components/Main/Home/Home.js
import React from 'react';
import Banner from '../Components/Main/Home/Banner'; // Đảm bảo đường dẫn chính xác đến Banner
import Purpose from '../Components/Main/Home/Purpose';
import Participants from '../Components/Main/Home/Participants';
import ClubActivities from '../Components/Main/Home/ClubActivities';
import Message from '../Components/Main/Home/Message';

const Home = ({ setActiveMenu }) => { // Nhận setActiveMenu từ props
  return (
    <div>
      <Banner setActiveMenu={setActiveMenu} /> {/* Truyền setActiveMenu xuống Banner */}
      <Purpose />
      <Participants />
      <ClubActivities />
      <Message />
      {/* Thêm nội dung khác cho trang Home ở đây nếu cần */}
    </div>
  );
};

export default Home;
