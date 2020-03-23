const express = require('express');
const helmet = require('helmet');
const cors = require('cors')

const recipesRouter = require('../recipes/recipes-router.js')

const server = express();

server.use(express.json())
server.use(helmet());
server.use(cors());

server.use('/api/recipes', recipesRouter)

server.get('/', (req, res) => {
    res.send(`Port is functional`)
})


module.exports = server