var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET users listing. */

router.get("/", function(req, res, next) {
  db("SELECT * FROM mvp_users;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

//GET user by id

router.get("/:id", async (req, res, next) => {
  let { id } = req.params;

  try {
    let result = await db(`SELECT * FROM mvp_users WHERE id = ${id}`);
    let user = result.data;
    if (user.length === 0) {
      res.status(404).send({ error: "student not found" });
    } else {
      res.send(user[0]);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//PUT modify user by id
router.put("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let result = await db(`SELECT * FROM mvp_users WHERE id = ${id}`);

    if (result.data.length === 1) {
      let { first_name, last_name, pronouns, email, city, style_one} = req.body;
      let sql = `
      UPDATE mvp_users
      SET first_name = '${first_name}', 
      last_name = '${last_name}',
      pronouns = '${pronouns}',
      email = '${email}',
      city = '${city}',
      style_one = '${style_one}' 
      WHERE id = ${id}`
      // Do the update
      await db(sql);
      result = await db("SELECT * FROM mvp_users");
      res.send(result.data);
    } else {
      res.status(404).send({ error: "Item not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});




module.exports = router;
