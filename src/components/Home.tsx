import { Link } from "react-router-dom";
import upbeat from "../assets/upbeat.png";
import play from "../assets/play.png";
import "./Home.css";
// import "./home.css";

function Home() {
  return (
    <div className="background">
      <div style={{ marginLeft: "50%", transform: "translateX(-50%)" }}>
        <img alt="Upbeat" src={upbeat} style={{ marginTop: "10%" }} />
      </div>
      <div
        style={{
          marginLeft: "50%",
          transform: "translateX(-50%)",
          marginTop: "10%",
        }}
      >
        <Link to="/setting">
          <img alt="Start" src={play} />
        </Link>
      </div>
    </div>
  );
}

export const Component = Home;
