import "./Ingame.css";
import React, { useState, useEffect } from "react";
import BlankInputBox from "./BlankInputBox"; // Import the BlankInputBox component
import Table from "./Table";
import Turn from "../assets/turn.png";
import Time from "../assets/time2.png";

export function Ingame() {
  const initialSeconds = 30;
  const [players, setPlayers] = useState(2); // Total number of players
  const [currentPlayer, setCurrentPlayer] = useState(1); // Current player turn
  const [seconds, setSeconds] = useState(initialSeconds);
  const [turn, setTurn] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          endTurn(); // Increment turn value
          return initialSeconds; // Reset seconds back to initialSeconds
        } else {
          return prevSeconds - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const endTurn = () => {
    if (currentPlayer === players) {
      setTurn((prevTurn) => prevTurn + 1); // Increment turn value
      setCurrentPlayer(1); // Reset to player 1
    } else {
      setCurrentPlayer((prevPlayer) => prevPlayer + 1); // Switch to the next player
    }
    setSeconds(initialSeconds); // Reset seconds back to initialSeconds
  };

  return (
    <div>
      <div className="header">
        <div
          className="left font"
          style={{ marginTop: "30px", marginLeft: "15px" }}
        >
          <img alt="Turn" src={Turn} /> {turn} <img alt="Time" src={Time} />{" "}
          {seconds}
        </div>{" "}
        {/* Display turn value */}
        <div className="right font" style={{ marginTop: "30px" }}>
          Player : {currentPlayer}
        </div>{" "}
        <div className="right font" style={{ marginTop: "30px" }}>
          BUDGET : 888888
        </div>
      </div>
      <div className="content-container">
        <div className="left-content">
          <BlankInputBox />
          <button onClick={endTurn}>End Turn</button>{" "}
          {/* Add End Turn button */}
        </div>
        <div className="right-content">
          <Table />
        </div>
      </div>
    </div>
  );
}

export const Component = Ingame;
