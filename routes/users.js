var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('welcome to the mvp');
});

// router.get("/users", (req, res) => {
//   // Send back the full list of items
//   db("SELECT * FROM mvp_users;")
//     .then(results => {
//       res.send(results.data);
//     })
//     .catch(err => res.status(500).send(err));
// });

module.exports = router;
