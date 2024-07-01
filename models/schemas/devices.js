const mongoose = require('mongoose')
const Schema = mongoose.Schema

let itemSchema = new Schema({

  devices: [{
    userId: { type: String, required: true },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    description: { type: String, required: false },
    lastConexion: { type: Date, required: false },
    parentOrg: { type: String, required: true },
    role: { type: String, required: true },
    type: { type: String, required: true },
    phoneNumber: { type: String, required: true },
  }],
  created_at: { type: Date, default: Date.now },
});

module.exports = itemSchema