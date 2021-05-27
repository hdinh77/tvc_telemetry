import React, { useState } from 'react';
import './GraphBar.css';
import Graph from './Graph'

function GraphBar() {
    return (
        <div className="GraphBar">
            <div className="state"> STATE</div>
            <div className="graphs">
                <Graph />
                <Graph />
                <Graph />
            </div>
        </div>
    );
}

export default GraphBar;