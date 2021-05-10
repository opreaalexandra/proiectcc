const express = require("express")
const router = express.Router()

const citiesController = require('../controllers/CitiesController.js')

const checkAuthentication = function registration(req, res, next){
    next();
}

router.get('/cities', checkAuthentication, citiesController.findAll)


module.exports = router