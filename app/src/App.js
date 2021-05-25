import './App.css';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import socketIOClient from "socket.io-client";
import Particles from 'react-particles-js';
import MainContent from './components/MainContent';
import GraphBar from './components/GraphBar';


const ENDPOINT = "http://localhost:4001";

function App() {
  const [response, setResponse] = useState([]);
  const [switcher, setSwitch] = useState("");
  const [xAxis, setXAxis] = useState("");
  const [yAxis, setYAxis] = useState("");
  var arr;
  
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("portData", data => {
      //setResponse(data.toString().split(" "));
      arr = data.toString().split(" ");
      setSwitch(arr[0]);
      setXAxis(arr[1]);
      setYAxis(arr[2]);
    });
  }, []);

  return (
    <div className="App">
        <Particles
          params={{
            "particles": {
                "number": {
                    "value": 60,
                    "density": {
                        "enable": true,
                        "value_area": 1500
                    }
                },
                "line_linked": {
                    "enable": true,
                    "opacity": 0.06
                },
                "move": {
                    "direction": "right",
                    "speed": 0.05
                },
                "size": {
                    "value": 1
                },
                "opacity": {
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.4
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    }
                },
                "modes": {
                    "push": {
                        "particles_nb": 1
                    }
                }
            },
            "retina_detect": true
        }}
        style={{
            width: "100vw",
            height: "100vh",
            background: "#000000",
            position: "absolute",
            left: "0px"
        }} />
        
        <div className="rows">
            <MainContent />
            <GraphBar />
        </div>
        
        
        {/*<Link to="/settings">Click to go to Settings.js</Link>
        <br></br><code>Response: {response}</code>
        <br></br><code>Switch: {switcher}</code>
        <br></br><code>X-axis: {xAxis}</code>
        <br></br><code>Y-axis: {yAxis}</code>*/}
    </div>
  );
}

export default App;
