import React, { useState } from 'react';
import './InfoBox.css';
import { Icon, InlineIcon } from '@iconify/react';
import highBattery from '@iconify-icons/flat-color-icons/high-battery';


function InfoBox() {

    function tick() {
        let date = new Date();
        // let ampm = date.getHours() >= 12 ? "PM" : "AM";
        // document.getElementById("time").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "." + date.getMilliseconds() + " " + ampm;
        document.getElementById("time").innerHTML = (date.toLocaleTimeString([], { hours: '2-digit', minutes: '2-digit', seconds: '2-digit'}));
    }

    setInterval(tick, 100);

    return (
        <div className="InfoBox">
            <div className="item">
                <code className="description">Time</code>
                <p className="data" id="time"><span id="ampm"></span></p>
            </div>
            <div className="item">
                <code className="description">Pressure</code>
                <p className="data" id="pressure">7 atm</p>
            </div>
            <div className="item">
                <code className="description">Temperature</code>
                <p className="data" id="temperature">100°C</p>
            </div>
            <div className="item">
                <code className="description">Battery</code>
                <p className="data" id="time"><span style={{ 'font-size': '30px'}} ><Icon icon={highBattery} /></span> 80%</p>
            </div>
            <div className="item">
                <code className="description">Altitude</code>
                <p className="data" id="altitude">500 m</p>
            </div>
            <div className="item">
                <code className="description">Something else (or nothing)</code>
                <p className="data" id="something"></p>
            </div>
        </div>
    );
}

export default InfoBox;