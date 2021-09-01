const express = require('express')
const router = express.Router()
const Gif = require('../db/models/gif')

router.get('/', (req, res, next) => {
    Gif.find({})
    .then(gifs => res.json(gifs))
    .catch(next)
})

router.get('/:gifId', (req, res, next) => {
    Gif.find({_id: req.params.gifId})
    .then(gifs => res.json(gifs))
    .catch(next)
})

router.post('/', (req, res, next) => {
    Gif.create(req.body)
    .then(gif => res.json(gif))
    .catch(next)
})

router.put('/:gifId', (req, res, next) => {
    Gif.findOneAndUpdate({_id: req.params.gifId}, req.body, {new: true})
    .then(gif => res.json(gif))
    .catch(next)
})

router.delete('/:gifId', (req, res, next) => {
    Gif.findOneAndDelete({_id: req.params.gifId})
    .then(gif => res.json(gif))
    .catch(next)
})

module.exports = router