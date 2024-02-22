import { useState } from "react";
import axios from "axios";
import Header from "./Header";

function Admin() {
  const [num, setNum] = useState("");
  const [loc, setLoc] = useState("");
  const [status, setStatus] = useState("");
  const [time, setTime] = useState("");
  const [select, setSelect] = useState("Add");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      trackingNum: num,
      status: status,
      location: loc,
      time: time,
    };
    if (select === "ADD") {
      const response = await axios.post("/track", options);
      const data = await response.data;
      console.log(data, "add");
    } else if (select === "UPDATE") {
      const response = await axios.put("/track/" + trackingNum, options);
      const data = await response.data;
      console.log(data);
    }

    setNum("");
    setTime("");
    setLoc("");
    setSelect("Add");
    setStatus("");
  };

  return (
    <div>
      <Header />
      Welcome Admin, you can manage the information below..
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="trackingNum">Tracking Number</label>
          <input
            id="trackingNum"
            type="text"
            placeholder="Enter the Number"
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="loaction">Location</label>
          <input
            id="loaction"
            type="text"
            placeholder="Enter the loaction"
            value={loc}
            onChange={(e) => setLoc(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <input
            id="status"
            type="text"
            placeholder="Enter the status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input
            id="time"
            type="text"
            placeholder="Enter the time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="addupdate">Add or Update</label>
          <select
            id="addupdate"
            onChange={(e) => setSelect(e.target.value)}
            value={select}
          >
            <option value="ADD">Add</option>
            <option value="UPDATE">Update</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Admin;
