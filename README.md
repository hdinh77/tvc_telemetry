# TVC Telemetry Software Workstation

## To start the development app
 ```
    $ cd tvc-telemtry
    $ cd app
    $ npm run dev
```
```
    $ cd tvc-telemetry
    $ node server.js
```

## Node.js Dependencies
 - react, react-dom, react-router-dom
 - electron, electron-builder (packages and builds electron), electron-is-dev (debugging)
 - wait-on (so webpack server runs before electron)
 - concurrently
 - express
 - socket.io, socket.io-client
 - serialport

## Setting up React with Electron
 - install the React dependencies ```npm i react```
 - create the react app by running ```npx create-react-app app```
 - then, change directory into ```app``` and install the Electron, wait-on, and concurrently dependencies
 - to create routers to different pages, use the BrowserRouter libraries from ```react-router-dom```
 - in the index.js file where we are rendering the React DOM, wrap the contents in <React.StrictMode> in a ```<BrowserRouter></BrowserRouter>``` tag
 - this lets you use URLs to route to different components, using ```<Link>``` as well
 - then, create an 'electron' directory and a main.js file inside
 - in the main.js, we can create the browser window and port to localhost in development mode
 - next, add scripts in the package.json:
    - "dev": "concurrently \"npm start\" \"wait-on http://localhost:3000 && electron .\""
        - this starts the react app, and waits for this app to render in localhost before running electron to make sure electron renders the app correctly at the same time
    - "ebuild": "npm run build && node_modules/.bin/build"
        - builds the electron app in the right path
 - add a .env file to pass environment variables, containing one line: ```BROWSER=none```

## server.js file for serial input 
  - this file lives on the top of the directory, outside of the app directory
 #### serialport
  - install dependencies ```npm i serialport```
  - set port name (can either read as argument, or manually "COM3")
  - create a port with the port name and baud rate; make sure it matches with the c file
  - need a parser (not the direct port) that read the serial data from so our messages don't get split up with each read
  - parser checks for newline character to end message
  - two actions: on 'open' and 'data', use this data for socket.io
 #### socket.io
  - install dependencies `npm i socket.io`
  - when creating an http object, make sure to enter in the correct directory of the output file for socket.io - _dirname + '/file.js'
  - now to create the server app, use http.createServer()
   - for html files, Content-Type is text/html
   - for React projects, Content-Type is application/json
  - IMPORTANT: now we create the socket.io object...MUST set a cors parameter with the site where the project will be hosted since the React app needs permission from CORS in order to accept data from the server
  ```
    var io = require('socket.io')(app, {
      cors: {
          origin: "http://localhost:3000"
      }
    });
  ```
  - io.on() receives messages from the frontend
  - io.emit() sends messages to the frontend
  - when sending messages, must be in string or JSON format so use toString() or toJSON() functions
  - indicate a different port for data transmission between client + server since port 3000 hosts the React app ```app.listen(4001)```

## App.js file for socket.io-client
 - first, install the socket.io-client library into the app directory
 - import the useEffect and useState components from React
 - to use socket.io to receive data on the frontend, import the socketIOClient from the socket.io-client
 - create a constant variable that holds the endpoint of where the data is streaming through, i.e. localhost with port 4001
 - useState to create a setResponse function with an empty value
 - then, useEffect to setResponse whenever a "portData" message is received

## Configurations for `package.json`
 - need to modify the scripts and dependencies for nodejs
 - there are two `package.json` files: one for creation of the React and server.js files, and one for running the Electron+React joint app
 #### React package.json
  - this file is located on the top of the directory, outside the React app directory
  - create a new configuration called "proxy" to the localhost, this lets the server accept requests from localhost
 #### Electron+React package.json
  - this file is located inside the React app directory
  - add two configurations at the top of the file to reroute the build to the electron app:
    - `"homepage": "./"`
    - `"main": "./electron/main.js"`
