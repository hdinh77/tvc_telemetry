import React, { useState } from 'react';
import './IMUDisplay.css';
import Rocket from '../images/rocket.png';


function IMUDisplay() {
    return (
        <div className="IMUDisplay">
            <div className="title">
            </div>

            <div className="words">
                <div className="item">
                    <code className="description">Angular Velocity</code>
                    <p className="data" id="angvel">(x, y, z)</p>
                </div>
                <div className="item">
                    <code className="description">Absolute Rotation</code>
                    <p className="data" id="absrot">(x, y, z)</p>
                </div>
                <div className="item">
                </div>
                <div className="item">
                    <code className="description">Servo Orientation</code>
                    <p className="data" id="servorient">(θ, φ) (θ, φ)</p>
                </div>
            </div>
            
            <div className="rocket">
                <img id="rocket" src={Rocket}></img>
            </div>
        </div>
    );
}

export default IMUDisplay;