const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    require: ["true", "Name is required"],
  },
  email: {
    type: String,
    require: ["true", "Email is required"],
  },

  msg: {
    type: String,
    require: ["true", "Message is required"],
  },
});

const contactModel = mongoose.model("contact", contactSchema);
module.exports = contactModel;
