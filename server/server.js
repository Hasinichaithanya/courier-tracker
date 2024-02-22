const express = require("express");
const mng = require("mongoose");
const app = express();
const cors = require("cors");
app.use(express.json());
const Couriers = require("./Couriers");
app.use(cors);
app.listen(8080, () => console.log("server is running"));
mng
  .connect(
    "mongodb+srv://t909csechaithanyahasini:Gxa2ACxfRsSMDEQo@cluster0.ml1i83a.mongodb.net/Project1?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/:trackingNum", async (req, res) => {
  try {
    const { trackingNum } = req.params;
    const track = await Couriers.findOne({ trackingNum });
    console.log(track, "track");
    if (!track) {
      return res.status(404).json({ err: "tracking info not found" });
    }
    res.json(track);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

app.post("/track", async (req, res) => {
  try {
    const { trackingNum, status, location, time } = req.body;
    const newTrack = new Couriers({ trackingNum, status, location, time });
    await newTrack.save();
    res.status(201);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

app.put("/track/:trackingNum", async (req, res) => {
  try {
    const { trackingNum } = req.params;
    const { status, location } = req.body;
    const updatedTrack = await Couriers.findOneAndUpdate(
      { trackingNum },
      { $set: { status, location } },
      { new: true }
    );
    if (!updatedTrack) {
      return res.status(404);
    }
    res.json(updatedTrack);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});
