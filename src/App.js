import React from "react";
import './App.css';
import ExcuseGenerator from "./ExcuseGenerator";


function App(){

  return (
    <div className="App">
        <div className="emoji-container">
  <span className="emoji">😂</span>
  <span className="emoji">🎉</span>
  <span className="emoji">🔥</span>
  <span className="emoji">💻</span>
  <span className="emoji">😎</span>
  <span className="emoji">📚</span>
  <span className="emoji">🚀</span>
    </div>
     <h1> 🤣 Excuse Generator</h1>
      <p>Need a ridiculous excuse? We've got you.</p>

      <ExcuseGenerator />
    </div>
  );
}

export default App;