const express = require('express')
const router = express.Router()
const Devices = require('../models/device')



router.route('/devices')
    //obtener todos los devices
  .get(async (req, res) => {
    let devices = await Devices.find().exec()
    res.json(devices)
  })



router.route('/devices/:id')
  .get(async (req, res) => {

    let searchId = req.params.id

    let foundItem = await Devices.findById(searchId).exec()

    if (!foundItem) {
      res.status(404).json({ 'message': 'El dispositivo que intentas obtener no existe' })
      return
    }

    res.json(foundItem)
  })

  .put( async (req, res) => {

    let searchId = req.params.id

    let updatedItem = await Devices.findOneAndUpdate({_id: searchId}, req.body, {new: true}).exec()

    if (!updatedItem) {
      res.status(404).json({ 'message': 'El dispositivo que intentas editar no existe' })
      return
    }

    res.json(updatedItem)
  })

  .delete(async (req, res) => {
   
    let searchId = req.params.id

    let foundItem = await Devices.findOneAndDelete({_id: searchId}).exec()

    if (!foundItem) {
      res.status(404).json({ 'message': 'El dispositivo que intentas eliminar no existe' })
      return
    }

    res.json('el dispositivo se ha borrado correctamente')
    res.status(204).json()

  })

module.exports = router