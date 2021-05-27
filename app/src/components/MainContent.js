import React, { useState } from 'react';
import './MainContent.css';
import IMUDisplay from "./IMUDisplay";
import InfoBox from "./InfoBox";


function MainContent() {
    return (
        <div className="MainContent">
            <div className="name">Rocket Name</div>
            <IMUDisplay />
            <InfoBox />
        </div>
    );
}

export default MainContent;