// src/Components/Main/About/About.js
import React from 'react';
import ExecutiveBoard from '../Components/Main/About/ExecutiveBoard';
import ActivityBoard from '../Components/Main/About/ActivityBoard';

const About = () => {
  return (
    <div>
      {/* Other components or content for the About page */}
      <ExecutiveBoard /> {/* Include the ExecutiveBoard component */}
      <ActivityBoard />
      {/* Additional content can be added here */}
    </div>
  );
};

export default About;
