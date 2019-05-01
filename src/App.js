import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import TestBackground from "./components/TestBackground";
import TestSpeech from "./components/TestSpeech";
import TestHUD from "./components/TestHUD.js";
import TestWindow from "./components/TestWindow.js";


import TestFloor from "./components/TestFloor.js";
// import TypeTest from './components/TypeTest.js';

function App() {
  return (
    <div>
        {/* <TypeTest /> */}
        <TestHUD />
        <TestWindow />
    <TestSpeech />
    <TestFloor />

    </div>
  );
}

export default App;



