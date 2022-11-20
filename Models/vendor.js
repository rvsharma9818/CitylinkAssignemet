const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema(
  {
    vendorId: {
      type: Number,
      required: true,
      unique: true,
    },
    driverName: {
      type: String,
      required: true,
    },
    vehicleNumber: {
      type: String,
      required: true,
      unique: true,
    },
    
    vehicleModel: {
        type: String,
        required: true,
      },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Vendr", VendorSchema);
