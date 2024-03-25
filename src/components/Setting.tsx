import { Link } from "react-router-dom";
import gameConfig from "../assets/gameConfig.png";
import React, { useState, ChangeEvent } from "react";
import row from "../assets/row.png";
import col from "../assets/col.png";
import time from "../assets/time.png";
import budget from "../assets/budget.png";
import cost from "../assets/cost.png";
import maxDep from "../assets/maxDep.png";
import reTime from "../assets/ReTime.png";
import maxInt from "../assets/maxInt.png";
import ready from "../assets/ready.png";
import ready2 from "../assets/ready2.png";
import "./Setting.css";

export function Setting() {
  const [rows, setRow] = useState<number>(0);
  const [cols, setCol] = useState<number>(0);
  const [times, setTime] = useState<number>(0);
  const [budgets, setBudget] = useState<number>(0);
  const [costs, setCost] = useState<number>(0);
  const [maxDeps, setMaxDep] = useState<number>(0);
  const [reTimes, setReTime] = useState<number>(0);
  const [maxInts, setMaxInt] = useState<number>(0);
  const [mouseOn, setMouseOn] = useState<boolean>(false);

  const handleRowChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRow(Number(event.target.value)); // Convert value to number
  };

  const handleColChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCol(Number(event.target.value)); // Convert value to number
  };

  const handleBudgetChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setBudget(Number(event.target.value)); // Convert value to number
  };
  const handlecostChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCost(Number(event.target.value)); // Convert value to number
  };
  const handleTimeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTime(Number(event.target.value)); // Convert value to number
  };
  const handleDepChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setMaxDep(Number(event.target.value)); // Convert value to number
  };
  const handleReTimeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setReTime(Number(event.target.value)); // Convert value to number
  };
  const handleMaxIntChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setMaxInt(Number(event.target.value)); // Convert value to number
  };

  return (
    <div className="container">
      <div className="top">
        <img alt="GameConfig" src={gameConfig} />
        <div className="left" style={{ marginTop: "30px" }}>
          <img alt="Rows" src={row} />
          <select className="box" onChange={handleRowChange} value={rows}>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
        <div>
          <img alt="Col" src={col} />
          <select className="box" onChange={handleColChange} value={cols}>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
        <div>
          <img alt="Time" src={time} />
          <select className="box" onChange={handleTimeChange} value={times}>
            <option value="30">30</option>
            <option value="45">45</option>
            <option value="60">60</option>
            <option value="75">75</option>
          </select>
        </div>
        <div>
          <img alt="Budget" src={budget} />
          <select className="box" onChange={handleBudgetChange} value={budgets}>
            <option value="30">30</option>
            <option value="45">45</option>
            <option value="60">60</option>
            <option value="75">75</option>
          </select>
        </div>
        <div>
          <img alt="Cost" src={cost} />
          <select className="box" onChange={handlecostChange} value={costs}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div>
          <img alt="MaxDep" src={maxDep} />
          <select className="box" onChange={handleDepChange} value={maxDeps}>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div>
          <img alt="ReTime" src={reTime} />
          <select className="box" onChange={handleReTimeChange} value={reTimes}>
            <option value="30">30</option>
            <option value="45">45</option>
            <option value="60">60</option>
            <option value="75">75</option>
          </select>
        </div>
        <div>
          <img alt="MaxInt" src={maxInt} />
          <select className="box" onChange={handleMaxIntChange} value={maxInts}>
            <option value="30">30</option>
            <option value="45">45</option>
            <option value="2">60</option>
            <option value="3">75</option>
          </select>
        </div>
        <div className="last">
          <Link to="/Ingame">
            <img
              alt="Ready"
              src={mouseOn ? ready2 : ready}
              onMouseEnter={() => setMouseOn(true)}
              onMouseLeave={() => setMouseOn(false)}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Component = Setting;
