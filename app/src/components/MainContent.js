import React, { useState } from 'react';
import './MainContent.css';
import IMUDisplay from "./IMUDisplay";
import InfoBox from "./InfoBox";


function MainContent() {
    return (
        <div className="MainContent">
            <code className="name">Rocket Name</code>
            <div className="break"></div>
            <div className="break"></div>
            <IMUDisplay />
            <InfoBox />
        </div>
    );
}

export default MainContent;