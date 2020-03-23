const express = require('express');

const Recipe = require('./recipes-model.js')

const router = express.Router()

router.get('/', (req, res) => {
    
    Recipe.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(() => {
        res.status(500).json({ message: 'Error retrieving recipes' })
    })
})

module.exports = router