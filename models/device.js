const mongoose = require('mongoose')
const DeviceSchema = require('./schemas/devices')
const DeviceModel = mongoose.model('devices', DeviceSchema)

module.exports = DeviceModel