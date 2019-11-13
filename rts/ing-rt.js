const express = require('express')
const helper = require('./helpers.js')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('sanity router')
})


router.get('/recipes', (req, res) => {
    helper.findRecipes()
    .then(rec => {
        res.status(200).json(rec)
    })
    .catch(err => res.status(500).json({ error: `${err}`}))
})

router.get('/recipes/:id/steps', (req, res) => {
    helper.findInstructions(req.params.id)
    .then(steps => res.status(200).json(steps))
    .catch(err => res.status(500).json({ error: `${err}`}))
})
module.exports = router