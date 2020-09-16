const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tenantSchema = new Schema({
  unit: { type: String, required: true },
  name: { type: String },
  rent: { type: Number },
  date: { type: Date, default: Date.now },
  moveInDate: { type: Date },
  moveOutDate: { type: Date }
});

const Tenant = mongoose.model("Tenant", tenantSchema);

module.exports = Tenant;