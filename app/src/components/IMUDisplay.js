import React, { useState } from 'react';
import './IMUDisplay.css';
import Rocket from '../images/rocket.png';


function IMUDisplay() {
    return (
        <div className="IMUDisplay">
            <div className="words">
                <code>IMU Data</code>
                <div></div>
            </div>
            <div className="data">
                <img id="rocket" src={Rocket}></img>
            </div>
        </div>
    );
}

export default IMUDisplay;