var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET matches listing. */

//get artist by matching city
router.get("/", function(req, res, next) {
  db("SELECT * FROM mvp_artists WHERE city = London;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;
