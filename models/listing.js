const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  country: String,
  location: String,
  image: {
    url: { type: String },  
  },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
