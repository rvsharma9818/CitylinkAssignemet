const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const BookingSchema = new mongoose.Schema(
  {
    bookingId: {
      type: Number,
      required: true,
    },

    source: {
      sourceName: {
        type: String,
        required: true,
      },
      address: {
        sourceAddress: {
          type: String,
          required: true,
        },
        sourceLocation: {
          type: String,
          required: true,
        },
        sourceCity: {
          type: String,
          required: true,
        },
        sourceState: {
          type: String,
          required: true,
        },
        sourcePostalCode: {
          type: Number,
          required: true,
        },
        sourceCountry: {
          type: String,
          required: true,
        },
      },
      sourceLatitude: {
        type: Number,
        required: true,
      },
      sourceLongitude: {
        type: Number,
        required: true,
      },
    },
    status: {
      type: String,
      enum: ["confiremd", "pending", "cancelled"],
      default:"pending"
    },
    customer: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    destination: {
      destinationName: {
        type: String,
        required: true,
      },
      address: {
        destinationAddress: {
          type: String,
          required: true,
        },
        destinationLocation: {
          type: String,
          required: true,
        },
        destinationCity: {
          type: String,
          required: true,
        },
        destinationState: {
          type: String,
          required: true,
        },
        destinationPostalCode: {
          type: Number,
          required: true,
        },
        destinationCountry: {
          type: String,
          required: true,
        },
        coordinates: {
          destinationLongitude: {
            type: Number,
            required: true,
          },
          destinationLatitude: {
            type: Number,
            required: true,
          },
        },
      },
    },
    vendor: {
      type: ObjectId,
      ref: "Vendor",
      required: true,
    },
    bookingTime: {
      type: String,
      required: true,
    },
    pickupTime: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);
module.exports = mongoose.model("Booking", BookingSchema);
