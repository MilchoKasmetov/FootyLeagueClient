import React, { useState, useEffect } from "react";
import axios from "axios";

function MatchList() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    async function fetchMatches() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:5000/api/Match/match"
        );
        setMatches(response.data);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    }
    fetchMatches();
  }, []);

  return (
    <div>
      <h2>Matches</h2>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>{match.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MatchList;
