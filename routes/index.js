
/*
    Express.Router Example
    Function : Routing requests to adequate controllers
        1. import controller 
        2. "mount" controller as middlewares to each requests
        3. export router
*/

const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})
// define the home page route
router.get('/', (req, res) => {
    res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
    res.send('About birds')
})

module.exports = router