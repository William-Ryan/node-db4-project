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

router.get('/:id/ingredients', (req, res) => {
    const { id } = req.params;

    Recipe.getShoppingList(id)
    .then(list => {
        if(list.length){
            res.status(200).json(list)
        } else {
            res.status(404).json({ message: 'Could not find this recipes ingredients' })
        }
    })
    .catch(() => {
        res.status(500).json({ message: 'Error Retrieving this Recipe'})
    })
})

router.get('/:id/steps', (req, res) => {
    const { id } = req.params;

    Recipe.getInstructions(id)
    .then(steps => {
        if(steps.length){
            res.status(200).json(steps)
        } else {
            res.status(404).json({ message: 'Could not find this recipes steps' })
        }
    })
    .catch(() => {
        res.status(500).json({ message: 'Error Retrieving this Recipe' })
    })
})

module.exports = router