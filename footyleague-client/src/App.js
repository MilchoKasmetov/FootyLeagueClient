import React from "react";
import MatchList from "./components/MatchList.js";
import TeamList from "./components/TeamList.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Footy League</h1>
      <MatchList />
      <TeamList />
    </div>
  );
}

export default App;
