const mng = require("mongoose");

const schema = new mng.Schema({
  trackingNum: { type: String, required: true },
  status: { type: String, required: true },
  location: { type: String, required: true },
  time: { type: String, required: true },
});

const Couriers = mng.model("courier", schema);
module.exports = Couriers;
