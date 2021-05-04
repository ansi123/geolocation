const mongoose = require("mongoose");

const GeoLocation = new mongoose.Schema({
  locationTest: {
    type: {
      type: String,
      default: "Point",
    },
    coordinates: {
      type: [Number],
    },
  },
});

GeoLocation.index({ locationTest: "2dsphere" });

// const alienSchema = new mongoose.Schema({
  // name: {
  //     type: String,
  //     required: true
  // },
  // tech: {
  //     type: String,
  //     required: true
  // },
  // sub: {
  //     type: Boolean,
  //     required: true,
  //     default: false
  // },
//   geoLocation: GeoLocation,
// });

module.exports = mongoose.model("location", GeoLocation);
