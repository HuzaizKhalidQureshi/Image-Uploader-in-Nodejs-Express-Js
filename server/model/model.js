const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
    unique: true,
  },
  imgBase64: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
});

const model = mongoose.model("images", schema);
module.exports = model;
