var db = require('../models/index');

module.exports.findAll = (req, res) => {
    db.Cities.findAll().then(
           (results) => {
               res.status(200).send(results);
           }
       ).catch(() => {
           res.status(500).send({
               status: "error"
           })
       })
};