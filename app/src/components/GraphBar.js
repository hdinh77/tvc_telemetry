import React, { useState } from 'react';
import './GraphBar.css';
import { Link } from "react-router-dom";


function GraphBar() {
    return (
        <div className="GraphBar">
            <div className="state">CURRENT STATE</div>
            <div className="graphs"></div>
        </div>
    );
}

export default GraphBar;