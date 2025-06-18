// src/Components/pages/Activities.js
import React from 'react';
import NewActivityComponent from '../Components/Main/Activities/NewActivityComponent';
import RegularActivities from '../Components/Main/Activities/RegularActivities';
import CollaborativeLearning from '../Components/Main/Activities/CollaborativeLearning';
import GuestSpeaker from '../Components/Main/Activities/GuestSpeaker';
import ExtracurricularActivities from '../Components/Main/Activities/ExtracurricularActivities';
import TechHeartbeat from '../Components/Main/Activities/TechHeartbeat';



const Activities = () => {
  return (
    <div>
      <NewActivityComponent /> {/* Render the NewActivityComponent */}
      <RegularActivities />
      <CollaborativeLearning />
      <GuestSpeaker />
      <ExtracurricularActivities />
      <TechHeartbeat />
    </div>
  );
};

export default Activities;
