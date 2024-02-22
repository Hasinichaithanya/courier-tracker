import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Header from "./Header";

import "./App.css";

function App() {
  const [trackingNum, setTrackingNum] = useState("");
  const [info, setInfo] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("submitted");
      console.log("http://localhost:5000/" + trackingNum);
      const res = await axios.get("http://localhost:5000/" + trackingNum);
      setInfo(res.data);
      setTrackingNum("");
    } catch (err) {
      console.log(err);
      setInfo(null);
    }
  };
  return (
    <div className="App">
      <Header />
      <h1>Welcome!</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter your tracking ID</label> <br />
        <input
          type="text"
          onChange={(e) => setTrackingNum(e.target.value)}
          value={trackingNum}
          placeholder="Enter your courier tracking Id"
        />
        <br />
        <button type="submit">Track</button>
      </form>
      {info !== null && <p>{JSON.stringify(info)}</p>}
    </div>
  );
}

export default App;
